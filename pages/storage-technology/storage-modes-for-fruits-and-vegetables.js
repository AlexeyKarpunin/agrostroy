import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import '../../styles/style.css';
import Head from 'next/head';

const giveHeadinfo = (city) => ({
  ru: {
    title: 'Режимы хранения плодоовощной продукции',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'Режимы хранения плодоовощной продукции',
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
            <h1 className='is-section'>Режимы хранения плодоовощной продукции</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <table width='619' cellSpacing='0' cellPadding='1' border='1'>
                <colgroup>
                  <col width='248' />
                  <col width='121' />
                  <col width='121' />
                  <col width='120' /> 
                </colgroup>
                <tbody>
                  <tr>
                    <td width='248' height='48'><b>Продукция</b></td>
                    <td width='121'><b>Температура в массе продукции, °С</b></td>
                    <td width='121'><b>Относительная влажность воздуха, %</b></td>
                    <td width='120'><b>Расчетный срок хранения, сут</b></td>
                  </tr>
                  <tr>
                    <td colSpan='4' width='615' height='15' bgcolor='#ffff00'><i><b>Плодоовощная продукция</b></i></td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Артишоки</td>
                    <td width='121'>0</td>
                    <td width='121'>90-95</td>
                    <td width='120'>21</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Баклажаны</td>
                    <td width='121'>+7…+10</td>
                    <td width='121'>85-90</td>
                    <td width='120'>до 10</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Бобы в стручках</td>
                    <td width='121'>0…+4</td>
                    <td width='121'>85-90</td>
                    <td width='120'>14</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Брюква</td>
                    <td width='121'>0</td>
                    <td width='121'>95-98</td>
                    <td width='120'>120-180</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Горошек</td>
                    <td width='121'>&nbsp;</td>
                    <td width='121'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-зеленый</td>
                    <td width='121'>-0,5…0</td>
                    <td width='121'>85-98</td>
                    <td width='120'>до 21</td>
                  </tr>
                  <tr>
                    <td width='248' valign='BOTTOM' height='15'>-сушеный</td>
                    <td width='121'>+10</td>
                    <td width='121'>70</td>
                    <td width='120'>180-240</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Грибы</td>
                    <td width='121'>0</td>
                    <td width='121'>85-95</td>
                    <td width='120'>3-5</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Зеленые овощи (салат, лук, щавель)</td>
                    <td width='121'>0…+0,5</td>
                    <td width='121'>90-95</td>
                    <td width='120'>5-10</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Кабачки</td>
                    <td width='121'>0…+4</td>
                    <td width='121'>85-90</td>
                    <td width='120'>до 60</td>
                  </tr>
                  <tr>
                    <td width='248' height='32'>Капуста белокочанная продовольственная</td>
                    <td width='121'>&nbsp;</td>
                    <td width='121'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-ранняя</td>
                    <td width='121'>-0,5…0</td>
                    <td width='121'>85-90</td>
                    <td width='120'>до 30</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-поздняя</td>
                    <td width='121'>-1…0</td>
                    <td width='121'>85-90</td>
                    <td width='120'>180-270</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Капуста:</td>
                    <td width='121'>&nbsp;</td>
                    <td width='121'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-брокколи</td>
                    <td width='121'>0…+0,5</td>
                    <td width='121'>90-95</td>
                    <td width='120'>10-20</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-брюссельская</td>
                    <td width='121'>0…+2</td>
                    <td width='121'>85-95</td>
                    <td width='120'>до 30</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-кольраби</td>
                    <td width='121'>0…+0,5</td>
                    <td width='121'>85-90</td>
                    <td width='120'>150-240</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-краснокочанная</td>
                    <td width='121'>-1…0</td>
                    <td width='121'>85-95</td>
                    <td width='120'>150-210</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-савойская</td>
                    <td width='121'>-1…0</td>
                    <td width='121'>90-95</td>
                    <td width='120'>120-240</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-цветная</td>
                    <td width='121'>0…+0,5</td>
                    <td width='121'>85-95</td>
                    <td width='120'>30-60</td>
                  </tr>
                  <tr>
                    <td width='248' valign='BOTTOM' height='15'>Картофель:</td>
                    <td width='121'>&nbsp;</td>
                    <td width='121'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>— продовольственный</td>
                    <td width='121'>+2…+4</td>
                    <td width='121'>85-95</td>
                    <td width='120'>240-365</td>
                  </tr>
                  <tr>
                    <td width='248' valign='BOTTOM' height='15'>-семенной</td>
                    <td width='121'>+3</td>
                    <td width='121'>85-95</td>
                    <td width='120'>240</td>
                  </tr>
                  <tr>
                    <td width='248' valign='BOTTOM' height='15'>батат</td>
                    <td width='121'>+10…12</td>
                    <td width='121'>85-90</td>
                    <td width='120'>120-210</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Кукуруза сладкая</td>
                    <td width='121'>0</td>
                    <td width='121'>95-98</td>
                    <td width='120'>4-8</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Лук-репка продовольственный</td>
                    <td width='121'>-3…0</td>
                    <td width='121'>70-80</td>
                    <td width='120'>270</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Лук-матка</td>
                    <td width='121'>+3</td>
                    <td width='121'>60-80</td>
                    <td width='120'>240</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Лук-порей</td>
                    <td width='121'>0</td>
                    <td width='121'>90-95</td>
                    <td width='120'>60-90</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Лук-севок, лук-выборок</td>
                    <td width='121'>&nbsp;</td>
                    <td width='121'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-теплый способ хранения</td>
                    <td width='121'>+18</td>
                    <td width='121'>50-70</td>
                    <td width='120'>240</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-холодный способ хранения</td>
                    <td width='121'>-3…0</td>
                    <td width='121'>70-80</td>
                    <td width='120'>240</td>
                  </tr>
                  <tr>
                    <td rowSpan='2' width='248' height='15'>-тепло-холодный способ хранения</td>
                    <td width='121'>+18</td>
                    <td width='121'>50-70</td>
                    <td width='120'>120</td>
                  </tr>
                  <tr>
                    <td width='121'>-3…0</td>
                    <td width='121'>70-80</td>
                    <td width='120'>90</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Морковь</td>
                    <td width='121'>-1…+1</td>
                    <td width='121'>90-98</td>
                    <td width='120'>180-270</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Огурцы</td>
                    <td width='121'>+7…+10</td>
                    <td width='121'>95</td>
                    <td width='120'>10-15</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Пастернак</td>
                    <td width='121'>0</td>
                    <td width='121'>90-95</td>
                    <td width='120'>60-120</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Патиссоны</td>
                    <td width='121'>0…+4</td>
                    <td width='121'>90-95</td>
                    <td width='120'>60-120</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Перец стручковый:</td>
                    <td width='121'>&nbsp;</td>
                    <td width='121'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='248' valign='BOTTOM' height='15'>-острый</td>
                    <td width='121'>+7…+10</td>
                    <td width='121'>85-90</td>
                    <td width='120'>30</td>
                  </tr>
                  <tr>
                    <td width='248' valign='BOTTOM' height='15'>-сладкий</td>
                    <td width='121'>0…+1</td>
                    <td width='121'>85-90</td>
                    <td width='120'>30</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-сушеный</td>
                    <td width='121'>0…+10</td>
                    <td width='121'>60-70</td>
                    <td width='120'>180</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Петрушка</td>
                    <td width='121'>0…+1</td>
                    <td width='121'>85-90</td>
                    <td width='120'>30-60</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Ревень</td>
                    <td width='121'>0…+1</td>
                    <td width='121'>85-95</td>
                    <td width='120'>14-30</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Редис</td>
                    <td width='121'>0</td>
                    <td width='121'>90-95</td>
                    <td width='120'>21</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Редька</td>
                    <td width='121'>0</td>
                    <td width='121'>90-95</td>
                    <td width='120'>90-120</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Репа</td>
                    <td width='121'>0</td>
                    <td width='121'>90-95</td>
                    <td width='120'>120</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Салат-латук</td>
                    <td width='121'>0…+1</td>
                    <td width='121'>90-100</td>
                    <td width='120'>14-21</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Свекла</td>
                    <td width='121'>0…+1</td>
                    <td width='121'>90-95</td>
                    <td width='120'>90-150</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Сельдерей</td>
                    <td width='121'>0</td>
                    <td width='121'>90-95</td>
                    <td width='120'>60-90</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Семена овощей</td>
                    <td width='121'>0…+10</td>
                    <td width='121'>50-65</td>
                    <td width='120'>300-365</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Спаржа</td>
                    <td width='121'>0…+1</td>
                    <td width='121'>85-95</td>
                    <td width='120'>21-30</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Томаты:</td>
                    <td width='121'>0</td>
                    <td width='121'>90-95</td>
                    <td width='120'>150</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-зеленые</td>
                    <td width='121'>+11…+13</td>
                    <td width='121'>85-90</td>
                    <td width='120'>до 30</td>
                  </tr>
                  <tr>
                    <td width='248' valign='BOTTOM' height='15'>-бурые</td>
                    <td width='121'>+1…+2</td>
                    <td width='121'>85-90</td>
                    <td width='120'>до 30</td>
                  </tr>
                  <tr>
                    <td width='248' valign='BOTTOM' height='15'>-красные</td>
                    <td width='121'>+0,5…+1</td>
                    <td width='121'>85-95</td>
                    <td width='120'>15-30</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Тыква</td>
                    <td width='121'>&nbsp;</td>
                    <td width='121'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-обыкновенная</td>
                    <td width='121'>+5…+10</td>
                    <td width='121'>95</td>
                    <td width='120'>5-14</td>
                  </tr>
                  <tr>
                    <td width='248' valign='BOTTOM' height='15'>-крупноплодная столовая</td>
                    <td width='121'>+10…+12</td>
                    <td width='121'>50-75</td>
                    <td width='120'>120-180</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Фасоль</td>
                    <td width='121'>&nbsp;</td>
                    <td width='121'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-зеленая</td>
                    <td width='121'>+1…+4</td>
                    <td width='121'>95</td>
                    <td width='120'>3-10</td>
                  </tr>
                  <tr>
                    <td width='248' valign='BOTTOM' height='15'>-сушеная</td>
                    <td width='121'>+10</td>
                    <td width='121'>70</td>
                    <td width='120'>180-240</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Хрен</td>
                    <td width='121'>-1…0</td>
                    <td width='121'>90-95</td>
                    <td width='120'>300-365</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Шпинат</td>
                    <td width='121'>0</td>
                    <td width='121'>95-98</td>
                    <td width='120'>10-14</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>Чеснок:</td>
                    <td width='121'>-1,5…0</td>
                    <td width='121'>65-75</td>
                    <td width='120'>180-210</td>
                  </tr>
                  <tr>
                    <td width='248' height='15'>-продовольственный</td>
                    <td width='121'>&nbsp;</td>
                    <td width='121'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='248' valign='BOTTOM' height='14'>-семенной</td>
                    <td width='121'>&nbsp;</td>
                    <td width='121'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                </tbody>
              </table>

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