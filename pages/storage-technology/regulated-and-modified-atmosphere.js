import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import '../../styles/style.css';
import Head from 'next/head';

const giveHeadinfo = (city) => ({
  ru: {
    title: 'Регулируемая и модифицированная атмосфера',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'Регулируемая и модифицированная атмосфера',
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
            <h1 className='is-section'>Регулируемая и модифицированная атмосфера</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <p>Охлаждение – это наиболее эффективный способ задержки выделения теплоты при дыхании фруктов и овощей и продления сроков хранения.</p>
              <p>Для некоторых продуктов снижение уровня кислорода в окружающем воздухе и/или увеличение уровня СО2 в качестве дополнения к охлаждению могут продлить срок хранения. При этом необходим тщательный контроль концентрации О2 и СО2.</p>
              <p>Если весь кислород использован, продукция задохнется и в течение нескольких дней может произойти процесс закисания. Концентрация углекислого газа, выделяемого при дыхании или при использовании сухого льда, может превысить допустимый уровень.</p>
              <p>Хранение в Регулируемой Атмосфере для создания желаемого уровня О2 и СО2 обычно основывается не только на дыхании плодов в герметичной камере, но предполагает использование внешних источников воздействия – генераторов азота или сухого льда.</p>
              <p>Упаковка в Модифицированной атмосфере, с другой стороны, позволяет получить необходимые концентрации газов либо за счет начального наполнения газовой смесью (обычно полиэтиленовая упаковка), либо в результате дыхания, когда через несколько дней достигаются равновесные концентрации.</p>
              <p>Более быстрое равновесие достигается при удалении воздуха из упаковки, либо при упаковке теплого продукта перед охлаждением.</p>
              <p>Полиэтиленовая упаковка применима потому, что она пропускает СО2 в 5 раз больше, чем О2, позволяя таким образом получать низкие (5%) концентрации О2 и поддерживать низкий уровень СО2 (от 2 до 3 %), предотвращающий порчу продукции.</p>
              <p>Если необходима более высокая концентрация СО2, то следует использовать перфорированную упаковку с небольшими отверстиями, так как она пропускает оба газа одинаково хорошо.</p>
              <p>Перфорация, однако, безразлична к изменениям температуры. Она пропускает то же количество, даже если охлаждения нет, что приводит к анаэробным условиям (очень низкий уровень О2, высокий СО2) в упаковке.</p>
              <p>Полиэтилен более чувствителен к изменению температуры, его пропускная способность увеличивается с температурой (удваивается при повышении на 39,6 градуса).</p>
              <p>Хранение в Модифицированной Атмосфере предохраняет продукт, уменьшая его дыхание и, что не менее важно, поддерживая влажность в упаковке на уровне от 95 до100%.</p>
              <p>Однако, хранение в Модифицированной Атмосфере с перфорированной упаковкой может привести к проблемам образования избыточного конденсата внутри упаковки, потому что, хотя через отверстия проходит достаточно кислорода, они пропускают гораздо меньше водяных паров, чем проницаемая поверхность полиэтилена.</p>
              <p>Гипобарическое хранение, то есть хранение при пониженном атмосферном хранении, является другим дополнением к охлаждению и использует принципы, схожие с хранением в регулируемой атмосфере.</p>
              <p>При атмосферных давлениях 0,1 или 0,2 от нормального некоторые виды продукции имеют длительный срок хранения.</p>
              <p>Преимущества достигаются за счет низкого содержания кислорода в атмосфере и постоянного удаления этилена, СО2 и других метаболически активных газов, образование которых при пониженном давлении также ниже.</p>
              <p>Периодическая вентиляция при гипобарическом хранении необходима для уменьшения концентрации этилена и замедления созревания.</p>
              <p>Постоянный поток насыщенного воздуха при низком давлении удаляет выделяющиеся газы и предотвращает потерю массы.</p>
              <p>Но, несмотря на все преимущества, высокая стоимость гипобарического хранения делает его экономически неэффективным.</p>
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