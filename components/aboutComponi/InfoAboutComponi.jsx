export default function InfoAboutComponi ({text}) {
  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>

            {text.header[0]} 
            {' '}
            <span className='text is-primary'>{text.header[1]} </span>
	
          </h2>
        </div>
        <div className='page-section__body'>
          <div className='column__wrapper'>
            <div className='column'>
              <iframe width='560' height='315' src='https://www.youtube.com/embed/JxgzUyb_oDY' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen='' />
            </div>
            <div className='column'>

              <p>
                <span className='text is-big is-bold is-block'>{text.content[0]}</span>
                {text.content[1]}
              </p>
	                    
              <ul className='column__wrapper'>
                <li className='column'>
                  <strong className='text is-secondary is-super-big is-block'>
                  {text.content[2]}
	
                  </strong>
                  <p>
                  {text.content[3]}
	
                  </p>
                </li>
                <li className='column'>
                  <strong className='text is-secondary is-super-big is-block'>
                  {text.content[4]}
	
                  </strong>
                  <p>
                  {text.content[5]}
                  </p>
                </li>
              </ul>
              <div className='column__wrapper' style={{marginTop: '5rem'}}>
                <div className='column'>
                  <p>
                  {text.content[6]}

                  </p>
                </div>
                <div className='column' style={{flex: 'none'}}><img src='/img/zalupa.png' alt='part of map' /></div>
              </div>
            </div>
          </div>
          <div className='content'>
            <p className='text is-big is-bold is-reset-offsets'>
            {text.servisesHeader}

            </p>

            <ol className='with-circle'>
              <li>
               {text.servises[0]}
              </li>
              <li>{text.servises[0]}</li>
              <li>{text.servises[0]}</li>
              <li>{text.servises[0]}</li>
              <li>
                {text.servises[0]}
              </li>
            </ol>
	                
          </div>
        </div>
      </div>
    </div>
  )
}