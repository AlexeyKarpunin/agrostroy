export default function WorkWithUs ({city, language}) {
  const text = city[language].mainPage.workWithUs;
  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>

            {text.header[0]}
            {' '}
            <span className='text is-secondary'>{text.header[1]}</span>
    
          </h2>
        </div>
        <div className='page-section__body'>
          <div className='super-circle is-hangar'>
            <div className='super-circle__inner'>
              <div className='label__list in-super-circle'>
                <div className='label is-label-2' style={{left: '50%', top: '0%;'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.list[0]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-3' style={{left: '93.3%', top: '25%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.list[1]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-9' style={{left: '93.3%', top: '75%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.list[2]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-8' style={{left: '50%', top: '100%;'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.list[3]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-7' style={{left: '6.7%', top: '75%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.list[4]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-1' style={{left: '6.7%', top: '25%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.list[5]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='super-circle__inner2'>
                <img className='in-super-circle' src='https://agrostroitel.ru/wp-content/uploads/2019/08/angars.png' alt='Ангары' />
              </div>
            </div>
          </div>        
          {' '}
          <div className='dop-list'>      
            <div className='label__list2'>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Опыт строительства более 10 лет</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Репутация надежного подрядчика</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Более 180 выполненных проектов</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Объекты в городах ЮФО</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Работаем с СНГ</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Консультации и обслуживание после сдачи объекта</div>     
              </div>
            </div>  
          </div>
          {' '}
      
        </div>
      </div>
    </div>
  )
}