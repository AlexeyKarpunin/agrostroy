import '../styles/style.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Storagebanner from '../components/storage/Storagebanner';
import Advantages from '../components/project/Advantages';
import RoundBanner from '../components/storage/RoundBanner';
import ProjectSlaider from '../components/project/ProjectSlaider';
import ProjectForm from '../components/project/ProjectForm';
import Map from '../components/mainPage/Map';
import Provide from '../components/mainPage/Provide/Provide';
import StorageInfo from '../components/storage/StorageInfo';
import Head from 'next/head'

const giveHeadinfo = (city) => ({
  ru: {
    title: `Строительство каркасных ангаров в ${city} «под ключ»Строительство каркасных ангаров в Астрахани «под ключ»`,
    description: `Строительство хранилищ в ${city} «под ключ», быстро, качественно и в срок. Гарантия на все работы.`
  },
  eng: {
    title: `Construction of storage facilities in ${city}`,
    description: 'Construction of storage facilities'
  }
})

export default function Storage () {
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
      <Storagebanner text={city[language].storage.banner} />
      <Advantages text={city[language].advantages} />
      <RoundBanner text={city[language].storage.roundBanner} />
      <StorageInfo text={city[language].storage.info} />
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
const Div = styled.div`
     width: 100%;
     height: 500px;
`;