import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Map from '../../components/mainPage/Map';
import Provide from '../../components/mainPage/Provide/Provide';
import Advantages from '../../components/project/Advantages';
import ProjectForm from '../../components/project/ProjectForm';
import ProjectSlaider from '../../components/project/ProjectSlaider';
import RecBanner from '../../components/reconstruction/RecBanner';
import RecInfo from '../../components/reconstruction/RecInfo';
import RoundBanner from '../../components/reconstruction/RoundBanner';
import '../../styles/style.css';

export default function Reconstruction () {

  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      <Header 
        city={city}
        language={language}
      />
      <RecBanner />
      <Advantages />
      <RoundBanner />
      <RecInfo />
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
  );
}