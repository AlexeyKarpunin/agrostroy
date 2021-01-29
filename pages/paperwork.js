import { useSelector } from 'react-redux';
import PaperWork from '../components/PaperWork';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../styles/style.css';

export default function PaperWorkPage () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      <Header 
        city={city}
        language={language}
      />
      <PaperWork />
      <Footer
        city={city}
        language={language}
      />
    </>
  )
}