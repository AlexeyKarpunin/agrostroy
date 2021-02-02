import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import YMap from '../components/YMap';
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
      <YMap text={city[language].contacts} />
      <Footer
        city={city}
        language={language}
      />
    </>
  );
}