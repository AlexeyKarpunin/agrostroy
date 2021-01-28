import StoreSlaider from './StoreSlaider';

export default function StorageInfo () {

const options = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true,
    margin:10,
    autoplayTimeout:5000
};

const events = {
  onDragged(event) {},
  onChanged(event) {}
};

  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>Строительство хранилищ в Астрахани «под ключ»</h2>
        </div>
        <div className='page-section__body'>
          <div className='other-page-section'>
            <p>Строительство хранилищ в Астрахани «под ключ», быстро, качественно и в срок. Гарантия на все работы.</p>
            <p>Компания «АгроСтроительЮг» изготавливает строения для сельского хозяйства, в частности, хранилища из металлоконструкций, сборные конструкции ЛСТК, каркасные и бескаркасные ангары в Астрахани.</p>
            <hr />
            <h3>Овоще- и Фрукто- хранилище, Элиста, Республика Калмыкия</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <p>Высокие эксплуатационные характеристики, срок службы до 75 лет, многообразие форм, конструкций, возможность утепления, установки холодильного оборудования, герметичность и удовлетворяющие санитарно-гигиенические характеристики, предотвращающие порчу урожая – все эти качества делают хранилища из металлоконструкций идеальным вариантом для строительства. </p>
            <p>Наши проектировщики тщательно рассчитывают каждый элемент, оптимизируют расходы на материалы. Фундамент для постройки такого типа требуется облегченный. Все это приводит к сокращению времени строительства, а значит, и приступить к ведению бизнеса вы сможете в короткие сроки.</p>
            <hr />
            <h3>Овощехранилище — 20 x 73.8 м. «ИРРИКО», Ставропольский край, Ипатовский район</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <p>Проектирование и монтаж осуществляется таким образом, чтобы разгрузка, хранение урожая и обслуживание с/х техники осуществлялись наилучшим, удобным способом. </p>
            <hr />
            <h3 className='font_2'>Зернохранилище «Волга-порт», вторая линия, Астраханская область.</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}