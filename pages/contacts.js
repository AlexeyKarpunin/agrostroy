import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Map from '../components/Map';
import '../styles/style.css';

export default function Contacts () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
  return (
    <>
      <Header
        city={city}
        language={language}
      />
      <Map />
      <Footer
        city={city}
        language={language}
      />
    </>
  );
}