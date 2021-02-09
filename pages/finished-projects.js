import { useSelector } from 'react-redux';
import FinisedProjects from '../components/FinishedProjects'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../styles/style.css';
import Head from 'next/head';

const giveHeadinfo = (city) => ({
  ru: {
    title: 'Готовые объекты',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'Готовые объекты',
    description: 'The construction of agricultural complex'
  }
})


export default function FinishedProjectPage () {
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
      <FinisedProjects />
      <Footer
        city={city}
        language={language}
      />
    </>
  )
}