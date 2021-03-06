import { useSelector } from 'react-redux';
import Head from 'next/head';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import '../../styles/style.css';

const giveHeadinfo = (city) => ({
  ru: {
    title: 'Хранение черенков и саженцев',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'Хранение черенков и саженцев',
    description: 'The construction of agricultural complex'
  }
})

export default function STpage () {
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
      <article className='page-section is-article'>
        <div className='page-section__inner'>
          <div className='page-section__title'>
            <h1 className='is-section'>Хранение черенков и саженцев</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <h2>Хранение черенков и саженцев</h2>
              <p><img src='https://www.infrost-agro.ru/pub/2010/out8.jpg' alt='Черенки и саженцы' style={{maxWidth: '400px', display: 'block', margin: '10px auto'}} /></p>
              <p>При весенней посадке растений  (груша, вишня, слива и т.д.) задача хранения саженцев усложняется. Их  нужно уберечь от подсыхания, от вымерзания, от выпревания, от  повреждения грызунами, солнечными ожогами. Хранить саженцы и черенки  зимой можно в специальных хранилищах, подвалах, траншеях, в холодильных  камерах и др.</p>
              <p>Лучшим способом хранения является хранение в холодильниках при необходимой температуре и влажности. Оптимальная температура хранения приведена в табл. 2 (относительная влажность 75-90%).</p>
              <p>Для уменьшения потерь воды сразу после выкопки из почвы корни саженцев обмакивают в жидкую глиняно-почвенную смесь («болтушку») или в раствор латексов для образования на корнях водонепроницаемой пленки. Иногда антитранспирантами опрыскивают надземную часть растений перед их выкопкой.</p>
              <p>Пучки саженцев устанавливают в хранилищах корнями друг к другу в горизонтальном положении. Корни саженцев либо прикапывают, либо укрывают рыхлым, влажным материалом (опилки, торф, мох, песок). Сверху пучки покрывают синтетической пленкой. Корни в течение зимы периодически увлажняют.</p>
              <p>Высота штабеля саженцев при хранении в помещении с регулируемой влажностью и температурой должна быть не более 2 м, а в подвалах или других хранилищах – не более 1,5 м.</p>

            </div>
          </div>
        </div>
      </article>
      <Footer
        city={city}
        language={language}
      />
    </>
  );
}