import { useSelector } from 'react-redux';
import '../styles/style.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import InfoAboutComponi from '../components/aboutComponi/InfoAboutComponi';
import SomeInfo from '../components/aboutComponi/SomeInfo';
import TakeUs from '../components/aboutComponi/TakeUs';

export default function AboutComponi () {

  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      <Header
        city={city}
        language={language}
      />
      <InfoAboutComponi
        text={city[language].aboutComponi.infoAboutComponi}
      />
      <SomeInfo 
        text={city[language].aboutComponi.someInfo}
      />

      <TakeUs 
        text={city[language].aboutComponi.takeUs}
      />

      <Footer
        city={city}
        language={language}
      />
    </>
  );
}

