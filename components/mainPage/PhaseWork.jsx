export default function PhaseWork ({city, language}) {
  const text = city[language].mainPage.phaseWork;
  return (
    <div className='page-section step-works'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>
            {text.header[0]}
            {' '}
            <span className='text is-secondary'>{text.header[1]}</span>
              
          </h2>
        </div>
        <div className='page-section__body'>
          <div className='column__wrapper is-list xs-none md-6'>
            {text.list.map( (text, index) => (
              <div className='column' key={index}>
                <div className='mini-card'>
                  <div className='mini-card__number'>{index + 1 === 10 ? index + 1 : `0${  index + 1 }`}</div>
                  <div className='mini-card__header'>
                    <img className='mini-card__image' src={`/img/2019/08/${index + 1}.png`} alt='Консультация с менеджером' />
                    <div className='circle is-double in-mini-card' />
                  </div>
                  <div className='mini-card__body'>{text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}