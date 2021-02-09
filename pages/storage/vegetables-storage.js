import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Map from '../../components/mainPage/Map';
import Provide from '../../components/mainPage/Provide/Provide';
import Advantages from '../../components/project/Advantages';
import ProjectForm from '../../components/project/ProjectForm';
import ProjectSlaider from '../../components/project/ProjectSlaider';
import RoundBanner from '../../components/vegetables-storage/RoundBanner';
import VegetableBanner from '../../components/vegetables-storage/VegetableBanner';
import VegetablesInfo from '../../components/vegetables-storage/VegetableInfo';
import '../../styles/style.css';
import Head from 'next/head';

const giveHeadinfo = (city) => ({
  ru: {
    title: `Строительство овощехранилищ в ${city}`,
    description: `Строительство овощехранилищ  в ${city} быстро, качественно и в срок. Гарантия`
  },
  eng: {
    title: 'Construction of vegetable Stores “turnkey»',
    description: `Construction of vegetable stores in ${city}`
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
      <VegetableBanner text={city[language].vegetableStorage.banner} />
      <Advantages text={city[language].advantages} />
      <RoundBanner text={city[language].vegetableStorage.roundBanner} />
      <VegetablesInfo />
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