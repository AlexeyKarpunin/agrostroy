import { useSelector } from 'react-redux';
import CornBanner from '../../components/corn-storage/CornBanner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Map from '../../components/mainPage/Map';
import Provide from '../../components/mainPage/Provide/Provide';
import Advantages from '../../components/project/Advantages';
import ProjectForm from '../../components/project/ProjectForm';
import ProjectSlaider from '../../components/project/ProjectSlaider';
import RoundBanner from '../../components/corn-storage/RoundBanner';
import '../../styles/style.css';
import CornInfo from '../../components/corn-storage/CornInfo';

export default function FruitsStorage() {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      <Header
        city={city}
        language={language}
      />
      <CornBanner />
      <Advantages />
      <RoundBanner />
      <CornInfo />
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