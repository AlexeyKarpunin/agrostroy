import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Map from '../components/mainPage/Map';
import Provide from '../components/mainPage/Provide/Provide';
import Advantages from '../components/project/Advantages';
import ProjectForm from '../components/project/ProjectForm';
import ProjectSlaider from '../components/project/ProjectSlaider';
import ColdBanner from '../components/prom-holod/ColdBanner';
import PromInfo from '../components/prom-holod/PromInfo';
import RoundBanner from '../components/prom-holod/RoundBanner';
import '../styles/style.css';
import Head from 'next/head'

const giveHeadinfo = (city) => ({
  ru: {
    title: `Изготавливаем холодильные камеры и склады в ${city}`,
    description: `Строительство промышленных холодильных складов  в ${city} быстро, качественно и в срок. Гарантия`
  },
  eng: {
    title: 'Industrial cold',
    description: `Строительство промышленных холодильных складов  в ${city} быстро, качественно и в срок. Гарантия`
  }
})

export default function PromHolod () {
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
      <ColdBanner text={city[language].industrialCold.banner} />
      <Advantages text={city[language].advantages} /> 
      <RoundBanner text={city[language].industrialCold.roundBanner} />
      <PromInfo timeSolution={city[language].title.in} />
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