
import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Politic from '../components/Politic';
import '../styles/style.css';

export default function PrivacyPolitic () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      <Header 
        city={city}
        language={language}
      />
      <Politic />
      <Footer
        city={city}
        language={language}
      />
    </>
  )
}