import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import '../../styles/style.css';
import Head from 'next/head';

const giveHeadinfo = (city) => ({
  ru: {
    title: 'Совместимость продуктов',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'Совместимость продуктов',
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
            <h1 className='is-section'>Совместимость продуктов</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <p>Для поддержания оптимальных условий хранения необходимо хранить большинство продуктов раздельно, но обычно это экономически не выгодно. Поэтому при большом количестве продуктов практические соображения требуют смешанного хранения охлажденных продуктов.</p>
              <p>Различия в условиях хранения продуктов создают проблему их смешанного размещения в холодильной камере. Как правило, в таких камерах для смешанного хранения температура хранения немного выше оптимальной. Такой подход сводит к минимуму вероятность повреждения более восприимчивых продуктов. Хотя более высокая температура сокращает срок хранения некоторых продуктов, но это обычно не представляет серьезной проблемы при краткосрочном хранении.</p>
              <p>Другая проблема, связанная со смешанным хранением, заключается в поглощении продуктами посторонних запахов. Некоторые продукты выделяют ароматы, которые поглощаются другими продуктами в той же самой камере. Необходимо предотвращать совместное хранение таких продуктов даже в течение короткого времени. Например, картофель и лук выделяют запахи, которые передаются другим продуктам, поэтому их ни в коем случае нельзя хранить вместе в одной холодильной камере.</p>
              <p>Основная проблема при хранении фруктов и овощей, таких как яблоки, груши, перец, томаты, — выделение этилена в процессе хранения. Особенно много этилена выделяют зрелые плоды. Под его влиянием ускоряется созревание овощей и происходит потеря ими товарных качеств.</p>
              <p>Овощи сильнее поражаются болезнями; ускоряется прорастание картофеля, моркови, сельдерея; изменяется консистенция овощей. Ускорения созревания почти не наблюдается при 0°С, однако оно резко усиливается при повышении температуры. Поэтому овощи и фрукты, выделяющие этилен, необходимо хранить отдельно от других овощей. Закладывая овощи на хранение, следует помнить, что при совместном хранении томатов с капустой или сельдереем вкус помидоров может ухудшаться.</p>
              <p>Корнеплоды моркови, хранящиеся вместе с томатами и перцем, приобретают горький вкус под влиянием большого количества этилена, выделяемого последними. Аналогичное действие этилен оказывает и на столовую свеклу.</p>
              <p>При хранении лука в одном помещении с плодами перца вкус лука изменяется. Огурцы и перец, у которых желательно сохранить зеленый цвет, не следует хранить с яблоками, томатами и другими плодами и овощами, выделяющими этилен.</p>
              <p>Группы продуктов, совместимых при краткосрочном хранении</p>
              <table width='607' cellSpacing='0' cellPadding='0' border='1'>
                <colgroup>
                  <col width='118' />
                  <col width='119' />
                  <col width='119' />
                  <col width='119' />
                  <col width='120' /> 
                </colgroup>
                <tbody>
                  <tr>
                    <td colSpan='5' width='603' valign='TOP' height='25'><b>Совместимость свежих фруктов и овощей в течение 10 дней хранения</b></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td colSpan='5' width='603' height='18' bgcolor='#ccffcc'>
                      <i><b>Группа 1А (температура 0-2</b></i>
                      <sup><i><b>о</b></i></sup>
                      <i><b>С, относительная влажность 90-98%)</b></i>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td colSpan='5' width='603' height='18' bgcolor='#ffff99'>
                      <i><b>О</b></i>
                      <i><b>вощи</b></i>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td width='118' valign='TOP' height='16'>Амарант</td>
                    <td width='119'>Капуста</td>
                    <td width='119'>Лук</td>
                    <td width='119'>Репка</td>
                    <td width='120' valign='TOP'>Фенхель</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Анис</td>
                    <td width='119'>— брокколи</td>
                    <td width='119'>-зеленый</td>
                    <td width='119'>— зеленная</td>
                    <td width='120'>Хрен</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Артишоки</td>
                    <td width='119'>— брюссельская</td>
                    <td width='119'>-порей</td>
                    <td width='119'>— китайская</td>
                    <td width='120'>Цикорий</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Бок Чой</td>
                    <td width='119'>— кале</td>
                    <td width='119'>-шалот</td>
                    <td width='119'>Салат</td>
                    <td width='120'>Чеснок</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Брюква</td>
                    <td width='119'>— китайская</td>
                    <td width='119'>Морковь</td>
                    <td width='119'>Свекла</td>
                    <td width='120'>Шпинат</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Горошек</td>
                    <td width='119'>— кольраби</td>
                    <td width='119'>Мята</td>
                    <td width='119'>— мангольд</td>
                    <td width='120'>Эндивий</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>-душистый</td>
                    <td width='119'>— цветная</td>
                    <td width='119'>Пастернак</td>
                    <td width='119'>— продовол-ная</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>-снежный</td>
                    <td width='119'>Козлобородник</td>
                    <td width='119'>Петрушка</td>
                    <td width='119' valign='TOP'>Сельдерей</td>
                    <td rowSpan='5' width='120'><img src='/img/2010/img11.jpg' alt='' /></td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Горчица зелень</td>
                    <td width='119'>Кукуруза:</td>
                    <td width='119'>Ревень</td>
                    <td width='119'>Спаржа</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Грибы</td>
                    <td width='119'>— малютка</td>
                    <td width='119'>Редиска</td>
                    <td width='119'>Фасоль</td>
                  </tr>
                  <tr>
                    <td rowSpan='2' width='118' height='16'>Зеленные травы (кроме базилика)</td>
                    <td width='119'>— сладкая</td>
                    <td width='119'>Редька Дайкон</td>
                    <td width='119'>— лима</td>
                  </tr>
                  <tr>
                    <td width='119'>&nbsp;</td>
                    <td width='119'>Резаные овощи</td>
                    <td width='119'>— fava</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td colSpan='5' width='603' height='18' bgcolor='#ccffcc'>
                      <i><b>Группа 1Б (температура 0-2</b></i>
                      <i><b>˚С, относительная влажность 85-95%)</b></i>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td colSpan='5' width='603' height='18' bgcolor='#ffff99'><i><b>Фрукты и дыни</b></i></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td width='118' height='16'>Абрикосы</td>
                    <td rowSpan='2' width='119'>Дыня канталупа (мускусная)</td>
                    <td width='119'>Крыжовник</td>
                    <td width='119'>Смородина</td>
                    <td width='120'>Ягода бузины</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Авокадо спелые</td>
                    <td width='119'>Личи</td>
                    <td width='119'>Финик</td>
                    <td width='120'>Ягода логанова</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Айва</td>
                    <td width='119'>Ежевика</td>
                    <td width='119'>Малина</td>
                    <td width='119'>Хурма</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Виноград</td>
                    <td width='119'>Инжир</td>
                    <td width='119'>Нектарин</td>
                    <td width='119'>Черная смородина</td>
                    <td rowSpan='4' width='120'><img src='/img/2010/img10.jpg' alt='' /></td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Вишня</td>
                    <td width='119'>Киви</td>
                    <td width='119'>Персик</td>
                    <td width='119' valign='BOTTOM'>Черника</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Гранат</td>
                    <td width='119'>Клубника</td>
                    <td width='119'>Резаные фрукты</td>
                    <td width='119'>Чернослив</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Груша</td>
                    <td width='119'>Кокос</td>
                    <td width='119'>Слива</td>
                    <td width='119'>Яблоки</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td colSpan='5' width='603' height='18' bgcolor='#ccffcc'>
                      <i><b>Группа 2 (температура 7-10</b></i>
                      <i><b>˚С, относительная влажность 85-95%)</b></i>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td colSpan='2' width='239' height='18' bgcolor='#ffff99'>
                      <i><b>О</b></i>
                      <i><b>вощи</b></i>
                    </td>
                    <td colSpan='3' width='362' bgcolor='#ffff99'><i><b>Фрукты и дыни</b></i></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td width='118' valign='BOTTOM' height='16'>Базилик</td>
                    <td width='119'>— колокол</td>
                    <td width='119'>Авокадо незрелые</td>
                    <td rowSpan='2' width='119'>Дыни Хуан Канарские</td>
                    <td width='120'>Тамаринда</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Баклажан</td>
                    <td width='119'>— чили</td>
                    <td width='119'>Ананас</td>
                    <td width='120'>Яблоко сахарное</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Бобы длинные</td>
                    <td rowSpan='3' width='119'>Тыква, патиссон летняя с мягкой кожурой</td>
                    <td width='119'>Апельсины</td>
                    <td width='119'>Клюква</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Горох южный</td>
                    <td width='119'>Арбуз</td>
                    <td width='119'>Кумкват</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Дыни рогатые</td>
                    <td width='119'>Грейпфрут</td>
                    <td width='119'>Лайм</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Кактуса листья</td>
                    <td width='119'>Фасоль</td>
                    <td width='119'>Груша-кактус</td>
                    <td width='119'>Лимон</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Огурец</td>
                    <td width='119'>— зеленая</td>
                    <td width='119'>Гуава</td>
                    <td width='119'>Мандарин</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Окра</td>
                    <td width='119'>— сухая</td>
                    <td width='119'>Дуриан</td>
                    <td width='119'>Оливки</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Перец</td>
                    <td width='119'>&nbsp;</td>
                    <td width='119'>&nbsp;</td>
                    <td width='119'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td colSpan='5' width='603' height='18' bgcolor='#ccffcc'>
                      <i><b>Группа 3 (температура 13-18</b></i>
                      <i><b>˚С, относительная влажность 85-95%)</b></i>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td colSpan='2' width='239' height='18' bgcolor='#ffff99'>
                      <i><b>О</b></i>
                      <i><b>вощи</b></i>
                    </td>
                    <td colSpan='3' width='362' bgcolor='#ffff99'><i><b>Фрукты и дыни</b></i></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td width='118' height='16'>Дыня горькая</td>
                    <td rowSpan='3' width='119'>Помидоры спелые, частично спелые, зрелые зеленые</td>
                    <td width='119'>Анона</td>
                    <td width='119'>Манго</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Имбирь</td>
                    <td width='119'>Атемойя</td>
                    <td width='119'>Нефелиум</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>Картофель</td>
                    <td width='119'>Бананы</td>
                    <td width='119'>Папайя</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>— продовол-ный</td>
                    <td rowSpan='3' width='119'>Тыква, патиссон зимняя с твердой кожурой</td>
                    <td rowSpan='3' width='119'>Дыня (зимняя, креншо, медовая, персидская)</td>
                    <td width='119'>Черимола</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='16'>— сладкий (батат)</td>
                    <td width='119'>&nbsp;</td>
                    <td width='120'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td width='118' height='15'>Лук сухой</td>
                    <td width='119'>&nbsp;</td>
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