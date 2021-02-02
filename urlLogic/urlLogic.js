import { useDispatch, useSelector} from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect, useState} from 'react';
import {askUserGealocation, giveUserCity} from '../redux/actions';
import findCity from './findCity';

export default function UrlLogistic () {
  const router = useRouter();
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language)

  useEffect(()=>{
     router.push(router.pathname, `/${language}/${city[language].rout}${router.pathname}`, { shallow: true })
     console.log('routerpath', router.pathname)
  }, [router.pathname, language, city[language].rout]);

  // function test(url) {
  //   console.log('router.pathname', router);
  //   if (url === router.pathname) {
  //     console.log('YES')
  //   }
  // }

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
      console.log('WL', window.location)
      console.log('url', url)
      console.log('---------------------------------')
      // test(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (<script />)
}