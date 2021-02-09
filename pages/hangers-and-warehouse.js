import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Advantages from '../components/project/Advantages';
import '../styles/style.css';
import HWBanner from '../components/hangers-and-warehouse/HWBanner';
import RoundBanner from '../components/hangers-and-warehouse/RoundBanner';
import HWInfo from '../components/hangers-and-warehouse/HWInfo';
import ProjectSlaider from '../components/project/ProjectSlaider';
import ProjectForm from '../components/project/ProjectForm';
import Map from '../components/mainPage/Map';
import Provide from '../components/mainPage/Provide/Provide';
import Head from 'next/head'

const giveHeadinfo = (city) => ({
  ru: {
    title: `Строительство ангаров и складов в ${city}`,
    description: `Строительство ангаров и складов  в ${city} быстро, качественно и в срок. Гарантия`
  },
  eng: {
    title: 'Construction of hangars and warehouses',
    description: `Строительство ангаров и складов  в ${city} быстро, качественно и в срок. Гарантия`
  }
})

export default function HangersAndWarehouse () {
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
      <HWBanner text={city[language].hangars.banner} />
      <Advantages text={city[language].advantages} />
      <RoundBanner text={city[language].hangars.roundBanner} />
      <HWInfo timeSolution={city[language].title.in}/>
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
  )
}