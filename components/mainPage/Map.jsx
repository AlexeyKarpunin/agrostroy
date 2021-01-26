export default function Map ({city, language}) {
  const text = city[language].mainPage.map;
  return (
    <div className='page-section is-fluid'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>
            {text.header[0]}
            {' '}
            <span className='text is-secondary'>{text.header[1]}</span>
          </h2>
        </div>
        <div className='page-section__body'>
          <div className='map' style={{backgroundImage: 'url(https://agrostroitel.ru/wp-content/uploads/2019/08/map.png)'}}>
            <div className='page-section__inner'>
              <div className='super-circle is-map'>
                <div className='super-circle__inner'>
                  <div className='super-circle__inner2'>
                    <img className='in-super-circle' src='https://agrostroitel.ru/wp-content/uploads/2019/08/Карта-e1566477234603.png' alt='карта' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}