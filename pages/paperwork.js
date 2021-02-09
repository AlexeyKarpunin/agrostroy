import { useSelector } from 'react-redux';
import PaperWork from '../components/PaperWork';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../styles/style.css';
import Head from 'next/head';

const giveHeadinfo = (city) => ({
  ru: {
    title: 'Оформление документов',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'Оформление документов',
    description: 'The construction of agricultural complex'
  }
})

export default function PaperWorkPage () {
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
      <PaperWork />
      <Footer
        city={city}
        language={language}
      />
    </>
  )
}