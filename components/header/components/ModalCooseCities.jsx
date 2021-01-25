import PropTypes from 'prop-types';
import Link from 'next/link';

export default function ModalChooseCities (props) {
  const {closeModal} = props;

  return (
    <div className='mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready' tabIndex='-1'>
      <div className='mfp-container mfp-s-ready mfp-inline-holder'>
        <div className='mfp-content'>
          <div className='white-popup' id='city-popup'>
            <ul className='geo__list'>
              <li className='geo__item'>
                <a href='https://agrostroitel.ru/?city=default' data-city='default'>
                  Астрахань
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://baksan.agrostroitel.ru/?city=baksan' data-city='baksan'>
                  Баксан
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://budennovsk.agrostroitel.ru/?city=budennovsk' data-city='budennovsk'>
                  Буденновск
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://vladikavkaz.agrostroitel.ru/?city=vladikavkaz' data-city='vladikavkaz'>
                  Владикавказ
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://volgograd.agrostroitel.ru/?city=volgograd' data-city='volgograd'>
                  Волгоград
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://ipatovo.agrostroitel.ru/?city=ipatovo' data-city='ipatovo'>
                  Ипатово
                </a>
              </li>
              <li className='geo__item'>
                <Link href='/?city=Krasnodar'>
                  <a data-city='krasnodar'>
                    Краснодар
                  </a>
                </Link>
              </li>
              <li className='geo__item'>
                <a href='https://magas.agrostroitel.ru/?city=magas' data-city='magas'>
                  Магас
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://moscow.agrostroitel.ru/?city=moscow' data-city='moscow'>
                  Москва
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://nalchik.agrostroitel.ru/?city=nalchik' data-city='nalchik'>
                  Нальчик
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://prokhladnyy.agrostroitel.ru/?city=prokhladnyy' data-city='prokhladnyy'>
                  Прохладный
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://pyatigorsk.agrostroitel.ru/?city=pyatigorsk' data-city='pyatigorsk'>
                  Пятигорск
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://rostov.agrostroitel.ru/?city=rostov' data-city='rostov'>
                  Ростов
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://spb.agrostroitel.ru/?city=spb' data-city='spb'>
                  Санкт-Петербург
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://stavropol.agrostroitel.ru/?city=stavropol' data-city='stavropol'>
                  Ставрополь
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://cherkessk.agrostroitel.ru/?city=cherkessk' data-city='cherkessk'>
                  Черкесск
                </a>
              </li>
              <li className='geo__item'>
                <a href='https://elista.agrostroitel.ru/?city=elista' data-city='elista'>
                  Элиста
                </a>
              </li>
            </ul>
            <button onClick={closeModal} title='Close (Esc)' type='button' className='mfp-close'>×</button>
          </div>
        </div>
        <div className='mfp-preloader'>Loading...</div>
      </div>
    </div>
  );
}

ModalChooseCities.propTypes = {
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};