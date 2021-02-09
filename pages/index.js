
import { useSelector } from 'react-redux';
import Head from 'next/head'
import Header from '../components/header/Header';
import VideoBanner from '../components/mainPage/VideoBanner';
import ExpBilding from '../components/mainPage/ExpBilding';
import WorkWithUs from '../components/mainPage/WorkWithUs';
import Map from '../components/mainPage/Map';
import PhaseWork from '../components/mainPage/PhaseWork';
import Provide from '../components/mainPage/Provide/Provide';
import Footer from '../components/footer/Footer';
import '../styles/style.css';


const giveHeadinfo = (city) => ({
  ru: {
    title: `Строительство объектов Агрокомплекса в ${city}`,
    description: `Строительство объектов сельхозназначения в ${city}`
  },
  eng: {
    title: `The construction of the Agricultural complex in ${city}`,
    description: `Строительство объектов сельхозназначения в ${city}`
  }
})

export default function Home() {
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
      <VideoBanner />
      <ExpBilding
        city={city}
        language={language}
      />
      <WorkWithUs 
        city={city}
        language={language}
      />
      <Map
        city={city}
        language={language}
      />
      <PhaseWork
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



