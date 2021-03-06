import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import '../../styles/style.css';
import Head from 'next/head';

const giveHeadinfo = (city) => ({
  ru: {
    title: 'Технологический режим холодильного хранения',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'Технологический режим холодильного хранения',
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
            <h1 className='is-section'>Технологический режим холодильного хранения</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <p>Режим холодильного хранения плодов и овощей представляет собой совокупность условий хранения. Прежде всего, это температура, относительная влажность, интенсивность циркуляции и вентиляции воздуха.</p>
              <p>Оптимальная температура холодильного хранения ограничивается криоскопической и критической температурами. Криоскопическая температура – это температура начала льдообразования в плодах. Температуры от 0°С до криоскопической принято называть близкриоскопическими, а ниже криоскопических – субкриоскопическими.</p>
              <p>Понижение температуры хранения ниже криоскопической приводит к подмораживанию плодов, в результате чего они теряют потребительские и товарные качества, присущие свежим плодам.</p>
              <p>Функциональные расстройства, возникающие при температуре ниже криоскопической, проявляются в поверхностном и внутреннем побурении плодов, в отмирании тканей и т.д. Это ухудшает качество плодов и стимулирует развитие фитопатогенной микрофлоры.</p>
              <p>Так как плоды и овощи поражаются фитопатогенными микроорганизмами, можно было бы ожидать, что с понижением температуры продолжительность хранения будет увеличиваться.</p>
              <p>Для многих плодов и овощей оптимальной температурой хранения является близкриоскопическая температура (на 0,5˚С выше точки замерзания). Цитрусовые, бананы, дыни, огурцы, томаты, картофель и др. из-за различного рода физиологических заболеваний хранят при температурах, значительно выше точки их замерзания.</p>
              <p>Влияние почвенно-климатических и агротехнических условий выращивания, степени зрелости, условий упаковки и перевозки сказывается не только на внешнем виде, структуре и вкусе, но и на продолжительности хранения — см. табл.</p>
              <p>Относительная влажность воздуха при хранении плодов и овощей влияет на интенсивность испарения влаги и рост микроорганизмов. При хранении большинства плодов и овощей относительная влажность 90%. Для некоторых овощей, особенно легко увядающих (салат, сельдерей, петрушка, шпинат, укроп), относительная влажность выше 90%, а для лука-репка и чеснока 70-80%.</p>
              <p>При высокой относительной влажности воздуха (до 90%) понижение температуры на 0,6-0,7°С может вызвать выпадение конденсата на поверхности продукта, в результате чего увеличивается микробиальная порча. Допустимые отклонения температуры не должны превышать ±0,5°С, а относительная влажность — ±1-2%.</p>
              <p>Для поддержания в камерах хранения плодов температуры и относительной влажности воздуха необходимо кондиционирование.</p>
              <p>Установку кондиционирования воздуха рассчитывают на базе балансов тепла и влаги, которые составляют для режима стационарного длительного хранения (с исключением периода начального охлаждения) на самый жаркий и самый холодный месяцы возможного периода хранения плодов.</p>
              <p>В камерах хранения плодов и овощей следует применять систему воздушного охлаждения с принудительной циркуляцией воздуха. Циркуляция воздуха позволяет интенсифицировать теплообмен, что особенно важно для первоначального охлаждения продукции, а также способствует созданию равномерного температурно-влажностного поля в грузовом объеме камеры и в штабелях хранящихся плодов и удалению токсичных для растительных тканей летучих веществ, выделяемых при метаболизме.</p>
              <p>Циркуляция воздуха количественно характеризуется двумя параметрами:</p>
              <p>
                кратностью, которая выражается как отношение количества подаваемого воздуха к объему незагруженной камеры;
                <br />
                скоростью движения воздуха.
              </p>
              <p>В период охлаждения плодов и овощей требуется повышенная кратность циркуляции воздуха (30 и более объемов). При установившемся режиме (в период длительного хранения) кратность циркуляции 7-15 объемов в час, оптимальная скорость движения воздуха в период охлаждения и хранения соответственно равна 2,5-3 и 0,1-0,3 м/с.</p>
              <p>Воздухоохладители (постаментные, подвесные) с автоматическим управлением режимов работы (в том числе и оттаивание) располагают вне камер или в камерах на антресолях либо подвешивают к строительным конструкциям под потолком либо в верхней части стен.</p>
              <p>Воздух подают и распределяют по одноканальной и бесканальной системам воздухораспределения. Одноканальную подразделяют на систему с эжекторным распределением воздуха с помощью сопел и систему с раздачей воздуха через окна. Одноканальная система с эжектор­ным распределением воздуха эффективна лишь при гладких потолках в камере.</p>
              <p>Нагнетательные каналы размещают под гру­зовым проходом в камерах площадью до 300 м2 посередине, в камерах меньшей площади — у продольной стены.</p>
              <p>Расположение штабелей в камере не должно нарушать свободную циркуляцию воздуха. Для этого штабеля располагают перпендикулярно оси нагнетательного воздушного канала или грузового прохода. Через каждые два штабеля оставляют боковые проходы шириной 60— 70 см, а между смежными ящиками — просве­ты 5—10 см для циркуляции воздуха.</p>
              <p>Между стеной и штабелем, а при наличии пристенных колонн между ними и штабелем оставляют расстояние 30 см. Таким же должно быть расстоя­ние между верхом штабеля и низом нагнета­тельного канала. Для обеспечения нормальной циркуляции воздуха высота штабеля должна быть одинаковой в любом месте камеры.</p>
              <p>Перепад температур воздуха камеры и холо­дильного агента должен быть не выше 3—4°С в период хранения. При увеличении перепада тем­ператур до 8—10°С влаговыделения увеличиваются на 25%, в результате чего потери массы плодов возрастают на 25%.</p>
              <p>В воздухоохладителях воздух должен ох­лаждаться не более чем на 1,5—2°С; темпера­тура воздуха, выходящего из воздухоохлади­теля или воздуховода, не должна быть ниже минус 2°С в случае хранения яблок и груш, при хра­нении косточковых плодов — не ниже минус 1 … минус 1,2°С. В противном случае возможно под­мораживание плодов.</p>
              <p>Необходимо устранять вредное влияние со­стояния тары на влажностный режим в камере хранения путем предварительного увлажнения. В связи с тем, что тара вследствие гигроскопич­ности поглощает большое количество влаги из продукта, рекомендуют использовать тару с равновесной влажностью, отвечающей парамет­рам воздуха в камере.</p>
              <p>Для удаления из воздуха летучих продук­тов метаболизма необходима вентиляция камер. Периодичность вентиляции зависит от вида плодов. В первый месяц хранения камеры вен­тилируют два раза в неделю, а в последующем – один раз с кратностью 1-2 объема камеры в сутки. Подаваемый наружный воздух должен быть чистым, не зараженным микроор­ганизмами, лишенным запаха.</p>

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