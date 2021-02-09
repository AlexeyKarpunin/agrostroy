import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../styles/style.css';
import McBanner from '../components/metal-constractions/McBanner';
import Advantages from '../components/project/Advantages';
import CreateMC from '../components/metal-constractions/CreateMC';
import Manufactuging from '../components/metal-constractions/Manufacturing';
import ProjectSlaider from '../components/project/ProjectSlaider';
import ProjectForm from '../components/project/ProjectForm';
import Map from '../components/mainPage/Map';
import Provide from '../components/mainPage/Provide/Provide';
import Head from 'next/head'

const giveHeadinfo = (city) => ({
  ru: {
    title: `Производство металлоконструкций в ${city}`,
    description: `Изготовление металлоконструкции в ${city} быстро, качественно и в срок. Гарантия`
  },
  eng: {
    title: 'Metalwork',
    description: `Изготовление металлоконструкции в ${city} быстро, качественно и в срок. Гарантия`
  }
})

export default function MetalConstructions () {

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
      <McBanner text={city[language].metallWork.banner} />
      <Advantages text={city[language].advantages} />
      <CreateMC text={city[language].metallWork.roundBanner} />
      <Manufactuging timeSolution={city[language].title.in} />
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