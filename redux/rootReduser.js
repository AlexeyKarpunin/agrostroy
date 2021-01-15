import { combineReducers } from 'redux';
import {CITY_ACTION, ASK_USER_GEO_ACTION} from './types'
import geolocation from '../gealocation/geo';
import findById from '../gealocation/geoById';


const INIT_CITY = {
  city: 'Astrakhan',
}


function city( state=INIT_CITY, action) {
  switch (action.type) {
    case CITY_ACTION:
      state.city = action.city
      return state;
    case ASK_USER_GEO_ACTION:
      const geoStatus = geolocation();
      if (geoStatus === false) {
        findById.then(response => response.json()).then((result) => console.log(result.location.data.city))
      } else {
        console.log(geoStatus)
      }
      return state;  
    default:
      return  state;
  }
}

const rootReducer = combineReducers({
  city,
});

export default rootReducer;