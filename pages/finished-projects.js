import { useSelector } from 'react-redux';
import FinisedProjects from '../components/FinishedProjects'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../styles/style.css';

export default function FinishedProjectPage () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      <Header 
        city={city}
        language={language}
      />
      <FinisedProjects />
      <Footer
        city={city}
        language={language}
      />
    </>
  )
}