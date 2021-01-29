import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import '../../styles/style.css';

export default function STpage () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
 
  
  return (
    <>
      <Header
        city={city}
        language={language}
      />
      <article className='page-section is-article'>
        <div className='page-section__inner'>
          <div className='page-section__title'>
            <h1 className='is-section'>Режимы хранения фруктов и ягод</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <table width='619' cellSpacing='0' cellPadding='7' border='1'>
                <colgroup>
                  <col width='236' />
                  <col width='109' />
                  <col width='109' />
                  <col width='108' /> 
                </colgroup>
                <tbody>
                  <tr>
                    <td width='236' height='36'><b>Продукция</b></td>
                    <td width='109'><b>Температура в массе продукции, °С</b></td>
                    <td width='109'><b>Относительная влажность воздуха, %</b></td>
                    <td width='108'><b>Расчетный срок хранения, сут</b></td>
                  </tr>
                  <tr>
                    <td colSpan='4' width='603' height='3' bgcolor='#ffff00'><i><b>Фрукты и ягоды</b></i></td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Абрикосы</td>
                    <td width='109'>-0,5…0</td>
                    <td width='109'>90-95</td>
                    <td width='108'>14-30</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Авокадо</td>
                    <td width='109'>+4…+12</td>
                    <td width='109'>85-90</td>
                    <td width='108'>14-60</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Айва</td>
                    <td width='109'>-0,5…0</td>
                    <td width='109'>90</td>
                    <td width='108'>60-90</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Ананасы</td>
                    <td width='109'>&nbsp;</td>
                    <td width='109'>&nbsp;</td>
                    <td width='108'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-зеленые</td>
                    <td width='109'>+10</td>
                    <td width='109'>85-90</td>
                    <td width='108'>14-30</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-зрелые</td>
                    <td width='109'>+7</td>
                    <td width='109'>85-90</td>
                    <td width='108'>14-30</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Апельсины</td>
                    <td width='109'>&nbsp;</td>
                    <td width='109'>&nbsp;</td>
                    <td width='108'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-оранжевые</td>
                    <td width='109'>+1…+2</td>
                    <td width='109'>85-90</td>
                    <td width='108'>60-120</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-желтые</td>
                    <td width='109'>+3…+4</td>
                    <td width='109'>85-90</td>
                    <td width='108'>60-150</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-недозрелые</td>
                    <td width='109'>+5…+6</td>
                    <td width='109'>82-90</td>
                    <td width='108'>до 150</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Арбузы</td>
                    <td width='109'>+2…+3</td>
                    <td width='109'>85-90</td>
                    <td width='108'>до 60</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Бананы:</td>
                    <td width='109'>&nbsp;</td>
                    <td width='109'>&nbsp;</td>
                    <td width='108'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-зеленые</td>
                    <td width='109'>+14…+16</td>
                    <td width='109'>85-90</td>
                    <td width='108'>10-20</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-зрелые</td>
                    <td width='109'>+13…+14</td>
                    <td width='109'>85-90</td>
                    <td width='108'>5-10</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Бузина</td>
                    <td width='109'>-0,5…0</td>
                    <td width='109'>90-95</td>
                    <td width='108'>7-14</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Брусника</td>
                    <td width='109'>-1</td>
                    <td width='109'>85-90</td>
                    <td width='108'>до 90</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Виноград</td>
                    <td width='109'>-2…0</td>
                    <td width='109'>85-95</td>
                    <td width='108'>90-180</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Вишня</td>
                    <td width='109'>0</td>
                    <td width='109'>90-95</td>
                    <td width='108'>10-25</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Гранаты</td>
                    <td width='109'>-2…-1</td>
                    <td width='109'>90</td>
                    <td width='108'>60-180</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Грейпфрут</td>
                    <td width='109'>0…+10</td>
                    <td width='109'>85-90</td>
                    <td width='108'>90-365</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Груши:</td>
                    <td width='109'>&nbsp;</td>
                    <td width='109'>&nbsp;</td>
                    <td width='108'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-летние</td>
                    <td width='109'>-0,5</td>
                    <td width='109'>90</td>
                    <td width='108'>30-60</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-зимние</td>
                    <td width='109'>-1…-2</td>
                    <td width='109'>90</td>
                    <td width='108'>120-180</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Дыни</td>
                    <td width='109'>0…+1</td>
                    <td width='109'>85-90</td>
                    <td width='108'>60-210</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Ежевика</td>
                    <td width='109'>-0,5…0</td>
                    <td width='109'>90-95</td>
                    <td width='108'>до 5</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Земляника</td>
                    <td width='109'>-0,5…+1</td>
                    <td width='109'>85-95</td>
                    <td width='108'>до 7</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Инжир</td>
                    <td width='109'>&nbsp;</td>
                    <td width='109'>&nbsp;</td>
                    <td width='108'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-свежий</td>
                    <td width='109'>-1…0</td>
                    <td width='109'>85-90</td>
                    <td width='108'>7-14</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-сушеный</td>
                    <td width='109'>0…+4</td>
                    <td width='109'>50-60</td>
                    <td width='108'>270-365</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Киви</td>
                    <td width='109'>-0,5…0</td>
                    <td width='109'>90-95</td>
                    <td width='108'>90-150</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Клубника</td>
                    <td width='109'>0</td>
                    <td width='109'>90-95</td>
                    <td width='108'>до 10</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Клюква</td>
                    <td width='109'>+0,5…+4</td>
                    <td width='109'>90-95</td>
                    <td width='108'>60-120</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Кокосовый орех</td>
                    <td width='109'>0…+1</td>
                    <td width='109'>80-85</td>
                    <td width='108'>30-60</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Крыжовник</td>
                    <td width='109'>-0,5…0</td>
                    <td width='109'>85-95</td>
                    <td width='108'>14-30</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Лайм</td>
                    <td width='109'>+7…+8</td>
                    <td width='109'>85-90</td>
                    <td width='108'>40-60</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Лимоны</td>
                    <td width='109'>&nbsp;</td>
                    <td width='109'>&nbsp;</td>
                    <td width='108'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-желтые</td>
                    <td width='109'>+2…+3</td>
                    <td width='109'>85-90</td>
                    <td width='108'>30-120</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-недозрелые</td>
                    <td width='109'>+4…+8</td>
                    <td width='109'>82-90</td>
                    <td width='108'>30-120</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Личи китайский</td>
                    <td width='109'>0…+1</td>
                    <td width='109'>90-95</td>
                    <td width='108'>до 45</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Логанова ягода</td>
                    <td width='109'>-0,5…0</td>
                    <td width='109'>90-95</td>
                    <td width='108'>2-3</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Локва</td>
                    <td width='109'>0</td>
                    <td width='109'>90</td>
                    <td width='108'>21</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Малина</td>
                    <td width='109'>-0,5…0</td>
                    <td width='109'>85-95</td>
                    <td width='108'>до 5</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Манго</td>
                    <td width='109'>+10…+12</td>
                    <td width='109'>85-90</td>
                    <td width='108'>14-35</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Мандарины</td>
                    <td width='109'>&nbsp;</td>
                    <td width='109'>&nbsp;</td>
                    <td width='108'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-желтые</td>
                    <td width='109'>+1…+2</td>
                    <td width='109'>85-90</td>
                    <td width='108'>до 30</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-недозрелые</td>
                    <td width='109'>+2…+6</td>
                    <td width='109'>82-90</td>
                    <td width='108'>до 45</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Маслины свежие</td>
                    <td width='109'>+5…+10</td>
                    <td width='109'>85-90</td>
                    <td width='108'>30-45</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Нектарин</td>
                    <td width='109'>-0,5…0</td>
                    <td width='109'>90-95</td>
                    <td width='108'>14-30</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Папайя</td>
                    <td width='109'>+7</td>
                    <td width='109'>85-90</td>
                    <td width='108'>7-21</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Персики</td>
                    <td width='109'>-1…+1</td>
                    <td width='109'>85-95</td>
                    <td width='108'>30-45</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Слива</td>
                    <td width='109'>&nbsp;</td>
                    <td width='109'>&nbsp;</td>
                    <td width='108'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-свежая</td>
                    <td width='109'>-1…0</td>
                    <td width='109'>90-95</td>
                    <td width='108'>до 30</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-сушеная</td>
                    <td width='109'>0…+5</td>
                    <td width='109'>55-60</td>
                    <td width='108'>150-240</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Смородина</td>
                    <td width='109'>-1…+1</td>
                    <td width='109'>85-95</td>
                    <td width='108'>15-60</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Финики обработанные</td>
                    <td width='109'>-17…0</td>
                    <td width='109'>70-75</td>
                    <td width='108'>180-365</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Хурма</td>
                    <td width='109'>-1…0</td>
                    <td width='109'>90</td>
                    <td width='108'>90-120</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Черешня</td>
                    <td width='109'>-1…+2</td>
                    <td width='109'>85-95</td>
                    <td width='108'>10-25</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Черника</td>
                    <td width='109'>-1…0</td>
                    <td width='109'>85-90</td>
                    <td width='108'>до 14</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>Яблоки:</td>
                    <td width='109'>&nbsp;</td>
                    <td width='109'>&nbsp;</td>
                    <td width='108'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='236' height='3'>-летние</td>
                    <td width='109'>0…+1</td>
                    <td width='109'>85-95</td>
                    <td width='108'>60-120</td>
                  </tr>
                  <tr>
                    <td width='236' height='2'>-зимние</td>
                    <td width='109'>-1…+1</td>
                    <td width='109'>85-95</td>
                    <td width='108'>150-365</td>
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