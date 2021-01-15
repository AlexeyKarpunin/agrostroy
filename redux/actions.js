import { func } from 'prop-types'
import {CITY_ACTION, ASK_USER_GEO_ACTION} from './types';


export function changeCity(city) {
  return {
    type: CITY_ACTION,
    city,
  }
}


export function askUserGealocation() {
  return {
    type: ASK_USER_GEO_ACTION,
  }
}