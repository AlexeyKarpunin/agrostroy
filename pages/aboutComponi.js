import { useSelector } from 'react-redux';
import '../styles/style.css';
import Head from 'next/head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import InfoAboutComponi from '../components/aboutComponi/InfoAboutComponi';
import SomeInfo from '../components/aboutComponi/SomeInfo';
import TakeUs from '../components/aboutComponi/TakeUs';

const giveHeadinfo = (city) => ({
  ru: {
    title: 'О компании «Агростроитель Юг»',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'About company «Agrostroitel Ug»',
    description: 'The construction of agricultural complex'
  }
})

export default function AboutComponi () {

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
      <InfoAboutComponi
        text={city[language].aboutComponi.infoAboutComponi}
      />
      <SomeInfo 
        text={city[language].aboutComponi.someInfo}
      />

      <TakeUs 
        text={city[language].aboutComponi.takeUs}
      />

      <Footer
        city={city}
        language={language}
      />
    </>
  );
}

