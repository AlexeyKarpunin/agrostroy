export default function RoundBanner ({text}) {
  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>
          {text.header[0]} 
            {' '}
            <span className='text is-primary'> {text.header[1]}</span>
          </h2>
        </div>
        <div className='page-section__body'>
          <div className='super-circle is-hangar'>
            <div className='super-circle__inner'>
              <div className='label__list in-super-circle'>
                <div className='label is-label-2' style={{left: '50%', top: '0%'}}>
                  <div className='label__point' />
                  <div className='label__value'>
                    <div className='label__value-inner'> {text.content[0]}</div>
                    <div className='label__value-line'>
                      <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
                        <line x1='0' y1='0' x2='100' y2='100' vectorEffect='non-scaling-stroke' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='label is-label-3' style={{left: '97.55%', top: '34.55%'}}>
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
                <div className='label is-label-9' style={{left: '79.39%', top: '90.45%'}}>
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
                <div className='label is-label-7' style={{left: '20.61%', top: '90.45%'}}>
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
                <div className='label is-label-1' style={{left: '2.45%', top: '34.55%'}}>
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
              </div>
              <div className='super-circle__inner2'>
                <img className='in-super-circle' src='https://agrostroitel.ru/wp-content/uploads/2019/08/klimat-angar-header.png' alt='Климатическое-оборудование' />
              </div>
            </div>
          </div>        
          {' '}
          <div className='dop-list'>      
            <div className='label__list2'>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Принудительная вентиляция</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Автоматический контроль температуры и влажности</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Защита от микроорганизмов, бактерий гниения и плесневых грибков</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Регулировка скорости воздушных потоков</div>     
              </div>
              
              <div className='label__box'>
                <div className='label__point label__point2' />          
                <div className='label__value-inner label__value-inner2'>Климат-контроль</div>     
              </div>
            </div>  
          </div>
          {' '}
      
        </div>
      </div>
    </div>
  )
}