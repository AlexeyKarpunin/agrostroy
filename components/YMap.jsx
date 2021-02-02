import { useEffect } from 'react';

export default function YMap ({text}) {

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
          <h2 className='is-section'>{text.header}</h2>
        </div>
        <div className='page-section__body'>
          <div className='container__img is-rounded'>
            <p>
              <b>{text.phone[0]}</b>
              {' '}
              {text.phone[1]}
              <br />
              <b>{text.mail[0]}</b>
              {' '}
              {text.mail[1]}
              <br />
              <b>{text.address[0]}</b>
              {' '}
              {text.address[1]}
            </p>
            
            {/* <p>
              <blockquote>
                <p style={{paddingLeft: '30px'}}><span style={{color: '#ff6600'}}><strong>Отправьте нам заявку на предварительный рассчет стоимости Вашего будущего строительства!</strong></span></p>
              </blockquote>
            </p>
            
             */}

            <div id='map' style={{height: '417px'}} />
      
          </div>
          
        </div>
      </div>
    </div>
  )
}