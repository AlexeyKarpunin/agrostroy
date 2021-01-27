import { useSelector } from 'react-redux';
import FHBanner from '../../components/folding-hangar/FHBanner';
import FHinfo from '../../components/folding-hangar/FHInfo';
import RoundBanner from '../../components/folding-hangar/RoundBanner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Map from '../../components/mainPage/Map';
import Provide from '../../components/mainPage/Provide/Provide';
import Advantages from '../../components/project/Advantages';
import ProjectForm from '../../components/project/ProjectForm';
import ProjectSlaider from '../../components/project/ProjectSlaider';
import Head from 'next/head';
import '../../styles/style.css';

export default function FoldingHangar() {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      
      <Header
        city={city}
        language={language}
      />
      <FHBanner />
      <Advantages />
      <RoundBanner />
      <FHinfo />
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