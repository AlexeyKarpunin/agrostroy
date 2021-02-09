import { useSelector } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import YMap from '../components/YMap';
import '../styles/style.css';
import Head from 'next/head'

const Headinfo = (city) => ({
    ru: {
      title: `Контакты компании «АгроСтроитель Юг» в ${city}`,
      description: 'Строительство объектов агрокомплекса'
    },
    eng: {
      title: `Contacts of the company «Agrostroitel Ug» ${city}`,
      description: 'The construction of agricultural complex'
    }
})

export default function Contacts () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
  const headInfo = Headinfo(city[language].title.in);

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
      <YMap text={city[language].contacts} />
      <Footer
        city={city}
        language={language}
      />
    </>
  );
}