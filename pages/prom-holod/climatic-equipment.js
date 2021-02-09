import { useSelector } from 'react-redux';
import CEBanner from '../../components/climatic-equipment/CEBanner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Advantages from '../../components/project/Advantages';
import RoundBanner from '../../components/climatic-equipment/RoundBanner';
import '../../styles/style.css';
import CEInfo from '../../components/climatic-equipment/CEInfo';
import Provide from '../../components/mainPage/Provide/Provide';
import ProjectSlaider from '../../components/project/ProjectSlaider';
import ProjectForm from '../../components/project/ProjectForm';
import Map from '../../components/mainPage/Map';
import Head from 'next/head'

const giveHeadinfo = (city) => ({
  ru: {
    title: `Установка и оснащение климатическим оборудованием производственных помещений в ${city}`,
    description: `Установка Климатического оборудования в ангарах, складах, хранилищах, цехах и других промышленных комплексах в ${city}. Гарантия`
  },
  eng: {
    title: `Climate control Equipment in ${city}`,
    description: `Климатическое оборудование  в ${city} быстро, качественно и в срок. Гарантия`
  }
})

export default function ClimaticEquipment () {
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
      <CEBanner text={city[language].climaticEquipment.banner} />
      <Advantages text={city[language].advantages} />
      <RoundBanner text={city[language].climaticEquipment.roundBanner} />
      <CEInfo text={city[language].climaticEquipment.info} />
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