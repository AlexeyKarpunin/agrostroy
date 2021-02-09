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
import Head from 'next/head'

const giveHeadinfo = (city) => ({
  ru: {
    title: `Строительство каркасных ангаров в ${city} «под ключ»`,
    description: `Строительство каркасных ангаров складов и помещений  в ${city} быстро, качественно и в срок. Гарантия`
  },
  eng: {
    title: 'The construction of frame hangars',
    description: `Строительство каркасных ангаров складов и помещений  в ${city} быстро, качественно и в срок. Гарантия`
  }
})

export default function FoldingHangar() {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
  const headInfo = giveHeadinfo(city[language].title.in);

  return (
    <>
      <Head>
        <title>{headInfo[language].title}</title>
        <meta name='description' content={headInfo[language].description} />
      </Head>
      
      <Header
        city={city}
        language={language}
      />
      <FrameBanner text={city[language].frameHangars.banner} />
      <Advantages text={city[language].advantages} />
      <RoundBanner text={city[language].frameHangars.roundBanner} />
      <FrameInfo text={city[language].frameHangars.info} />
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