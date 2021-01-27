import { useSelector } from 'react-redux';

import FHinfo from '../../components/folding-hangar/FHInfo';

import Footer from '../../components/footer/Footer';
import FrameBanner from '../../components/frameHungars/FrameBanner';
import FrameInfo from '../../components/frameHungars/FrameInfo';
import RoundBanner from '../../components/frameHungars/RoundBanner';
import Header from '../../components/header/Header';
import Map from '../../components/mainPage/Map';
import Provide from '../../components/mainPage/Provide/Provide';
import Advantages from '../../components/project/Advantages';
import ProjectForm from '../../components/project/ProjectForm';
import ProjectSlaider from '../../components/project/ProjectSlaider';
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
      <FrameBanner />
      <Advantages />
      <RoundBanner />
      <FrameInfo />
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