import {
  CITY_ACTION, 
  ASK_USER_GEO_ACTION,
  LANGUAGE_ENG,
  LANGUAGE_RUS,
  GIVE_CITY_FOR_USER,
} from './types';

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

export function giveUserCity(data) {
  return {
    type: GIVE_CITY_FOR_USER,
    city: data,
  }
}

export function changeLanguageEng () {
  return {
    type: LANGUAGE_ENG,
  }
}

export function changeLanguageRus () {
  return {
    type: LANGUAGE_RUS,
  }
}
