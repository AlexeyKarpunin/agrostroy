import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import '../../styles/style.css';

export default function STpage () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
 
  
  return (
    <>
      <Header
        city={city}
        language={language}
      />
      
      <Footer
        city={city}
        language={language}
      />
    </>
  );
}