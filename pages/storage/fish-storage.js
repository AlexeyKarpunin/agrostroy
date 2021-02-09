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
import Head from 'next/head'

const giveHeadinfo = (city) => ({
  ru: {
    title: `Строительство ангаров для хранения и переработки рыбы в ${city}`,
    description: `Строительство ангаров для хранения и переработки рыбы в ${city} быстро, качественно и в срок. Гарантия`
  },
  eng: {
    title: 'Construction of fish processing complexes and fish shops. Fish freezing and storage chambers',
    description: 'Строительство ангаров для хранения и переработки рыбы в быстро, качественно и в срок. Гарантия'
  }
})


export default function FruitsStorage() {
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