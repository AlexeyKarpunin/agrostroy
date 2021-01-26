import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Advantages from '../components/project/Advantages';
import '../styles/style.css';
import HWBanner from '../components/hangers-and-warehouse/HWBanner';
import RoundBanner from '../components/hangers-and-warehouse/RoundBanner';
import HWInfo from '../components/hangers-and-warehouse/HWInfo';
import ProjectSlaider from '../components/project/ProjectSlaider';
import ProjectForm from '../components/project/ProjectForm';
import Map from '../components/mainPage/Map';
import Provide from '../components/mainPage/Provide/Provide';

export default function HangersAndWarehouse () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
  return (
    <>
      <Header
        city={city}
        language={language}
      />
      <HWBanner />
      <Advantages />
      <RoundBanner />
      <HWInfo />
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