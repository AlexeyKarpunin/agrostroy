import {CITY_ACTION, ASK_USER_GEO_ACTION} from './types';
import findById from '../gealocation/geoById';

export function changeCity(city) {
  return {
    type: CITY_ACTION,
    city,
  }
}

export function askUserGealocation(ip) {
  return function (dispatch) {
    findById(ip).then( (res) => res.json()).then((data) => {
      dispatch({
        type: ASK_USER_GEO_ACTION,
        city: data,
      })
    });
  }
}
