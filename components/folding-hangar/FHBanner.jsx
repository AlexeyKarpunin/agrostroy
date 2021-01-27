export default function FHBanner() {
  return (
    <div className='page-section is-main-banner'>
      <div className='banner'>
        <div className='banner__substrate' style={{backgroundImage: 'url(https://agrostroitel.ru/wp-content/themes/timber-starter-theme/assets/images/background-banner.png)'}} role='presentation' />
        <div className='banner__notice'>
          <div className='banner__notice-inner'>
            <div className='banner__title'>
              <h1 className='in-banner'>
                <p>
                  <span className='text is-primary'>Изготавливаем</span>
                  <br />
                  <em className='text is-block'>Сборно-разборные склады и помещения</em>
                  <em className='text is-block'>в Астрахани</em>
                </p>
              </h1>
            </div>
            <div className='banner__content'>
              <p />
              <p>
                <q className='text is-q is-nobr'>Под ключ</q>
                {' '}
                от 
                {' '}
                <em className='text is-secondary is-bold'>30 дней</em>
                <br />
                дизайн-проект 
                {' '}
                <strong className='text is-uppercase is-secondary is-bold'>бесплатно</strong>
              </p>
              <p />
            </div>
            <div className='banner__action'>
              <a className='btn is-primary is-large' href='#call'>
                Расчитать стоимость
              </a>
            </div>
          </div>
        </div>
        <div className='banner__image'>
          <div className='banner__image-inner'>
            <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/bezkarkasnik-header.png' alt='Производство и монтаж сборно-разборных ангаров в Астрахани' />
          </div>
          <div className='banner__shape' />
        </div>
      </div>
    </div>
  )
}