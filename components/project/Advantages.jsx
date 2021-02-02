export default function Advantages ({text}) {
  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>

          <h2 className='is-section'>
            <span className='text is-primary'>{text.header[0]}</span>
            {' '}
            {text.header[1]}
          </h2>
	        
        </div>
        <div className='page-section__content'>
          <ul className='grid'>
            <li className='grid__item grid__item-a'>
              <div className='card card-1'>
                <div className='card__title'>
                  <h3 className='in-card'>{text.production[0]}</h3>
                </div>
                <div className='card__header'>
                  <div className='card__image-wrapper'>
                    <div className='card__circle'>
                      <div className='card__circle-inner' />
                    </div>
                    <div className='card__image-inner'>
                      <img className='card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/08/Завод.png' alt='Собственное производство' />
                    </div>
                  </div>
                </div>
                <div className='card__body'>
                  <div className='card__content'>
                    <p>{text.production[1]}</p>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid__item grid__item-b'>
              <div className='card card-2'>
                <div className='card__title'>
                  <h3 className='in-card'>{text.reputation[0]}</h3>
                </div>
                <div className='card__header'>
                  <div className='card__image-wrapper'>
                    <div className='card__circle'>
                      <div className='card__circle-inner' />
                    </div>
                    <div className='card__image-inner'>
                      <img className='card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/08/zalupa.png' alt='Репутация' />
                    </div>
                  </div>
                </div>
                <div className='card__body'>
                  <div className='card__content'>
                    <p>
                    {text.reputation[1]}
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid__item grid__item-c'>
              <div className='card card-3'>
                <div className='card__title'>
                  <h3 className='in-card'>{text.service[0]}</h3>
                </div>
                <div className='card__header'>
                  <div className='card__image-wrapper'>
                    <div className='card__circle'>
                      <div className='card__circle-inner' />
                    </div>
                    <div className='card__image-inner'>
                      <img className='card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/08/card-13.png' alt='Срок службы 70 лет' />
                    </div>
                  </div>
                </div>
                <div className='card__body'>
                  <div className='card__content'>
                    <p>{text.service[1]}</p>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid__item grid__item-d'>
              <div className='card card-4'>
                <div className='card__title'>
                  <h3 className='in-card'>{text.help[0]}</h3>
                </div>
                <div className='card__header'>
                  <div className='card__image-wrapper'>
                    <div className='card__circle'>
                      <div className='card__circle-inner' />
                    </div>
                    <div className='card__image-inner'>
                      <img className='card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/08/card-14.png' alt='Экономия' />
                    </div>
                  </div>
                </div>
                <div className='card__body'>
                  <div className='card__content'>
                    <p>{text.help[1]}</p>
                  </div>
                </div>
              </div>
            </li>
            <li className='grid__item grid__item-e'>
              <div className='card card-5'>
                <div className='card__title'>
                  <h3 className='in-card'>{text.training[0]}</h3>
                </div>
                <div className='card__header'>
                  <div className='card__image-wrapper'>
                    <div className='card__circle is-relative'>
                      <div className='card__circle-inner'><img className='card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/08/card-15.png' alt='Обучение и консультация' /></div>
                    </div>
                    <div className='card__image-inner' />
                  </div>
                </div>
                <div className='card__body'>
                  <div className='card__content'>
                    <p>{text.training[1]}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}