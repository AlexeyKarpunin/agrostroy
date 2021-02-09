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
import Head from 'next/head'

const giveHeadinfo = (city) => ({
  ru: {
    title: `Строительство бескаркасных быстровозводимых ангаров в ${city}`,
    description: 'Строительство бескаркасных быстровозводимых ангаров'
  },
  eng: {
    title: 'Construction of pre-fabricated hangars in Astrakhan',
    description: `Строительство бескаркасных быстровозводимых ангаров  в ${city} быстро, качественно и в срок. Гарантия`
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