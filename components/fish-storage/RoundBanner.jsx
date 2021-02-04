/* eslint-disable react/prop-types */
export default function RoundBanner ({text}) {
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
                <img className='in-super-circle' src='/img/2019/08/Слой-177.png' alt='Строительство' рыбоперерабатывающих='' комплексов='' и='' рыбных='' цехов='' Камеры='' для='' заморозки='' хранения='' рыбы='' />
              </div>
            </div>
          </div>        
        </div>
      </div>
    </div>
  )
}