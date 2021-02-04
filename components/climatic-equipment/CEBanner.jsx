export default function CEBanner({text}) {
  return (
    <div className='page-section is-main-banner'>
      <div className='banner'>
        <div className='banner__substrate' style={{backgroundImage: 'url(/img/background-banner.png)'}} role='presentation' />
        <div className='banner__notice'>
          <div className='banner__notice-inner'>
            <div className='banner__title'>
              <h1 className='in-banner'>
                <p>
                  <span className='text is-primary'>{text.header[0]}</span>
                  <br />
                  <em className='text is-block'>
                  {text.header[1]}
                    <br />
                    {' '}
                    {text.header[2]}
                    <br />
                    {text.header[3]}
                  </em>
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
            <img src='/img/2019/08/Климатическое-оборудование.png' alt='Климатическое-оборудование' />
          </div>
          <div className='banner__shape' />
        </div>
      </div>
    </div>
  )
}