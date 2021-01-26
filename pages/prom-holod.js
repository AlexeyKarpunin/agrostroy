import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Map from '../components/mainPage/Map';
import Provide from '../components/mainPage/Provide/Provide';
import Advantages from '../components/project/Advantages';
import ProjectForm from '../components/project/ProjectForm';
import ProjectSlaider from '../components/project/ProjectSlaider';
import ColdBanner from '../components/prom-holod/ColdBanner';
import PromInfo from '../components/prom-holod/promInfo';
import RoundBanner from '../components/prom-holod/RoundBanner';
import '../styles/style.css';

export default function PromHolod () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      <Header 
        city={city}
        language={language}
      />
      <ColdBanner />
      <Advantages />
      <RoundBanner />
      <PromInfo />
      {/* <ProjectSlaider /> */}
      
      <ProjectForm />
      <Map
        city={city}
        language={language}
      />
      <Provide
        city={city}
        language={language}
      />
      <Footer
        city={city}
        language={language}
      />
    </>
  )
}