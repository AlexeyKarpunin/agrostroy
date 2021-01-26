export default function ExpBilding ({city, language}) {
  const text = city[language].mainPage.expBilding
  
  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>
            {text.header[0]}
            <span className='text is-block is-primary'>{text.header[1]}</span>
          </h2>
        </div>
        <div className='page-section__body'>
          <div className='column__wrapper is-card is-list sm-6 md-3'>
            <div className='column'>
              <a href='https://agrostroitel.ru/stroitelstvo-angarov-i-skladov/sborno-razbornye-angary/'>
                <figure className='figure-card is-card-1'>
                  <div className='figure-card__header'>
                    <img className='figure-card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/08/bezkarkasnik-header.png' alt='Производство и монтаж сборно-разборных ангаров в Астрахани' />
                    <div className='circle is-double in-figure' />
                  </div>
                  <figcaption className='figure-card__figcaption'>
                    <h3 className='is-figure'>{text.list[0]}</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='column'>
              <a href='https://agrostroitel.ru/stroitelstvo-angarov-i-skladov/stroitelstvo-karkasnih-angarov/'>
                <figure className='figure-card is-card-2'>
                  <div className='figure-card__header'>
                    <img className='figure-card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/08/2-1.png' alt='Строительство каркасных ангаров в Астрахани' />
                    <div className='circle is-double in-figure' />
                  </div>
                  <figcaption className='figure-card__figcaption'>
                    <h3 className='is-figure'>{text.list[1]}</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='column'>
              <a href='https://agrostroitel.ru/%d1%85%d0%be%d0%bb%d0%be%d0%b4%d0%b8%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%ba%d0%b0%d0%bc%d0%b5%d1%80%d1%8b-%d0%b8-%d1%81%d0%ba%d0%bb%d0%b0%d0%b4%d1%8b/'>
                <figure className='figure-card is-card-3'>
                  <div className='figure-card__header'>
                    <img className='figure-card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/09/Холодильные-камеры.png' alt='Строительство холодильных складов (промышленные холодильники) из металлоконструкций в Астрахани' />
                    <div className='circle is-double in-figure' />
                  </div>
                  <figcaption className='figure-card__figcaption'>
                    <h3 className='is-figure'>{text.list[2]}</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='column'>
              <a href='https://agrostroitel.ru/stroitelstvo-hranilish/stroitelstvo-ovoshehranilish-pod-kluch/'>
                <figure className='figure-card is-card-4'>
                  <div className='figure-card__header'>
                    <img className='figure-card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/09/Овощехранилища.png' alt='Строительство овощехранилищ в Астрахани' />
                    <div className='circle is-double in-figure' />
                  </div>
                  <figcaption className='figure-card__figcaption'>
                    <h3 className='is-figure'>{text.list[3]}</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='column'>
              <a href='https://agrostroitel.ru/stroitelstvo-hranilish/stroitelstvo-zernohranilish-pod-kluch/'>
                <figure className='figure-card is-card-5'>
                  <div className='figure-card__header'>
                    <img className='figure-card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/08/Хлеб-1.png' alt='Строительство Зернохранилищ «под ключ» в Астрахани' />
                    <div className='circle is-double in-figure' />
                  </div>
                  <figcaption className='figure-card__figcaption'>
                    <h3 className='is-figure'>{text.list[4]}</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='column'>
              <a href='https://agrostroitel.ru/stroitelstvo-hranilish/stroitelstvo-fruktohranilish-pod-kluch/'>
                <figure className='figure-card is-card-6'>
                  <div className='figure-card__header'>
                    <img className='figure-card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/09/Фруктохранилища.png' alt='Строительство Фруктохранилищ «под ключ» в Астрахани' />
                    <div className='circle is-double in-figure' />
                  </div>
                  <figcaption className='figure-card__figcaption'>
                    <h3 className='is-figure'>{text.list[5]}</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='column'>
              <a href='https://agrostroitel.ru/metallokonstrukcii/'>
                <figure className='figure-card is-card-7'>
                  <div className='figure-card__header'>
                    <img className='figure-card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/08/Слой-173.png' alt='Металлоконструкции' />
                    <div className='circle is-double in-figure' />
                  </div>
                  <figcaption className='figure-card__figcaption'>
                    <h3 className='is-figure'>{text.list[6]}</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className='column'>
              <a href='https://agrostroitel.ru/stroitelstvo-hranilish/stroitelstvo-skladov-hraneniye-pererabotka-rybi/'>
                <figure className='figure-card is-card-8'>
                  <div className='figure-card__header'>
                    <img className='figure-card__image' src='https://agrostroitel.ru/wp-content/uploads/2019/09/Рыба.png' alt='Строительство рыбоперерабатывающих комплексов и рыбных цехов. Камеры для заморозки и хранения рыбы' />
                    <div className='circle is-double in-figure' />
                  </div>
                  <figcaption className='figure-card__figcaption'>
                    <h3 className='is-figure'>{text.list[7]}</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 