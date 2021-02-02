import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Map from '../components/mainPage/Map';
import Provide from '../components/mainPage/Provide/Provide';
import Advantages from '../components/project/Advantages';
import Design from '../components/project/Design';
import DesignSchema from '../components/project/DesignSchema';
import ProjectBanner from '../components/project/projectBanner';
import ProjectForm from '../components/project/ProjectForm';
import ProjectSlaider from '../components/project/ProjectSlaider';
import '../styles/style.css';
import Head from 'next/head';

export default function project () {

  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
  
  return (
    <>
      <Header 
        city={city}
        language={language}
      />
      <ProjectBanner text={city[language].project} />
      <Advantages text={city[language].advantages} />
      <Design text={city[language].project.roundBanner} />
      <DesignSchema />
      <ProjectSlaider text={city[language].projectSlaider} />
      <ProjectForm text={city[language].form} />
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