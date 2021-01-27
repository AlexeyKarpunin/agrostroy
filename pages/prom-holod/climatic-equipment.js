import { useSelector } from 'react-redux';
import CEBanner from '../../components/climatic-equipment/CEBanner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Advantages from '../../components/project/Advantages';
import RoundBanner from '../../components/climatic-equipment/RoundBanner';
import '../../styles/style.css';
import CEInfo from '../../components/climatic-equipment/CEInfo';
import Provide from '../../components/mainPage/Provide/Provide';
import ProjectSlaider from '../../components/project/ProjectSlaider';
import ProjectForm from '../../components/project/ProjectForm';
import Map from '../../components/mainPage/Map';

export default function ClimaticEquipment () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
  
  return (
    <>
      <Header
        city={city}
        language={language}
      />
      <CEBanner />
      <Advantages />
      <RoundBanner />
      <CEInfo />
      <ProjectSlaider />
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
  );
}