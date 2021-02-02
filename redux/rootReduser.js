/* eslint-disable global-require */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { combineReducers } from 'redux';
import {
  CITY_ACTION,
  GIVE_CITY_FOR_USER,
  ASK_USER_GEO_ACTION,
  LANGUAGE_RUS,
  LANGUAGE_ENG } from './types'
import cities from '../cities/citiesNames';  


const INIT_CITY = {
  city: require('../cities/astrakhan.json'),
}

function checkCity (city) {
  switch(city){
    case cities.krasnodar:
      return require('../cities/krasnodar.json');
    case cities.rostov:
      return require('../cities/rostov.json');
    case cities.baksan:
      return require('../cities/baksan.json');
    case cities.budennovsk:
      return require('../cities/budennovsk.json');
    case cities.cherkessk:
      return require('../cities/cherkessk.json');
    case cities.elista:
      return require('../cities/elista.json');
    case cities.ipatovo:
      return require('../cities/ipatovo.json');
    case cities.magas:
      return require('../cities/magas.json');
    case cities.moscow:
      return require('../cities/moscow.json');
    case cities.nalchik:
      return require('../cities/nalchik.json');
    case cities.prokhladnyy:
      return require('../cities/prokhladnyy.json');
    case cities.pyatigorsk:
      return require('../cities/pyatigorsk.json');
    case cities.saintPetersburg:
      return require('../cities/saintPetersburg.json');
    case cities.stavropol:
      return require('../cities/stavropol.json');
    case cities.vladikovkaz:
      return require('../cities/vladikovkaz.json');
    case cities.volgograd:
      return require('../cities/volgograd.json');                            
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