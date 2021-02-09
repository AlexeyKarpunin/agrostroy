import { useSelector } from 'react-redux';
import Calculation from '../components/Calculation';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../styles/style.css';
import Head from 'next/head';

const giveHeadinfo = (city) => ({
  ru: {
    title: 'Предварительный расчет стоимости',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'Preliminary calculation of the cost',
    description: 'The construction of agricultural complex'
  }
})

export default function CostCalculation () {
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
      <Calculation />
      <Footer
        city={city}
        language={language}
      />
    </>
  )
}