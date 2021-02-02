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
            <h1 className='is-section'>Картофелехранилище</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <h2>Обработка картофеля</h2>
              <p>До начала уборки картофеля картофелехранилища очищают от земли, мусора, остатков клубней; после чего просушивают и дезинфицируют раствором свежегашеной извести (2,5 кг на 8-10 л воды). Затем помещения окуриваются при помощи специальных шашек для борьбы с болезнями и вредителями.</p>
              <p>Проводится заблаговременный профилактический осмотр, дезинфекция и наладка используемого в хранилище вентиляционного и складского оборудования.</p>
              <p>Потери при хранении зависят в значительной степени от состояния поступившего на хранение картофеля. Клубни должны быть здоровыми, чистыми, сухими и созревшими.</p>
              <p>После уборки картофеля его желательно отправить на предварительную сортировку для избежания раздавленных, подмороженных, гнилых, пораженных грибковой плесенью или проросших клубней.</p>
              <h2>Температурные режимы хранения картофеля</h2>
              <p>
                Картофель закладывают на хранение сразу после сборки. В течение 10-15 суток после закладки в картофелехранилище, он проходит «лечебный» период, клубни выдерживают при температуре 12-18
                <sup>о</sup>
                С и высокой относительной влажности воздуха 90-95% для заживления механических поранений и укрепления покровной ткани.
              </p>
              <p>Следует отметить, что чем ниже температура во время процесса заживления повреждений, тем дольше протекает сам процесс. Вентилирование, как правило, ведется рециркуляционным воздухом 6 раз в сутки по 30 минут с равномерными интервалами.</p>
              <p>По истечении этого периода температура должна постепенно снижаться по 0,3-1°С в сутки за период 20-25 суток до требуемой температуры хранения. Овощи при активной вентиляции охлаждаются в возможно короткие сроки (не более 15 суток), независимо от способов охлаждения.</p>
              <p>При поступлении на хранение мокрого картофеля производится осушка продукции с помощью систем вентилирования. Осушка осуществляется, как правило, наружным воздухом. При дождливой погоде осушка осуществляется смесью наружного и внутреннего воздуха. Продолжительность осушки одной партии продукции не должна превышать 3-х суток.</p>
              <p>В практике хранения изменение относительной влажности тесно связано с изменением температуры. Разумно используя суточное изменение относительной влажности воздуха и температуры, вентилируя картофель смесью наружного воздуха с воздухом картофелехранилища, можно успешно поддерживать необходимую относительную влажность. Оптимальные значения 85-95%.</p>
              <h2>Способы размещения картофеля</h2>
              <p>Существует несколько способов размещения:</p>
              <p><img src='https://www.infrost-agro.ru/pub/2010/img73.jpg' alt='склад картофеля' style={{maxWidth: '400px', display: 'block', margin: '10px auto'}} /></p>
              <ul>
                <li>навалом;</li>
                <li>в контейнерах;</li>
                <li>в ящиках;</li>
                <li>в мешках.</li>
              </ul>
              <p>При хранении в мешках или навалом и при отсутствии мер, направленных на предотвращение повреждений нижних слоев, высоту слоя клубней устанавливают в зависимости от плотности клубней, качества партии и условий вентиляции. Максимальная высота складирования при навальном способе 5 м.</p>
              <p>Хранение картофеля в таре более удобно. Оно позволяет полностью механизировать трудоемкие процессы погрузки и выгрузки, облегчает и улучшает условия перевозки, обеспечивает хорошую сохранность картофеля. Ящики следует устанавливать таким образом, чтобы можно было обеспечить свободную циркуляцию воздуха. Ящичные поддоны устанавливают в камере штабелями высотой не более 5,5 м.</p>
              <p>Допускается, учитывая высоту камеры, прочностные характеристики тары, технические характеристики средств механизации и возможности обеспечить условия и режим хранения, увеличить высоту штабеля.</p>
              <p>Вентиляция — очень важное условие для нормального хранения картофеля. В бескислородной среде клубни задыхаются и погибают. Если кислорода недостаточно, чернеет мякоть клубней, прежде всего в сердцевине. С помощью вентиляции регулируют все факторы, влияющие на хранение: температуру, влажность и газовый состав воздуха в хранилище.</p>
              <p>При хранении в таре – общеобменная вентиляция, а при навальном предусматривается активное вентилирование.</p>
              <p>Система активного вентилирования должна обеспечивать подачу в массу продукции наружного или внутреннего воздуха или их смеси требуемой температуры, возможность изменения интенсивности вентилирования в отдельных помещениях хранилища или частях насыпи продукции за счет применения регулирующих устройств.</p>
              <h2>Система вентиляции в картофелехранилище</h2>
              <p>
                В картофелехранилищах система активной вентиляции, в том числе с использованием искусственного холода, должна для поддержания требуемого
                <br />
                температурно-влажностного режима использовать естественный холод в максимально возможной степени.
              </p>
              <p>Воздух в насыпь картофеля подается снизу вверх. Забор наружного и рециркуляционного воздуха регулируются специальными затворами, работа которых автоматизирована. Воздух распространяется по магистральным и напольным каналам.</p>
              <p>
                Система общеобменной вентиляции должна обеспечивать подачу в камеру
                <br />
                картофелехранилища наружного воздуха, полную или частичную рециркуляцию
                <br />
                внутреннего воздуха (при необходимости с искусственным его охлаждением и увлажнением), а также перемешивание воздуха в объеме хранилища.
              </p>
              <p>Температура подаваемого вентиляционного воздуха должна быть на 2-3°С ниже температуры картофеля при его охлаждении или на 2-3°С выше температуры при его отеплении.</p>
              <p>Воздухообмен в камерах осуществляют через вентиляционную систему в первую неделю хранения ежедневно, а в последующий период – через каждые 3 сут. Количество добавляемого наружного воздуха – от 1 до 3 объемов незагруженной камеры в сутки.</p>
              <p><img src='https://www.infrost-agro.ru/pub/2010/img74.jpg' alt='Картофель - 2 фото' style={{maxWidth: '400px', display: 'block', margin: '10px auto'}} /></p>
              <p>
                Рекомендуемая кратность циркуляции в лечебный период и период охлаждения – 50-70 м
                <sup>3</sup>
                /Т*ч, в зависимости от климатической зоны. Циркуляцию воздуха в камере во время охлаждения картофеля осуществляют непрерывно с кратностью 20-30 объемов незагруженной камеры в 1 ч до достижения температуры картофеля не более чем на 1
                <sup> о</sup>
                С выше максимальной температуры воздуха в камере для данного ботанического сорта. Затем периодически по 30 мин с кратностью не более 20 объемов незагруженной камеры в 1 ч при общей продолжительности не более 3 ч в 1 сутки.
              </p>
              <p>В период основного хранения (зимой) циркуляцию снижают на 50% и проводят периодически по 30 мин не более 3 часов в сутки.</p>
              <p>Периодическую циркуляцию осуществляют при отклонении температуры и относительной влажности воздуха от установленных значений.</p>
              <h2>Условия искусственного хранения картофеля</h2>
              <p>
                При температуре хранения ниже 10
                <sup>о</sup>
                С в конце периода хранения до сортировки и упаковки каждую партию картофеля обдувают теплым воздухом, доводя его температуру до +10-+15
                <sup>о</sup>
                С со скоростью 0,5-2
                <sup> о</sup>
                С/сут, а затем при необходимости (для ресинтеза сахаров в крахмал) его выдерживают при этой температуре не более 10 сут.
              </p>
              <table className='wp-block-table'>
                <tbody>
                  <tr>
                    <td><strong>Наименование</strong></td>
                    <td><strong>Значение</strong></td>
                  </tr>
                  <tr>
                    <td><em><strong>Условия искусственного хранения картофеля</strong></em></td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Температура, °С</strong>
                      <br />
                      {' '}
                      — продовольственного
                      <br />
                      {' '}
                      — семенного
                      <br />
                      {' '}
                      — сладкого
                      <br />
                      {' '}
                      — для переработки на крахмал
                      <br />
                      {' '}
                      — для переработки на фри
                      <br />
                      {' '}
                      — для переработки на чипсы
                    </td>
                    <td>
                      {' '}
                      +2…+4
                      <br />
                      {' '}
                      +3…+5
                      <br />
                      {' '}
                      +10…+12
                      <br />
                      {' '}
                      +4…+6
                      <br />
                      {' '}
                      +6…+8
                      <br />
                      {' '}
                      +8…+10
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Относительная влажность, %</strong>
                      <br />
                      {' '}
                      — в период «лечения»
                      <br />
                      {' '}
                      — в период основного хранения
                    </td>
                    <td>
                      {' '}
                      90-95
                      <br />
                      {' '}
                      85-95
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Продолжительность хранения, суток</strong></td>
                    <td>120-365</td>
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