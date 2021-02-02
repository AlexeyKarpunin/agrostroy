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
            <h1 className='is-section'>Физиолого-биохимические процессы, происходящие в плодах и овощах в послеутробный период</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <p>Плоды и овощи объединяют собой группу растительных продуктов, которую отличает большое содержание воды (75—95%) с раство­ренными в ней сухими веществами: углевода­ми, органическими кислотами, витаминами, бел­ковыми, дубильными и минеральными вещест­вами.</p>
              <p>Вследствие этого они характеризуются высокой ферментативной активностью, низкой устойчивостью к фитопатогенным микроорга­низмам и легкой потерей воды.</p>
              <p>После сбора урожая в плодах и овощах продолжаются физиолого-биохимические и мик­робиологические процессы. Направление и ин­тенсивность указанных процессов зависит как от биологических функций, которые они выпол­няют в жизненном цикле вегетирующего растения, так и от условий окружающей внешней среды.</p>
              <p>Все плоды и овощи делят на три группы:</p>
              <p>
                Плоды, плодовые овощи и ягоды:
                <br />
                плоды:
              </p>
              <p>
                семечковые — яблоки, груши, айва;
                <br />
                косточковые — абрикосы, персики, слива, виш­ня, черешня и др.
              </p>
              <p>
                плодовые овощи (томаты, бахчевые);
                <br />
                ягоды (виноград, земляника, ма­лина, смородина и др.);
                <br />
                Клубни, корнеплоды, луковицы и кочаны;
              </p>
              <p>Листовые овощи.</p>
              <p>Особенностью плодов, плодовых овощей и ягод является послеуборочное созревание, обу­словленное формированием семян за счет пита­тельных веществ околоплодника (мякоти).</p>
              <p>Несмотря на большое видовое разнообразие этой группы общие признаки созревания сход­ны; различие состоит в варьировании продол­жительности созревания — от нескольких дней (земляника, малина и др.) до нескольких ме­сяцев (яблоки, груши).</p>
              <p>Созревание плодов сопровождается следую­щими изменениями: углеводы переходят в более простые соединения. Так, крахмал и другие полисахариды (пектиновые вещества, гемицеллюлоза, целлюлоза) гидролизуются с образова­нием растворимых сахаров.</p>
              <p>Общее содержание сахаров вследствие рас­ходования их на дыхание постепенно уменьшается, при этом соотношение между сахарозой и моносахарами меняется в пользу последних и преобладающим сахаром становится фрук­тоза.</p>
              <p>Характерным признаком созревания плодов является уменьшение содержания органиче­ских кислот и увеличение сахарокислотного ин­декса. В результате гидролиза танинов исче­зает вяжущий вкус плодов. Существенно изменяются содержание и состав летучих веществ, формирующих их вкус и аромат.</p>
              <p>Изменяется состав красящих и кутикулярных веществ. Так, количество хлорофилла уменьшается, а каротиноидов и других пигментов увеличивается. Созревание многих плодов сопровождается накоплением (биосинтезом) этилена, кутикулярных липидов и других соединений. В процессе созревания плодов несколько уменьшается содержание витаминов. В результате водного обмена и испарения влаги уменьшается также содержание влаги.</p>
              <p>Возможные сроки хранения плодов и ягод определяются в первую очередь степенью зрелости, при которой они убраны. Различают две стадии зрелости – съемную и физиологическую (потребительскую).</p>
              <p>Съемная стадия зрелости определяет пригодность плодов для транспортировки на дальние расстояния и закладки на хранение, потребительская – пригодность для использования. К плодам, сбор которых проводят в стадии съемной степени зрелости, относят яблоки, груши, абрикосы, персики, хурму, бананы, помидоры и другие. У некоторых плодов (виноград, вишня, арбузы, цитрусовые, фиговые, ананасы и др.) присутствуют обе степени зрелости.</p>
              <p>Для определения оптимальных сроков сбора пользуются различными показателями зрелости: цвет, твердость, содержание общих растворимых веществ, кислотность, аромат и т.д.</p>
              <p>Биологическая роль клубней, корнеплодов, луковиц и кочанов состоит в образовании семян на втором году жизни. После сбора одни из них (картофель, лук) находятся в стадии глубокого или естественного покоя, во время которого отсутствует прорастание даже при благоприятных условиях окружающей среды (повышенные температура и влажность воздуха); другие (капуста, корнеплоды) – в стадии вынужденного покоя, когда жизнедеятельность искусственно подавлена. В период покоя интенсивность многих физиолого-биохимических процессов овощей этой группы сильно понижена и удерживается примерно на постоянном уровне.</p>
              <p>Биохимические процессы активизируются лишь спустя определенный для каждого вида и сорта период хранения. Окончание периода покоя характеризуется резким подъемом интенсивности дыхания и окислительно-восстановительных процессов, передвижением питательных веществ к ростовым точкам, биосинтезом новых пластических и физиологически активных веществ.</p>
              <p>Листовые овощи с момента сбора никаких биологических функций не выполняют, но, как все листья, они характеризуются развитой поверхностью, слабой водоудерживающей способностью и быстрым увяданием.</p>
              <p>Основным физиологическим процессом, продолжающимся в плодах и овощах после сбора, является дыхание. Интенсивность дыхания и связанных с ним обменных процессов зависит от температуры.</p>
              <p>Теплота дыхания плодов и овощей зависит от сорта, условий выращивания и физиологиче­ского состояния. Она изменяется в различные периоды хранения, что обусловлено в частности климактерическим подъемом дыха­ния, например у яблок, груш, слив, персиков, томатов, или повышением интенсивности дыха­ния при окончании периода покоя у картофеля, лука, капусты.</p>
              <p>Тепловыделение плодов и овощей, период уборки которых приходится на лето и раннюю осень с высокой температурой, вызывают быст­рое самосогревание.</p>
              <p>Другим не менее важным процессом, происходящим в плодах и овощах после сбора, является испарение влаги. Количество испарившейся влаги зависит от свойств плодов и овощей, их влагоудерживающей или испарительной способности.</p>
              <p>С испарением влаги связано не только сни­жение массы плодов и овощей, но и увядание, которое снижает способность к хранению, пита­тельную ценность и ухудшает товарный вид продукции. Заметное увядание плодов насту­пает при потере 4-6% влаги, а ягод и листо­вых овощей, отличающихся слабым влагоудержанием, — при потере 1,5-2%.</p>
              <p>Чтобы затормозить физиолого-биохимиче­ские процессы, предотвратить развитие фитопатогенных микроорганизмов и уменьшить по­тери влаги, плоды и овощи после сбора надо быстро охлаждать (предварительное охлажде­ние).</p>
              <p>Предварительное охлаждение – первое и очень важное звено в общей цепи применения холода. Отсутствие или задержка в охлаждении ягод, косточковых плодов и зеленых овощей исключает возможность краткосрочного хране­ния и транспортировки, а задержка в охлаж­дении более стойких плодов сокращает про­должительность хранения, усиливает предрас­положенность к различным физиологическим заболеваниям.</p>
              <p>Скорости охлаждения плодов и овощей за­висят от их вида. Плоды и овощи, съемная зрелость которых совпадает с потребительской (ягоды, вишня, черешня, огурцы, зеленные ово­щи и т. д.) или наступает через сравнительно короткий период (абрикосы, персики, слива, дыни и др.), должны охлаждаться в течение 1-5 ч до температуры транспортировки или хранения. Плоды, достигающие потребительской зрелости в процессе длительного хранения (зим­ние сорта яблок и груш), можно охлаждать в течение 20-24 ч.</p>
              <p>Плоды и овощи предварительно охлаждают:</p>
              <p>
                в обычных камерах хранения при скорости дви­жения воздуха 1-1,5 м/с и кратности воздухо­обмена 30-40 объемов в час;
                <br />
                в специальных камерах предварительного охлаждения при скорости движения воздуха 3-4 м/с и кратно­сти воздухообмена 60-100 объемов в час;
                <br />
                в аппаратах интенсивного воздушного охлаждения (чаще всего туннельного типа) при скорости движения воздуха до 5 м/с и кратности воздухообмена 100-150 объемов в час;
                <br />
                ледяной водой (методом орошения или погружения в гидроохладителях), вакуум-испарительным охлаждением в специальных аппаратах.
              </p>
              <p>
                Эффективность способов оценивают по продолжительности охлаждения.
                <br />
                Характеристика способов охлаждения плодов и овощей
              </p>
              <table width='632' cellSpacing='0' cellPadding='7' border='1'>
                <colgroup>
                  <col width='178' />
                  <col width='84' />
                  <col width='168' />
                  <col width='144' /> 
                </colgroup>
                <tbody>
                  <tr>
                    <td width='178' height='67'><b>Способ охлаждения</b></td>
                    <td width='84'><b>Кратность циркуляции воздуха, объем в час</b></td>
                    <td width='168'><b>Плоды и овощи</b></td>
                    <td width='144'>
                      <b>Продолжительность половинного охлаждения</b>
                      <sup><b>*</b></sup>
                    </td>
                  </tr>
                  <tr valign='TOP'>
                    <td width='178' height='197'>
                      Воздушное в камере хранения
                      <br />
                      В камере охлаждения
                      <br />
                      В туннельном охладителе
                      <br />
                      Гидроохлаждение погружением
                      <br />
                      орошением
                      <br />
                      Вакуумное
                    </td>
                    <td width='84'>
                      30-40
                      <br />
                      60-100
                      <br />
                      100-150
                      <br />
                      —
                      <br />
                      —
                      <br />
                      —
                    </td>
                    <td width='168'>
                      Яблоки, груши в ящиках; яблоки, груши на поддоне
                      <br />
                      Яблоки, груши в ящиках;
                      <br />
                      Яблоки в ящиках
                      <br />
                      Груши в лотках
                      <br />
                      Персики
                      <br />
                      Дыни (Ø13см)
                      <br />
                      Сельдерей, спаржа
                      <br />
                      Персики
                      <br />
                      Салат
                      <br />
                      Сельдерей
                      <br />
                      Грибы
                    </td>
                    <td width='144'>
                      20-40 ч
                      <br />
                      10-20 ч
                      <br />
                      7-15 ч
                      <br />
                      1 ч
                      <br />
                      14-15 мин
                      <br />
                      20 мин
                      <br />
                      3-5 мин
                      <br />
                      6-7 мин
                      <br />
                      3-4 мин
                      <br />
                      12 мин
                      <br />
                      6-8 мин
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>*Продолжительность половинного охлаждения – это время, в течение которого перепад температуры между продуктом и охлаждающей средой снижается в два раза.</p>
              <p>Наиболее эффективным является охлажде­ние в поточных, конвейерных аппаратах (воз­душные туннельные, гидро- и вакуум-охлади­тели) до загрузки плодов в холодильные каме­ры или транспортные средства.</p>
              <p>Во время транспортировки необходимо соз­дать условия, предотвращающие повышение температуры плодов и конденсацию влаги на их поверхности. Плоды перевозят специализи­рованным транспортом (поезда и секции с ма­шинным охлаждением, автономные рефрижера­торные вагоны и авторефрижераторы).</p>
              <p>В транспортных средствах необходимо под­держивать наиболее благоприятную темпера­туру в зависимости от вида продукции и про­должительности перевозки.</p>

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