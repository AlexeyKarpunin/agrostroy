export default function RecBanner({text}) {
  return (
    <div className='page-section is-main-banner'>
      <div className='banner'>
        <div className='banner__substrate' style={{backgroundImage: 'url(https://agrostroitel.ru/wp-content/themes/timber-starter-theme/assets/images/background-banner.png)'}} role='presentation' />
        <div className='banner__notice'>
          <div className='banner__notice-inner'>
            <div className='banner__title'>
              <h1 className='in-banner'>
                <p>
                  <span className='text is-primary'>{text.header[0]}</span>
                  <br />
                  <span className='text is-block'>{text.header[1]}</span> 
                </p>
              </h1>
            </div>
            <div className='banner__content'>
              <p />
              <p>
                <q className='text is-q is-nobr'>{text.content[0]}</q>
                {' '}
                {text.content[1]} 
                {' '}
                <em className='text is-secondary is-bold'>{text.content[2]}</em>
                <br />
                {text.content[3]} 
                {' '}
                <strong className='text is-uppercase is-secondary is-bold'>{text.content[4]}</strong>
              </p>
              <p />
            </div>
            <div className='banner__action'>
              <a className='btn is-primary is-large' href='#call'>
              {text.btn}
              </a>
            </div>
          </div>
        </div>
        <div className='banner__image'>
          <div className='banner__image-inner'>
            <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/reconstruktciya-header.png' alt='Реконструкция зданий и построек из металлоконструкций' />
          </div>
          <div className='banner__shape' />
        </div>
      </div>
    </div>
  )
}