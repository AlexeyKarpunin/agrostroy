export default function RoundBanner ({text}) {
  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section' />
        </div>
        <div className='page-section__body'>
          <div className='super-circle is-hangar'>
            <div className='super-circle__inner'>
              <div className='label__list in-super-circle'>
                <div className='label is-label-2' style={{left: '50%', top: '0%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.content[0]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-3' style={{left: '89.4%', top: '19.22%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.content[1]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-9' style={{left: '98.91%', top: '60.4%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.content[2]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-9' style={{left: '71.92%', top: '94.94%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.content[3]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-7' style={{left: '28.87%', top: '95.32%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.content[4]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-7' style={{left: '1.28%', top: '61.25%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.content[5]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-1' style={{left: '10.6%', top: '19.22%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'>{text.content[6]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className='super-circle__inner2'>
                <img className='in-super-circle' src='/img/2019/08/Ангар.png' alt='Строительство' ангаров='' и='' складов='' />
              </div>
            </div>
          </div>        
          {' '}
          <div className='dop-list'>      
            <div className='label__list2'>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Защита от злоумышленников</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Защита от воздействия окружающей среды</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Наличие дополнительных помещенй и кабинетов</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Пожарные сигнализации и системы пожаротушения</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Автоматические ворота</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Видеонаблюдение</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Регулируемый температурный режим</div>     
              </div>
            </div>  
          </div>
          {' '}
      
        </div>
      </div>
    </div>
  )
}