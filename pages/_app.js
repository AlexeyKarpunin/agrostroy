/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from 'react-redux';
import store from '../redux/store';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import UrlLogistic from '../urlLogic/urlLogic';

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const [url, setUrl] = useState(router.asPath);

  // useEffect(() => {
  //   const handleRouteChange = (url, { shallow }) => {
  //     console.log(
  //       `App is changing to ${url} ${
  //         shallow ? 'with' : 'without'
  //       } shallow routing`
  //     );
  //     setUrl(url);
  //   }
    
  //   router.events.on('routeChangeStart', handleRouteChange);

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange)
  //   }
  // }, [])


  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <UrlLogistic />
    </Provider>
  )
}

export default MyApp
