import { useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect} from 'react';
import {askUserGealocation, giveUserCity} from '../redux/actions';
import findCity from './findCity';

export default function UrlLogistic (props) {
  const router = useRouter();
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language)
  const dispatch = useDispatch();

  useEffect ( () => console.log('WL:', window.location), [])

  // useEffect( () => {
  //   if (!router.asPath.includes('?city=')) {
  //     fetch('/api/ip').then( res => res.json()).then( (data) => {
  //       dispatch(askUserGealocation(data.ip));
  //     });
  //   } else {
  //     dispatch(giveUserCity(findCity(router.asPath)));
  //   }
  // }, []);

  // useEffect( () => {
  //   // router.push(`${props.link}`, undefined, { shallow: false }) //city[language].rout
  //   router.push(`${props.link}`, `${props.link}`, { locale: `${language}` });
  //   console.log('router', router)
    
  // },[city])

  return (<script></script>)
}