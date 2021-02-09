import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import {giveUserCity} from '../redux/actions';
import findById from './geoById';
import cities from '../cities/citiesNames';

export default function GetCityById() {
  const dispatch = useDispatch();
  useEffect (() => {
    const city = localStorage.getItem('city');
    if (city) {dispatch(giveUserCity(city));

    } else {

    fetch('/api/ip').then( (res) => res.json()).then( (data) => {
        findById(data.ip).then(response => response.json())
        .then( (location) => {
          // eslint-disable-next-line no-use-before-define
          dispatch(giveUserCity(translateCity(location.location.data.city)))
          console.log(location.location.data.city)
        })
        .catch(error => {
          console.log('error', error);
          dispatch(giveUserCity('default'));
        });;
      });

    }
  }, [])
  return (<></>)
}

/*
  195.190.98.254 - Ростов-на-Дону;
  195.190.102.254 - Санкт-Петербург;
*/

function translateCity (city) {
  switch(city) {
    case 'Ростов-на-Дону':
      localStorage.setItem('city', cities.rostov);
      return cities.rostov
    case 'Санкт-Петербург':
      localStorage.setItem('city', cities.saintPetersburg);
      return cities.saintPetersburg  
    case 'Краснодар':
      localStorage.setItem('city', cities.krasnodar);
      return cities.krasnodar
    case 'Баксан':
      localStorage.setItem('city', cities.baksan);
      return cities.baksan
    case 'Магас':
      localStorage.setItem('city', cities.magas);
      return cities.magas
    case 'Буденновск':
      localStorage.setItem('city', cities.budennovsk);
      return cities.budennovsk
    case 'Москва':
      localStorage.setItem('city', cities.moscow);
      return cities.moscow 
    case 'Ставрополь':
      localStorage.setItem('city', cities.stavropol);
      return cities.stavropol
    case 'Владикавказ':
      localStorage.setItem('city', cities.vladikovkaz); 
      return cities.vladikovkaz  
    case 'Нальчик':
      localStorage.setItem('city', cities.nalchik); 
      return cities.nalchik
    case 'Черкесск':
      localStorage.setItem('city', cities.cherkessk); 
      return cities.cherkessk
    case 'Волгоград':
      localStorage.setItem('city', cities.volgograd); 
      return cities.volgograd 
    case 'Прохладный':
      localStorage.setItem('city', cities.prokhladnyy); 
      return cities.prokhladnyy   
    case 'Элиста':
      localStorage.setItem('city', cities.elista); 
      return cities.elista
    case 'Ипатово':
      localStorage.setItem('city', cities.ipatovo); 
      return cities.ipatovo
    case 'Пятигорск':
      localStorage.setItem('city', cities.pyatigorsk); 
      return cities.pyatigorsk          
    default:
      return cities.astrakhan
  }
}