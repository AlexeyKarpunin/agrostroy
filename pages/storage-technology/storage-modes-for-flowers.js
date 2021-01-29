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
            <h1 className='is-section'>Режимы хранения цветов, черенков и саженцев</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <table width='611' cellSpacing='0' cellPadding='1' border='1'>
                <colgroup>
                  <col width='142' />
                  <col width='76' />
                  <col width='73' />
                  <col width='157' />
                  <col width='76' />
                  <col width='72' /> 
                </colgroup>
                <tbody>
                  <tr>
                    <td width='142' height='77'><b>Наименование продукции</b></td>
                    <td width='76'>
                      <b>
                        Температура хранения,
                        <br />
                        °С
                      </b>
                    </td>
                    <td width='73'>
                      <b>
                        Срок хранения,
                        <br />
                        сут
                      </b>
                    </td>
                    <td width='157'><b>Наименование продукции</b></td>
                    <td width='76'>
                      <b>
                        Темпе-ратура хранения,
                        <br />
                        °С
                      </b>
                    </td>
                    <td width='72'>
                      <b>
                        Срок хранения,
                        <br />
                        сут
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='6' width='607' height='18' bgcolor='#ffff99'><i><b>Срезанные цветы</b></i></td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Акация</td>
                    <td width='76'>+4</td>
                    <td width='73'>3-4</td>
                    <td width='157'>Львиный зев</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>7-14</td>
                  </tr>
                  <tr>
                    <td width='142' valign='BOTTOM' height='16'>Альстромерия</td>
                    <td width='76'>+4…+5</td>
                    <td width='73'>14-21</td>
                    <td width='157'>Люпин</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>3</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Анемоны</td>
                    <td width='76'>+4…+7</td>
                    <td width='73'>2</td>
                    <td width='157'>Лютик</td>
                    <td width='76'>0…+5</td>
                    <td width='72'>7-10</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Антуриум</td>
                    <td width='76'>+8…+12</td>
                    <td width='73'>14-30</td>
                    <td width='157'>Мак</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>3-5</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Астра</td>
                    <td width='76'>0…+4</td>
                    <td width='73'>7-21</td>
                    <td width='157'>Маргаритка</td>
                    <td width='76'>+2</td>
                    <td width='72'>7-14</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Бувардия</td>
                    <td width='76'>0…+1,5</td>
                    <td width='73'>7</td>
                    <td width='157'>Морской лук</td>
                    <td width='76'>0…+0,5</td>
                    <td width='72'>14</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Василек</td>
                    <td width='76'>+4…+5</td>
                    <td width='73'>3</td>
                    <td width='157'>Наперстянка, дигиталис</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>1-2</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Вереск</td>
                    <td width='76'>+4…+5</td>
                    <td width='73'>7-21</td>
                    <td width='157'>Нарцисс</td>
                    <td width='76'>0…+5</td>
                    <td width='72'>1-3</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гардения</td>
                    <td width='76'>0…+1</td>
                    <td width='73'>14</td>
                    <td width='157'>Незабудка</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>1-2</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гвоздика</td>
                    <td width='76'>-0,5…+5</td>
                    <td width='73'>21-30</td>
                    <td width='157'>Ноготки</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>7-14</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гвоздика в бутонах</td>
                    <td width='76'>-0,5…0</td>
                    <td width='73'>30-84</td>
                    <td width='157'>Орнитогалум</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>21-42</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гвоздика миниатюрная</td>
                    <td width='76'>-0,5…0</td>
                    <td width='73'>14</td>
                    <td width='157'>Орхидея</td>
                    <td width='76'>0…+13</td>
                    <td width='72'>5-14</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гвоздика турецкая</td>
                    <td width='76'>+7</td>
                    <td width='73'>3-4</td>
                    <td width='157'>Пион</td>
                    <td width='76'>0…+1</td>
                    <td width='72'>14-42</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Георгин</td>
                    <td width='76'>+4…+5</td>
                    <td width='73'>3-5</td>
                    <td width='157'>Пиретрум</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>3</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гербера</td>
                    <td width='76'>+1…+5</td>
                    <td width='73'>7-14</td>
                    <td width='157'>Подснежник</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>2-4</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гиацинт</td>
                    <td width='76'>0…+0,5</td>
                    <td width='73'>14</td>
                    <td width='157'>Примула</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>1-2</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гипсофила</td>
                    <td width='76'>+4…+5</td>
                    <td width='73'>7-21</td>
                    <td width='157'>Резеда</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>3-5</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гладиолус</td>
                    <td width='76'>+2…+8</td>
                    <td width='73'>5-8</td>
                    <td width='157'>Ромашка</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>3-8</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Годетия</td>
                    <td width='76'>+10</td>
                    <td width='73'>7</td>
                    <td width='157'>Роза</td>
                    <td width='76'>&nbsp;</td>
                    <td width='72'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Дельфиниум</td>
                    <td width='76'>+4</td>
                    <td width='73'>1-2</td>
                    <td width='157'>в сухом пакете</td>
                    <td width='76'>0</td>
                    <td width='72'>14</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Душистый горошек</td>
                    <td width='76'>-0,5…0</td>
                    <td width='73'>14</td>
                    <td width='157'>в консерванте</td>
                    <td width='76'>+0,5…+2</td>
                    <td width='72'>4-5</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Имбирь</td>
                    <td width='76'>+13</td>
                    <td width='73'>4-7</td>
                    <td width='157'>Сирень</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>4-6</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Ирис луковичный</td>
                    <td width='76'>0…+2</td>
                    <td width='73'>7-14</td>
                    <td width='157'>Тюльпан</td>
                    <td width='76'>-0,5…0</td>
                    <td width='72'>14-21</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Кала</td>
                    <td width='76'>+4</td>
                    <td width='73'>7</td>
                    <td width='157'>Фиалка</td>
                    <td width='76'>+1…+5</td>
                    <td width='72'>3-7</td>
                  </tr>
                  <tr>
                    <td width='142' valign='BOTTOM' height='16'>Календула</td>
                    <td width='76'>+4</td>
                    <td width='73'>3-6</td>
                    <td width='157'>Флокс</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>1-3</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Камелия</td>
                    <td width='76'>+4…+7</td>
                    <td width='73'>3-6</td>
                    <td width='157'>Фрезия</td>
                    <td width='76'>0…+0,5</td>
                    <td width='72'>10-14</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Кореопсис</td>
                    <td width='76'>+4…+5</td>
                    <td width='73'>3-4</td>
                    <td width='157'>Хризантемы</td>
                    <td width='76'>-0,5…0</td>
                    <td width='72'>21-30</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Крокус</td>
                    <td width='76'>+0,5…+2</td>
                    <td width='73'>7-14</td>
                    <td width='157'>Цинния</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>5-7</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Лилия</td>
                    <td width='76'>0…+1</td>
                    <td width='73'>14-21</td>
                    <td width='157'>&nbsp;</td>
                    <td width='76'>&nbsp;</td>
                    <td width='72'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colSpan='6' width='607' height='18' bgcolor='#ffff99'><i><b>Цветы с декоративными листьями</b></i></td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Адиантум</td>
                    <td width='76'>0…+5</td>
                    <td width='73'>—</td>
                    <td width='157'>Омела белая</td>
                    <td width='76'>0</td>
                    <td width='72'>21-30</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Горный лавр</td>
                    <td width='76'>0</td>
                    <td width='73'>14-30</td>
                    <td width='157'>Падуб</td>
                    <td width='76'>0…+5</td>
                    <td width='72'>21-35</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Диффенбахия</td>
                    <td width='76'>+13</td>
                    <td width='73'>—</td>
                    <td width='157'>Пальма</td>
                    <td width='76'>+7</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Драцена</td>
                    <td width='76'>+2…+5</td>
                    <td width='73'>—</td>
                    <td width='157'>Питтоспорум</td>
                    <td width='76'>+2…+5</td>
                    <td width='72'>14-21</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Древесный папоротник</td>
                    <td width='76'>0</td>
                    <td width='73'>60-90</td>
                    <td width='157'>Плющ</td>
                    <td width='76'>+2…+5</td>
                    <td width='72'>14-21</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Евкалипт</td>
                    <td width='76'>+2…+5</td>
                    <td width='73'>7-21</td>
                    <td width='157'>Подокарпус</td>
                    <td width='76'>+7</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Камелия</td>
                    <td width='76'>+4…+5</td>
                    <td width='73'>—</td>
                    <td width='157'>Рододендрон</td>
                    <td width='76'>0</td>
                    <td width='72'>14-30</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Кедр</td>
                    <td width='76'>0</td>
                    <td width='73'>—</td>
                    <td width='157'>Самшит</td>
                    <td width='76'>+2…+5</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Кротон</td>
                    <td width='76'>+2…+5</td>
                    <td width='73'>—</td>
                    <td width='157'>Смилакс южный</td>
                    <td width='76'>+4…+5</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Леукотоэ</td>
                    <td width='76'>+2…+5</td>
                    <td width='73'>—</td>
                    <td width='157'>Спаржа</td>
                    <td width='76'>+2…+5</td>
                    <td width='72'>14-21</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Магнолия</td>
                    <td width='76'>+2…+5</td>
                    <td width='73'>14-30</td>
                    <td width='157'>Филодендрон</td>
                    <td width='76'>+2…+5</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Мирт</td>
                    <td width='76'>+2…+5</td>
                    <td width='73'>—</td>
                    <td width='157' valign='BOTTOM'>Черника</td>
                    <td width='76'>0</td>
                    <td width='72'>-7-30</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Можжевельник</td>
                    <td width='76'>0</td>
                    <td width='73'>30-60</td>
                    <td width='157'>&nbsp;</td>
                    <td width='76'>&nbsp;</td>
                    <td width='72'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colSpan='6' width='607' height='18' bgcolor='#ffff99'><i><b>Луковицы, корневище, клубни и корни</b></i></td>
                  </tr>
                  <tr>
                    <td width='142' valign='BOTTOM' height='16'>Альстремерия</td>
                    <td width='76'>+4…+10</td>
                    <td width='73'>—</td>
                    <td width='157'>Лилия</td>
                    <td width='76'>-0,5…0</td>
                    <td width='72'>30-300</td>
                  </tr>
                  <tr>
                    <td width='142' valign='BOTTOM' height='16'>Анемон</td>
                    <td width='76'>+7…+13</td>
                    <td width='73'>90-120</td>
                    <td width='157'>Лилия Глориоза</td>
                    <td width='76'>+10…+17</td>
                    <td width='72'>90-120</td>
                  </tr>
                  <tr>
                    <td width='142' valign='BOTTOM' height='16'>Ахименес</td>
                    <td width='76'>+7…+10</td>
                    <td width='73'>—</td>
                    <td width='157'>Лук гигантский</td>
                    <td width='76'>+23…+25</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Ацидантера</td>
                    <td width='76'>+7…+13</td>
                    <td width='73'>—</td>
                    <td width='157'>Лютик</td>
                    <td width='76'>+10…+13</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Бегония клубневая</td>
                    <td width='76'>+2…+7</td>
                    <td width='73'>90-150</td>
                    <td width='157'>Монтбретия</td>
                    <td width='76'>+2…+5</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Бродиэя</td>
                    <td width='76'>+20…+25</td>
                    <td width='73'>—</td>
                    <td width='157'>Мускари</td>
                    <td width='76'>+17</td>
                    <td width='72'>60-120</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гальтония</td>
                    <td width='76'>+7…+13</td>
                    <td width='73'>—</td>
                    <td width='157'>Нарцисс</td>
                    <td width='76'>+13…+17</td>
                    <td width='72'>60-120</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Георгин</td>
                    <td width='76'>+4…+9</td>
                    <td width='73'>150</td>
                    <td width='157'>Орхидея Блетилла</td>
                    <td width='76'>+2…+5</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гиацинт</td>
                    <td width='76'>+17…+20</td>
                    <td width='73'>60-150</td>
                    <td width='157'>Пион</td>
                    <td width='76'>0…+2</td>
                    <td width='72'>150</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гименокаллис</td>
                    <td width='76'>+16…+21</td>
                    <td width='73'>—</td>
                    <td width='157'>Подснежник</td>
                    <td width='76'>+13…+17</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гиппеаструм</td>
                    <td width='76'>+3…+7</td>
                    <td width='73'>150</td>
                    <td width='157'>Примула</td>
                    <td width='76'>+7…+10</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Гладиолус</td>
                    <td width='76'>+7…+10</td>
                    <td width='73'>150-240</td>
                    <td width='157'>Птицемлечник</td>
                    <td width='76'>+20…+25</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Глоксиния</td>
                    <td width='76'>+5…+10</td>
                    <td width='73'>150-210</td>
                    <td width='157'>Пушкиния</td>
                    <td width='76'>+16…+20</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Зантедеския (кала)</td>
                    <td width='76'>+4…+13</td>
                    <td width='73'>—</td>
                    <td width='157'>Рябчик</td>
                    <td width='76'>&nbsp;</td>
                    <td width='72'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Зефирантес</td>
                    <td width='76'>+4…+7</td>
                    <td width='73'>—</td>
                    <td width='157'>императорский</td>
                    <td width='76'>+23…+25</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Иксиолирион</td>
                    <td width='76'>+20</td>
                    <td width='73'>—</td>
                    <td width='157'>шахматный</td>
                    <td width='76'>+9…+13</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Ирис</td>
                    <td width='76'>0…+25</td>
                    <td width='73'>—</td>
                    <td width='157'>Спараксис</td>
                    <td width='76'>+25</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Каладиум</td>
                    <td width='76'>+21</td>
                    <td width='73'>—</td>
                    <td width='157'>Сцилла</td>
                    <td width='76'>+17…+23</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Камассия</td>
                    <td width='76'>+17…+20</td>
                    <td width='73'>—</td>
                    <td width='157'>Тигридия</td>
                    <td width='76'>+2…+5</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Кандык</td>
                    <td width='76'>+9…+17</td>
                    <td width='73'>—</td>
                    <td width='157'>Триллиум</td>
                    <td width='76'>0…+2</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Канна</td>
                    <td width='76'>+4…+10</td>
                    <td width='73'>—</td>
                    <td width='157'>Тюльпан</td>
                    <td width='76'>+17</td>
                    <td width='72'>60-180</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Кислица (оксалис)</td>
                    <td width='76'>&nbsp;</td>
                    <td width='73'>&nbsp;</td>
                    <td width='157'>Утсония</td>
                    <td width='76'>+4…+7</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>деппе</td>
                    <td width='76'>+2…+5</td>
                    <td width='73'>—</td>
                    <td width='157'>Фрезия</td>
                    <td width='76'>+30</td>
                    <td width='72'>90-120</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>железистолистная</td>
                    <td width='76'>+17…+20</td>
                    <td width='73'>—</td>
                    <td width='157'>Хионодокса</td>
                    <td width='76'>+20</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Колхикум</td>
                    <td width='76'>+17</td>
                    <td width='73'>—</td>
                    <td width='157'>Ципелла Герберта</td>
                    <td width='76'>+4…+10</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Крокус</td>
                    <td width='76'>+17</td>
                    <td width='73'>60-90</td>
                    <td width='157'>Эндимион</td>
                    <td width='76'>+17…+20</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Ландыш</td>
                    <td width='76'>-4…-1</td>
                    <td width='73'>365</td>
                    <td width='157'>Эрантис</td>
                    <td width='76'>+5…+9</td>
                    <td width='72'>—</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Лилейник</td>
                    <td width='76'>+10</td>
                    <td width='73'>30</td>
                    <td width='157'>&nbsp;</td>
                    <td width='76'>&nbsp;</td>
                    <td width='72'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td colSpan='6' width='607' height='18' bgcolor='#ffff99'>
                      <i><b>Черенки и отрос</b></i>
                      <i><b>тки</b></i>
                    </td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Азалия, выкорченная</td>
                    <td width='76'>-0,5…+5</td>
                    <td width='73'>30-70</td>
                    <td rowSpan='2' width='157'>Голубика древесная, выкорченная</td>
                    <td rowSpan='2' width='76'>-1</td>
                    <td rowSpan='2' width='72'>150</td>
                  </tr>
                  <tr>
                    <td rowSpan='2' width='142' height='23'>Бирючина, выкорченная</td>
                    <td rowSpan='2' width='76'>+1…+2</td>
                    <td rowSpan='2' width='73'>42</td>
                  </tr>
                  <tr>
                    <td width='157'>Малина, выкорченная</td>
                    <td width='76'>-1</td>
                    <td width='72'>84-105</td>
                  </tr>
                  <tr>
                    <td rowSpan='2' width='142' height='16'>Гвоздика, корни и выкорченная</td>
                    <td rowSpan='2' width='76'>-0,5…0</td>
                    <td rowSpan='2' width='73'>150-180</td>
                    <td width='157'>Розы budwood</td>
                    <td width='76'>-2…-0,5</td>
                    <td width='72'>365-730</td>
                  </tr>
                  <tr>
                    <td rowSpan='2' width='157'>Хризантемы, корни и выкорченная</td>
                    <td rowSpan='2' width='76'>-0,5…2</td>
                    <td rowSpan='2' width='72'>21-42</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Герань, выкорченная</td>
                    <td width='76'>-0,5</td>
                    <td width='73'>30-42</td>
                  </tr>
                  <tr>
                    <td colSpan='6' width='607' height='18' bgcolor='#ffff99'><i><b>Саженцы</b></i></td>
                  </tr>
                  <tr>
                    <td rowSpan='4' width='142' height='16'>Древесные декоративные растения и вечнозеленые растения</td>
                    <td rowSpan='4' width='76'>0…+2</td>
                    <td rowSpan='4' width='73'>120-150</td>
                    <td width='157'>Роз кустарники</td>
                    <td width='76'>-0,5…+2</td>
                    <td width='72'>120-150</td>
                  </tr>
                  <tr>
                    <td width='157'>Семена</td>
                    <td width='76'>0…+10</td>
                    <td width='72'>365</td>
                  </tr>
                  <tr>
                    <td width='157'>Спаржи корневища</td>
                    <td width='76'>-1…0</td>
                    <td width='72'>90-120</td>
                  </tr>
                  <tr>
                    <td rowSpan='2' width='157'>Травянистые многолетники</td>
                    <td width='76'>-3…+2</td>
                    <td width='72'>90-240</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Елки</td>
                    <td width='76'>-5,5…0</td>
                    <td width='73'>42-49</td>
                    <td width='76'>&nbsp;</td>
                    <td width='72'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='142' height='16'>Клубники растения</td>
                    <td width='76'>-1…0</td>
                    <td width='73'>240-300</td>
                    <td width='157'>Хвойные саженцы</td>
                    <td width='76'>0…+2</td>
                    <td width='72'>90-180</td>
                  </tr>
                  <tr>
                    <td width='142' height='15'>Помидор растения</td>
                    <td width='76'>+10…13</td>
                    <td width='73'>10</td>
                    <td width='157'>&nbsp;</td>
                    <td width='76'>&nbsp;</td>
                    <td width='72'>&nbsp;</td>
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