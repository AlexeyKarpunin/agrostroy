import { useEffect } from 'react';

export default function YMap () {

  useEffect(() => {
    
    const {ymaps} = window;

    function init() {
      const myMap = new ymaps.Map('map', {
              center: [46.350146, 48.037410],
              zoom: 12
          }, {
              searchControlProvider: 'yandex#search'
          });
          
      myMap.geoObjects
          .add(new ymaps.Placemark([46.350146, 48.037410], {
              balloonContent: 'Россия, Астрахань, улица Кирова, 19' 
          }, {
              preset: 'islands#icon',
              iconColor: '#0095b6'
          }))
  }
  

    ymaps.ready(init);
  }, [])

  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>Контакты компании «АгроСтроитель Юг» в Астрахани</h2>
        </div>
        <div className='page-section__body'>
          <div className='container__img is-rounded'>
            <p>
              <b>Телефон:</b>
              {' '}
              8 800 511 50 60
              <br />
              <b>Email:</b>
              {' '}
              ug@fabricant.ru
              <br />
              <b>Адрес:</b>
              {' '}
              г. Астрахань, ул. Кирова, 19
            </p>
            {/* <p>
              <blockquote>
                <p style={{paddingLeft: '30px'}}><span style={{color: '#ff6600'}}><strong>Отправьте нам заявку на предварительный рассчет стоимости Вашего будущего строительства!</strong></span></p>
              </blockquote>
            </p>
            
             */}
            {/* <YMaps>
              <Map state={mapData} width={1162} height={417}>
                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
              </Map>
            </YMaps> */}

            <div id='map' style={{height: '417px'}} />
      
          </div>
          
        </div>
      </div>
    </div>
  )
}