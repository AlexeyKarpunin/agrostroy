import { useSelector } from 'react-redux';
import FishBanner from '../../components/fish-storage/FishBanner';
import FishInfo from '../../components/fish-storage/FishInfo';
import RoundBanner from '../../components/fish-storage/RoundBanner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Map from '../../components/mainPage/Map';
import Provide from '../../components/mainPage/Provide/Provide';
import Advantages from '../../components/project/Advantages';
import ProjectForm from '../../components/project/ProjectForm';
import ProjectSlaider from '../../components/project/ProjectSlaider';
import '../../styles/style.css';

export default function FruitsStorage() {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      <Header
        city={city}
        language={language}
      />
      <FishBanner text={city[language].fishStorage.banner} />
      <Advantages text={city[language].advantages} />
      <RoundBanner text={city[language].fishStorage.roundBanner} />
      <FishInfo />
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