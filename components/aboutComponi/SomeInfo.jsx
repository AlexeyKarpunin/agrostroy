export default function SomeInfo ({text}) {
  return (
    <div className='page-section with-background'>
      <div className='page-section__inner'>
        <div className='column__wrapper is-valign-center align-left'>
          <div className='column md-4'>
            <div className='img-circle'>
              <div className='img-circle__inner'><img src='https://agrostroitel.ru/wp-content/themes/timber-starter-theme/assets/images/someimg.png' alt='' /></div>
            </div>
          </div>
          <div className='column md-5'>
            <h3 className='text is-bold is-big'>
              {text.header}
            </h3>
            <p>
              {text.content}
            </p>
	                
          </div>
        </div>
      </div>
    </div>
  )
}