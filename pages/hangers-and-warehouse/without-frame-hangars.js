import { useSelector } from 'react-redux';
import RoundBanner from '../../components/without-frame-hangars/RoundBanner';

import Footer from '../../components/footer/Footer';

import Header from '../../components/header/Header';
import Map from '../../components/mainPage/Map';
import Provide from '../../components/mainPage/Provide/Provide';
import Advantages from '../../components/project/Advantages';
import ProjectForm from '../../components/project/ProjectForm';
import ProjectSlaider from '../../components/project/ProjectSlaider';
import WFHBanner from '../../components/without-frame-hangars/WFHBanner';
import '../../styles/style.css';
import WFHInfo from '../../components/without-frame-hangars/WFHInfo';

export default function FoldingHangar() {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      <Header
        city={city}
        language={language}
      />
      <WFHBanner text={city[language].framelessHangars.banner} />
      <Advantages text={city[language].advantages} />
      <RoundBanner text={city[language].framelessHangars.roundBanner} />
      <WFHInfo text={city[language].framelessHangars.info} />
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