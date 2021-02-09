
import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Politic from '../components/Politic';
import '../styles/style.css';
import Head from 'next/head'

const giveHeadinfo = (city) => ({
  ru: {
    title: 'Правила обработки персональных данных',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'Rules for processing personal data',
    description: 'The construction of agricultural complex'
  }
})

export default function PrivacyPolitic () {
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
      <Politic />
      <Footer
        city={city}
        language={language}
      />
    </>
  )
}