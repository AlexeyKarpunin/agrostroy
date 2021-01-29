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
            <h1 className='is-section'>Хранение лука</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <h2>Как хранят лук?</h2>
              <p>Закладывают на хранение сорта с хорошей генетически обусловленной лежкостью. Выкопанный лук оставляют в поле на 1-2 недели для дозревания и просушки, затем лук проходит послеуборочную обработку (отделение от земли, сорных примесей, мелких фракций, отминка листьев), далее направляется на сушку и прогревание.</p>
              <p>Лежкоспособность лука зависит также от его вызревания. Полное вызревание лука характеризуется наличием сухих кроющих чешуй, усыханием листьев и шейки, высоким содержанием сахарозы и моносахаров. Такой лук хранится дольше и меньше поражается болезнями.</p>
              <p>Частично заболевший лук можно оздоровить. Для этого снимается слой чешуек до чистой луковицы, в процессе хранения луковица вновь покроется сухими чешуйками.</p>
              <p>Лук всех генераций без листьев, непосредственно после уборки, необходимо просушить вентиляционным воздухом с расходом не менее 200 м/Т*ч при температуре +25…+30°С до влажности наружных чешуй 14-16%. Продолжительность просушки не должна превышать 72 часов.</p>
              <p>Лук-севок, лук-выборок и лук-матку после просушивания прогревают при температуре +45…+47°С в течение 10-12 часов. Просушку и прогрев лука проводят партиями по мере загрузки хранилища.</p>
              <p><img src='https://www.infrost-agro.ru/pub/2010/img77.jpg' alt='Связка лука' style={{maxWidth: '400px', display: 'block', margin: '10px auto'}} /></p>
              <p>Допускается осушку продовольственного лука проводить наружным воздухом, подогретым на +3…+5°С. Продолжительность осушки не более 8 суток при подаче в насыпь не менее 250 м/Т*ч.</p>
              <p>Просушивание лука с листьями проводится при температуре вентиляционного воздуха +30…+35°С при интенсивности вентилирования не менее 350 м/Т*ч.</p>
              <p>Лук-севок и лук-выборок после прогревания охлаждают в два этапа: в начале до +18…+25°С, а затем при наступлении устойчивых наружных отрицательных температур — до температуры хранения. В хранилищах продовольственного лука, оснащенных холодильными установками, охлаждение ведется сразу до заданных значений температур.</p>
              <p>Лук, предназначенный для хранения, должен быть зрелым и хорошо просушенным.</p>
              <h3>Способы размещения лука в хранилище</h3>
              <p>Существуют несколько способов размещения репчатого лука в хранилище:</p>
              <ul>
                <li>навалом;</li>
                <li>в ящиках;</li>
                <li>в контейнерах;</li>
                <li>в лотках;</li>
                <li>в мешках.</li>
              </ul>
              <p>
                При навальном хранении лук размещают слоем 2…4 м, при активном вентилировании (удельная подача воздуха 150 м
                <sup>3</sup>
                /Т*ч, температура 30°С) его просушивают в течение 5-10 суток, в зависимости от исходной влажности чешуи.
              </p>
              <p>При хранении лука россыпью хранилища оборудуют системой механической вытяжной вентиляции.</p>
              <p>Лук-севок размещают в ящиках-лотках, которые устанавливают в штабели высотой 2 м и больше. В такой таре лук хорошо проветривается.</p>
              <p>
                При хранении лука-матки удобнее использовать тару большой вместимости – ящики со щелями на 20-25 кг. На стандартном поддоне устанавливают по 20 ящиков и формируют грузовые пакеты массой 400-500 кг. При помощи
                <br />
                электропогрузчика формируют штабель пакетов в 3-4 яруса.
              </p>
              <p>Маточный и продовольственный лук можно также хранить в решетчатых ящиках емкостью до 25—30 кг, а также в открытых лотках.</p>
              <p>Высушенный лук продовольственного назначения хранят в контейнерах на 180-200 кг, устанавливаемых в хранилищах штабелем по 4-5 в высоту.</p>
              <p>Хорошо хранится лук в мешках из толстого полиэтилена на 35-40 кг. Открытые мешки устанавливают вертикально на стоечные поддоны, которые ставят электропогрузчиком в камерах хранения в 4-5 ярусов.</p>
              <h3>Вентиляция при хранении лука</h3>
              <p>
                Во время хранения лука нужно следить, чтобы в хранилище не было застойного воздуха, в котором скапливается углекислота, выделяемая при дыхании лука, что также ухудшает условия хранения. Поэтому хранилище
                <br />
                целесообразно оборудовать системой вентиляции и регулировать ее работу.
              </p>
              <p>
                Перемешивание воздуха в закрытом пространстве позволяет обеспечить равномерность температуры и относительной влажности. Рекомендуемая кратность циркуляции – 100-150 м
                <sup>3</sup>
                /Т*ч, в зависимости от климатической зоны. В период основного хранения (зимой) циркуляцию снижают на 50%.Периодическую циркуляцию осуществляют при отклонении температуры и относительной влажности воздуха от установленных значений.
              </p>
              <p>
                С воздухообменом в хранилищах связана возможная конденсация влаги на
                <br />
                овощах, которая может вызывать заболевание овощей и их гниение.
              </p>
              <p>Температура воздуха, подаваемого в насыпь хранимой продукции, должна быть ниже температуры в насыпи не менее чем на 1 °С.</p>
              <p>
                Для успешного хранения лука важно поддерживать определенную температуру и относительную влажность. Температура воздуха в хранилище выше рекомендуемых значений хранения ускоряет процесс дыхания лука, что
                <br />
                вызывает потери массы; температура ниже рекомендуемых значений приводит к подмораживанию продукции и дальнейшей её порче.
              </p>
              <p>Низкая относительная влажность и высокая температура воздуха в хранилище ведет к потерям сравнительно большого количества воды, что увеличивает естественную убыль и ухудшает качество продукции. Высокая влажность воздуха способствует быстрому выходу лука из состояния покоя, а также ак­тивизируется развитие плесени и болезней.</p>
              <p>Наиболее благоприятные условия хранения лука при температуре минус 3…минус 1°С и относительной влажности воздуха 70-80%. Лук не любит резких колебаний температуры и влажности.</p>
              <h3>&nbsp; Температурные режимы хранения лука</h3>
              <p>Существует 3 способа хранения лука различных температурных режимов:</p>
              <p><img src='https://www.infrost-agro.ru/pub/2010/img78.jpg' alt='Лук - фото 2' style={{maxWidth: '400px', display: 'block', margin: '10px auto'}} /></p>
              <ul>
                <li>холодный;</li>
                <li>теплый;</li>
                <li>комбинированный (холодно-теплый).</li>
              </ul>
              <p>
                {' '}
                При
                <strong>холодном способе</strong>
                {' '}
                продовольственный лук хранят при температуре минус 3…0°С. Интенсивность дыхания и общие потери при таких условиях наименьшие.
                <br />
                {' '}
                При
                <strong>теплом способе</strong>
                {' '}
                лук хранят в основной период при температуре +18…+22°С и относительной влажности воздуха 60-70%.
                <br />
                {' '}
                При
                <strong>холодно-теплом способе</strong>
                :осенью до наступления устойчивых холодов в хранилище поддерживают температуру +18…+22°С, затем лук охлаждают и хранят при температуре минус 3…0°С. В оттепель и весной лук переводят на теплый способ хранения. Комбинированный способ более экономичен, чем теплый.
              </p>
              <table className='wp-block-table'>
                <tbody>
                  <tr>
                    <td><strong>Продукция</strong></td>
                    <td><strong>Температура в массе продукции, °С</strong></td>
                    <td><strong>Относительная влажность воздуха, %</strong></td>
                    <td><strong>Расчетный срок хранения, сут</strong></td>
                  </tr>
                  <tr>
                    <td>Лук-репка продовольственный</td>
                    <td>-3…0</td>
                    <td>70-80</td>
                    <td>270</td>
                  </tr>
                  <tr>
                    <td>Лук-матка</td>
                    <td>+3</td>
                    <td>60-80</td>
                    <td>240</td>
                  </tr>
                  <tr>
                    <td>Лук-порей</td>
                    <td>0</td>
                    <td>90-95</td>
                    <td>60-90</td>
                  </tr>
                  <tr>
                    <td>Лук-севок, лук-выборок</td>
                  </tr>
                  <tr>
                    <td>-теплый способ хранения</td>
                    <td>+18…+22</td>
                    <td>50-70</td>
                    <td>240</td>
                  </tr>
                  <tr>
                    <td>-холодный способ хранения</td>
                    <td>-3…0</td>
                    <td>70-80</td>
                    <td>240</td>
                  </tr>
                  <tr>
                    <td>-тепло-холодный способ хранения</td>
                    <td>+18…+22</td>
                    <td>50-70</td>
                    <td>120</td>
                  </tr>
                  <tr>
                    <td>-3…0</td>
                    <td>70-80</td>
                    <td>90</td>
                  </tr>
                </tbody>
              </table>
              <p>Перед реализацией после хранения при минусовой температуре лук должен быть дефростирован в течение 2-5 дней при температуре 0±0,5°С и реализован в течение 10 дней. Кроме того, холодный лук в теплом помещении отпотевает и начинается развитие болезней.</p>
              <h3><strong>Полезные свойства лука</strong></h3>
              <p><img src='https://www.infrost-agro.ru/pub/2010/img79.jpg' alt='Луковицы' style={{maxWidth: '400px', display: 'block', margin: '10px auto'}} /></p>
              <ul>
                <li>Лук содержит большое количество минеральных солей, витаминов.</li>
                <li>Употребление в пищу лука очень полезно при атеросклерозе и болезнях сердца.</li>
                <li>Вдыхать запах разрезанного лука полезно для очищения закупорок в мозгу.</li>
                <li>Фитонциды лука используются при лечении гриппозного насморка и предупреждении гриппа, фитонциды лука вдыхают при ангинах и нагноительных процессах в легких.</li>
                <li>
                  Постоянное употребление
                  <strong>лука</strong>
                  {' '}
                  способствует уменьшению содержания холестерина в крови.
                </li>
                <li>
                  Больным сахарным диабетом рекомендуется употреблять суп из печеного
                  <strong>лука, так как </strong>
                  он обладает сахаропонижающими свойствами.
                </li>
                <li>Кашица из свежего лука, приложенная к ожогам, снимает боль, уменьшает раздражение кожи и препятствует образованию пузырей.</li>
                <li>
                  Луковая кашица, сок
                  <strong>лука и отвар </strong>
                  укрепляют волосы и способствуют их быстрому отрастанию.
                </li>
                <li>Отваром из луковой шелухи укрепляют кровеносные сосуды благодаря красящим веществам.</li>
                <li>Сухой чешуей луковиц красят пасхальные яйца.</li>
                <li>Разрезанной луковицей снимают пятна ржавчины с металлических изделий, например, с ножей, вилок, ложек.</li>
                <li>Луковый сок часто используют в быту для удаления пятен с одежды и обуви.</li>
              </ul>
              <p><strong>Противопоказания:</strong></p>
              <ul>
                <li>Лук противопоказан людям с повышенной кислотностью.</li>
                <li>Злоупотреблять луком не стоит тем, кто имеет тяжелые заболевания почек, печени и желудка (язва желудка или двенадцатиперстной кишки).</li>
              </ul>

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