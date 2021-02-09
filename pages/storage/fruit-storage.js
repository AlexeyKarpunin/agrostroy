import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import FruitBanner from '../../components/fruits-storage/FruitBanner';
import FruitInfo from '../../components/fruits-storage/FruitInfo';
import RoundBanner from '../../components/fruits-storage/RoundBanner';
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
    title: `Строительство Фруктохранилищ «под ключ» в ${city}`,
    description: `Строительство Фруктохранилищ «под ключ»  в ${city} быстро, качественно и в срок. Гарантия`
  },
  eng: {
    title: `The construction of storage facilities «turnkey» in ${city}`,
    description: 'Construction of storage facilities'
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
      <FruitBanner text={city[language].fruitStorage.banner} />
      <Advantages text={city[language].advantages} />
      <RoundBanner text={city[language].fruitStorage.roundBanner} />
      <FruitInfo text={city[language].fruitStorage.info} /> 
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