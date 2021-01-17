import { combineReducers } from 'redux';
import {CITY_ACTION, ASK_USER_GEO_ACTION} from './types'
import geolocation from '../gealocation/geo';



const INIT_CITY = {
  defaultCity: 'Astrakhan',
  city: undefined,
}


function city( state=INIT_CITY, action) {
  switch (action.type) {
    case CITY_ACTION:
      state.city = action.city
      return state; 
    case ASK_USER_GEO_ACTION:
      state.city = action.city
      return state;   
    default:
      return  state;
  }
}

const rootReducer = combineReducers({
  city,
});

export default rootReducer;