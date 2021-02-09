import { useSelector } from 'react-redux';
import CornBanner from '../../components/corn-storage/CornBanner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Map from '../../components/mainPage/Map';
import Provide from '../../components/mainPage/Provide/Provide';
import Advantages from '../../components/project/Advantages';
import ProjectForm from '../../components/project/ProjectForm';
import ProjectSlaider from '../../components/project/ProjectSlaider';
import RoundBanner from '../../components/corn-storage/RoundBanner';
import '../../styles/style.css';
import CornInfo from '../../components/corn-storage/CornInfo';
import Head from 'next/head';

const giveHeadinfo = (city) => ({
  ru: {
    title: `Строительство зернохранилищ в ${city}`,
    description: `Строительство Зернохранилищ «под ключ»  в ${city} быстро, качественно и в срок. Гарантия`
  },
  eng: {
    title: 'Construction Of Granaries «turnkey»',
    description: `Строительство Зернохранилищ «под ключ»  в ${city} быстро, качественно и в срок. Гарантия`
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
      <CornBanner text={city[language].grainStorage.banner} />
      <Advantages text={city[language].advantages} />
      <RoundBanner text={city[language].grainStorage.roundBanner} />
      <CornInfo />
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