import { useSelector } from 'react-redux';
import Calculation from '../components/Calculation';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../styles/style.css';

export default function CostCalculation () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      <Header 
        city={city}
        language={language}
      />
      <Calculation />
      <Footer
        city={city}
        language={language}
      />
    </>
  )
}