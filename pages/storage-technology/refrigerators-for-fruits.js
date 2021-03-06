import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import '../../styles/style.css';
import Head from 'next/head';

const giveHeadinfo = (city) => ({
  ru: {
    title: 'Холодильники для хранения фруктов',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'Холодильники для хранения фруктов',
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
            <h1 className='is-section'>Холодильники для хранения фруктов</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <h3>На холодильниках для хранения фруктов и овощей предусматривают:</h3>
              <p><img className='alignright' src='https://www.infrost-agro.ru/pub/2010/img64.jpg' alt='Овощи и фрукты - плоды' /></p>
              <ul>
                <li>камеры хранения с автоматическим регулированием температуры от –2 до +7°С и относительной влажностью воздуха 70-95%;</li>
                <li>камеры дозревания фруктов и овощей с автоматическим регулированием температуры от 8 до 20°С и относительной влажностью воздуха 80-90%;</li>
                <li>помещение обработки фруктов и овощей (переборки, фасовки и упаковки) с автоматическим регулированием температуры от 12 до 15°С без регулирования относительной влажности воздуха;</li>
                <li>камеры отепления с температурой от –2 до +20°С;</li>
                <li>фумигационные камеры (на распределительных холодильниках).</li>
              </ul>
              <p>Вместимость камер хранения — от 50 до 250 Т и более. Камеры хранения необходимо заполнять в течение 7-10 дней, что обеспечит равномерное охлаждение всех плодов. При загрузке камер холодильное оборудование должно быть включено. Догрузка плодов и овощей с температурой выше 8°С в камеры вместимостью до 200 Т допускается до 8%, а в камеры более 200 Т – 6% от вместимости камер.</p>
              <p>Степень загрузки камеры оказывает влияние на относительную влажность воздуха в ней. Так, в зависимости от степени загрузки камеры в размере 100, 50 и 25% относительная влажность в ней будет соответственно составлять 86, 78 и 68%. Снижение степени загрузки сказывается и на ухудшении условий циркуляции.</p>
              <p>Плоды и овощи, наиболее чувствительные к недостаточной влажности воздуха (со слабой водоудерживающей способностью), целесообразнее хранить в камерах меньшей вместимости, расположенных в середине контура холодильника и имеющих меньшую поверхность наружных ограждений.</p>
              <p>При отсутствии специальных помещений для переработки и сортировки плодов в период отгрузки необходимо выделить одну из камер, в которой поддерживают температуру 2-6°С при подготовке партий к отгрузке на распределительные холодильники и 10-12°С при отгрузке в торговую сеть.</p>
              <p>При отгрузке плодов на распределительные холодильники повышение их температуры в период переборки разрешается лишь на непродолжительное время не выше чем на 2-4°С.</p>
              <p>Перед отгрузкой в торговую сеть в теплое время года температуру плодов необходимо повышать постепенно в течение 2-3 дней во избежание выпадения на них конденсата. При этом температуру воздуха в помещении поддерживают на 2-3°С выше температуры отепляемого продукта, относительную влажность 75-80%.</p>
              <p>Некоторые плоды и овощи (груши, томаты и др.) в процессе хранения не дозревают, поэтому за несколько суток до реализации их переносят в помещение с усиленной циркуляцией воздуха и держат там в течение 3-7 дней при температуре 18-20°С и относительной влажности 90%.</p>
              <h2>Холодильные камеры для овощей и фруктов</h2>
              <table width='100%'>
                <tbody>
                  <tr>
                    <td align='center'>
                      <img src='https://www.infrost-agro.ru/upload/photo/photo1/камеры заморозки.jpg' alt='Холодильные камеры' />
                      <figcaption>Холодильные камеры</figcaption>
                    </td>
                    <td align='center'>
                      <img src='https://www.infrost-agro.ru/upload/photo/photo1/шоковая заморозка.jpg' alt='Камеры шоковой заморозки' />
                      <figcaption>Камеры шоковой заморозки</figcaption>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>Выбор подходящей технологии хранения обеспечивает сохранность конечного продукта в первоначальной свежести. Более низкие температуры хранения обеспечивают повышение срока годности. В хранении продукции вам могут помочь промышленные холодильные камеры, а также камеры шоковой заморозки.</p>

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