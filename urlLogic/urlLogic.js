import { useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect, useState} from 'react';
import {changeLanguageEng, changeLanguageRus, giveUserCity} from '../redux/actions';
import findCity from './findCity';
import Url from 'url-parse';
import parse from 'url-parse'

export default function UrlLogistic () {
  const router = useRouter();
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language)
  const dispatch = useDispatch();

  useEffect(()=>{
    if (router.pathname === '/404' || router.pathname === '/_error') {
      const oldPath = router.asPath.split('/').filter( (path) => path !== '' && path !== '_error' && path !== '404').slice(2).join('/');
      router.push(oldPath ? oldPath : '/');

      const [language, city] = router.asPath.split('/').filter( (path) => path !== '' && path !== '_error' && path !== '404').slice(0, 2)
      if (language === 'ru') {
        localStorage.setItem('lang', 'ru');
        // dispatch(changeLanguageRus());
      }

      if (language === 'eng') {
        localStorage.setItem('lang', 'eng');
        // dispatch(changeLanguageEng());
      }

      localStorage.setItem('city', city);
      // dispatch(giveUserCity(city));
    }
  }, [])

  useEffect(()=>{
     router.push(router.pathname, `/${language}/${city[language].rout}${router.pathname}`, { shallow: true })
  }, [router.pathname, language, city[language].rout]);


  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (url === router.pathname) {
        router.push(router.pathname, `/${language}/${city[language].rout}${router.pathname}`, { shallow: true })
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {router.events.off('routeChangeComplete', handleRouteChange)}

  }, [router.pathname, language, city[language].rout])

  return (<script />)
}