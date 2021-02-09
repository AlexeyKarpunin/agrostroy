import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Map from '../../components/mainPage/Map';
import Provide from '../../components/mainPage/Provide/Provide';
import Advantages from '../../components/project/Advantages';
import ProjectForm from '../../components/project/ProjectForm';
import ProjectSlaider from '../../components/project/ProjectSlaider';
import RecBanner from '../../components/reconstruction/RecBanner';
import RecInfo from '../../components/reconstruction/RecInfo';
import RoundBanner from '../../components/reconstruction/RoundBanner';
import '../../styles/style.css';
import Head from 'next/head'

const giveHeadinfo = (city) => ({
  ru: {
    title: `Реконструкция Зданий в  ${city}`,
    description: `Реконструкция зданий и построек из металлоконструкций  в ${city} быстро, качественно и в срок. Гарантия`
  },
  eng: {
    title: 'Reconstruction of buildings and structures made of metal',
    description: `Реконструкция зданий и построек из металлоконструкций  в ${city} быстро, качественно и в срок. Гарантия`
  }
})

export default function Reconstruction () {

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
      <RecBanner text={city[language].reconstraction.banner} />
      <Advantages text={city[language].advantages} />
      <RoundBanner text={city[language].reconstraction.roundBanner} />
      <RecInfo  />
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