export default function TakeUs({text}) {
  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>
            <span className='text is-secondary'>{text.header[0]}</span>
            {' '}
            {text.header[1]}
          </h2>
        </div>
        <div className='page-section__body'>
          <div className='column__wrapper column__wrapper--about--reverse'>
            <div className='column'>
              <h3 className='text is-bold is-big'>{text.reasonOne[0]}</h3>
              <p>
                {text.reasonOne[1]}
                {' '}
              </p>
              <h3 className='text is-bold is-big'>{text.reasonTwo[0]}</h3>
              <p>
              {text.reasonTwo[1]}
              </p>
	                    
            </div>
            <div className='column'>
              <div className='container__img is-rounded'><img src='/img/section-pict.jpg' alt='' /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}