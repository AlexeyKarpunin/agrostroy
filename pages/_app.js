/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from 'react-redux';
import store from '../redux/store';
import UrlLogistic from '../urlLogic/urlLogic';
import FindCityByIp from '../gealocation/FindCityById';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <UrlLogistic />
      <FindCityByIp />
    </Provider>
  )
}

export default MyApp
