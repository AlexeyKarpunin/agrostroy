import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../styles/style.css';
import McBanner from '../components/metal-constractions/McBanner';
import Advantages from '../components/project/Advantages';
import CreateMC from '../components/metal-constractions/CreateMC';
import Manufactuging from '../components/metal-constractions/Manufacturing';
import ProjectSlaider from '../components/project/ProjectSlaider';
import ProjectForm from '../components/project/ProjectForm';
import Map from '../components/mainPage/Map';
import Provide from '../components/mainPage/Provide/Provide';

export default function MetalConstructions () {

  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
  
  return (
    <>
      <Header
        city={city}
        language={language}
      />
      <McBanner />
      <Advantages />
      <CreateMC />
      <Manufactuging />
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