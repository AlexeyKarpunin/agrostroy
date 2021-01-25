import {giveUserCity} from '../redux/actions';
import city from '../cities/citiesNames';

export default function findCity (url) {
  const urlCity = url.split('=')[1];
  if (!urlCity) {return giveUserCity(city.astrakhan);}

  switch (urlCity) {
    case city.krasnodar:
      console.log('YESSSSSSSSSSSSSSSSSSs')
      return city.krasnodar
    default:
      return city.astrakhan
  }
  // console.log('url',  url.search(city.krasnodar))
}