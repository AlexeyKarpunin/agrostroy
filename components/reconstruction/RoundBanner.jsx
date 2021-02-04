export default function RoundBanner({text}) {
  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>
            {text.header[0]} 
            {' '}
            <em className='text is-primary is-secondary'>{text.header[1]}</em>
            {' '}
            {text.header[2]}
          </h2>
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
                <div className='label is-label-3' style={{left: '93.3%', top: '25%'}}>
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
                <div className='label is-label-9' style={{left: '93.3%', top: '75%'}}>
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
                <div className='label is-label-8' style={{left: '50%', top: '100%'}}>
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
                <div className='label is-label-7' style={{left: '6.7%', top: '75%'}}>
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
                <div className='label is-label-1' style={{left: '6.7%', top: '25%'}}>
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
              </div>
              <div className='super-circle__inner2'>
                <img className='in-super-circle' src='/img/2019/08/new-angar-header.png' alt='Реконструкция' зданий='' и='' построек='' из='' металлоконструкций='' />
              </div>
            </div>
          </div>        
          {' '}
          <div className='dop-list'>      
            <div className='label__list2'>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Экономия средств</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Готовый фундамент</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Отсутствие необходимости демонтажа</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Не нужно разрешительных документов</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Нет необходимости переезда</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Сохранение фактического адреса</div>     
              </div>
            </div>  
          </div>
          {' '}
      
        </div>
      </div>
    </div>
  )
}