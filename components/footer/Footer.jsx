/* eslint-disable jsx-quotes */
import Link from 'next/link';

export default function Footer ({city, language}){
  const text = city[language].footer;
  
  return (
    <footer className="page-footer">
      <div className="page-footer__body">
        <div className="page-section__inner">
          <div className="column__wrapper in-footer is-valign-center">
            <div className="column is-logo">
              <div className="logo__wrapper">
              <Link href="/"><a className="logo__link"><img className="logo" src="/img/logo.png" alt="Логотип" /></a></Link>  
              </div>
              {' '}
              
            </div>
            <div className="column is-company">
              <div className="company">
                <div className="company__title-wrapper">
                  <div className="company__title">
                    <span className="text is-secondary">{text.logo[0]}</span>
                    <span className="text is-primary">{text.logo[1]}</span>
                  </div>
                </div>
                <p className="company__subtitle">
                  {text.logoText[0]}
                  {' '}
                  <q className="text is-q is-primary is-nobr">{text.logoText[1]}</q>
                </p>
              </div>
              {' '}
              
            </div>
            <div className="column is-call">
              <a href="tel:88005115060" className="call">
                <div className="call__value-inner">
                  <span className="icon is-primary is-large is-phone">
                    <svg>
                      <use xlinkHref="https://agrostroitel.ru/wp-content/themes/timber-starter-theme/assets/images/iconsprites.svg#phone" />
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.077 348.077" id="phone">
                        <path d="M340.273 275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518.744l-27.082 27.076a792.327 792.327 0 0 1-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113-24.704-24.701-37.704-48.144-47.209-65.257-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149 8.936-8.947c11.097-11.1 11.403-28.826.721-39.521L73.39 8.194c-10.682-10.68-28.421-10.356-39.518.744l-15.15 15.237.414.411c-5.08 6.482-9.325 13.958-12.484 22.02C3.74 54.28 1.927 61.603 1.098 68.941-6 127.785 20.89 181.564 93.866 254.541c100.875 100.868 182.167 93.248 185.674 92.876 7.638-.913 14.958-2.738 22.397-5.627 7.992-3.122 15.463-7.361 21.941-12.43l.331.294 15.348-15.029c11.074-11.098 11.393-28.83.716-39.542z" />
                      </svg>
                    </svg>
                  </span>
                  <span className="call__value in-footer">
                    {/* <span className="call__label">Наш телефон:</span> */}
                    <span className="call__numbers">8 800 511 5060</span>
                    <span className="call__action in-footer">

                      {text.call}
	


                    </span>
                  </span>
                </div>
              </a>
              {' '}
              
            </div>
          </div>
        </div>
      </div>
      <div className="page-footer__copyright">
        <div className="page-section__inner">
          <div className="container is-copyright">
            <div className="column__wrapper column__wrapper--bc">
              <div className="column">
                <p>
                  {text.law}
                </p>
              </div>
              <div className="column is-bzcekh" style={{marginRight: '150px', marginTop: '20px'}}>
                <a className="" href="https://bzcekh.ru/" title="Изготовление интернет сайтов в Астрахани">
                  <img className="is-bzcekh" src="/img/logo3.svg" alt="Маркетинговое агентство «Бизнес Цех»" title="Заказать разработку интернет сайта в Астрахани" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="white-popup mfp-hide" id="city-popup">
        <ul className="geo__list">
          <li className="geo__item">
            <a href="https://agrostroitel.ru/?city=default" data-city="default">
              Астрахань
            </a>
          </li>
          <li className="geo__item">
            <a href="https://baksan.agrostroitel.ru/?city=baksan" data-city="baksan">
              Баксан
            </a>
          </li>
          <li className="geo__item">
            <a href="https://budennovsk.agrostroitel.ru/?city=budennovsk" data-city="budennovsk">
              Буденновск
            </a>
          </li>
          <li className="geo__item">
            <a href="https://vladikavkaz.agrostroitel.ru/?city=vladikavkaz" data-city="vladikavkaz">
              Владикавказ
            </a>
          </li>
          <li className="geo__item">
            <a href="https://volgograd.agrostroitel.ru/?city=volgograd" data-city="volgograd">
              Волгоград
            </a>
          </li>
          <li className="geo__item">
            <a href="https://ipatovo.agrostroitel.ru/?city=ipatovo" data-city="ipatovo">
              Ипатово
            </a>
          </li>
          <li className="geo__item">
            <a href="https://krasnodar.agrostroitel.ru/?city=krasnodar" data-city="krasnodar">
              Краснодар
            </a>
          </li>
          <li className="geo__item">
            <a href="https://magas.agrostroitel.ru/?city=magas" data-city="magas">
              Магас
            </a>
          </li>
          <li className="geo__item">
            <a href="https://moscow.agrostroitel.ru/?city=moscow" data-city="moscow">
              Москва
            </a>
          </li>
          <li className="geo__item">
            <a href="https://nalchik.agrostroitel.ru/?city=nalchik" data-city="nalchik">
              Нальчик
            </a>
          </li>
          <li className="geo__item">
            <a href="https://prokhladnyy.agrostroitel.ru/?city=prokhladnyy" data-city="prokhladnyy">
              Прохладный
            </a>
          </li>
          <li className="geo__item">
            <a href="https://pyatigorsk.agrostroitel.ru/?city=pyatigorsk" data-city="pyatigorsk">
              Пятигорск
            </a>
          </li>
          <li className="geo__item">
            <a href="https://rostov.agrostroitel.ru/?city=rostov" data-city="rostov">
              Ростов
            </a>
          </li>
          <li className="geo__item">
            <a href="https://spb.agrostroitel.ru/?city=spb" data-city="spb">
              Санкт-Петербург
            </a>
          </li>
          <li className="geo__item">
            <a href="https://stavropol.agrostroitel.ru/?city=stavropol" data-city="stavropol">
              Ставрополь
            </a>
          </li>
          <li className="geo__item">
            <a href="https://cherkessk.agrostroitel.ru/?city=cherkessk" data-city="cherkessk">
              Черкесск
            </a>
          </li>
          <li className="geo__item">
            <a href="https://elista.agrostroitel.ru/?city=elista" data-city="elista">
              Элиста
            </a>
          </li>
        </ul>
      </div> */}
    </footer>
  )
}