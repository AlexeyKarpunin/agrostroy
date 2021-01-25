/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { combineReducers } from 'redux';
import {
  CITY_ACTION,
  GIVE_CITY_FOR_USER,
  ASK_USER_GEO_ACTION,
  LANGUAGE_RUS,
  LANGUAGE_ENG } from './types'


const INIT_CITY = {
  city: require('../cities/astrakhan.json'),
}

function checkCity (city) {
  switch(city){
    case'Krasnodar':
      return require('../cities/krasnodar.json');
    default:
      return require('../cities/astrakhan.json');
  }
}

function city( state=INIT_CITY, action) {
  switch (action.type) {
    case ASK_USER_GEO_ACTION:
      const userCity = action.city.location; // {data: {city: 'Краснодар'}} // 
      if (userCity) {state.city = checkCity(userCity.data.city);}
      return state;
    case GIVE_CITY_FOR_USER:
    state.city = checkCity(action.city);
    return state;     
    default:
      return  state;
  }
}

const INIT_LANGUAGE = {
  language: 'ru' // or eng
}

function language (state=INIT_LANGUAGE, action) {
  switch (action.type) {
    case LANGUAGE_ENG:
      state.language = 'eng';
    return state;
    case LANGUAGE_RUS:
      state.language = 'ru';
    return state;
    default :
      return state;
  }
}

const rootReducer = combineReducers({
  city,
  language,
});

export default rootReducer;