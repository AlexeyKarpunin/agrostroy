import { useSelector } from 'react-redux';
import Head from 'next/head';
import FHBanner from '../../components/folding-hangar/FHBanner';
import FHinfo from '../../components/folding-hangar/FHInfo';
import RoundBanner from '../../components/folding-hangar/RoundBanner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Map from '../../components/mainPage/Map';
import Provide from '../../components/mainPage/Provide/Provide';
import Advantages from '../../components/project/Advantages';
import ProjectForm from '../../components/project/ProjectForm';
import ProjectSlaider from '../../components/project/ProjectSlaider';
import '../../styles/style.css';

const giveHeadinfo = (city) => ({
  ru: {
    title: `Изготавливаем Сборно-разборные склады и помещения в ${city}`,
    description: `Производство и монтаж сборно-разборных ангаров  в ${city} быстро, качественно и в срок. Гарантия`
  },
  eng: {
    title: 'Collapsible hangars',
    description: `Производство и монтаж сборно-разборных ангаров  в ${city} быстро, качественно и в срок. Гарантия`
  }
})

export default function FoldingHangar() {
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
      <FHBanner text={city[language].dismountable.banner} />
      <Advantages text={city[language].advantages} />
      <RoundBanner text={city[language].dismountable.roundBanner} />
      <FHinfo timeSolution={city[language].title.in} />
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