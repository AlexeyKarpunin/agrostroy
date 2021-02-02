/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {giveUserCity} from '../../../redux/actions'
import cities from '../../../cities/citiesNames';
import { useEffect } from 'react';

export default function ModalChooseCities (props) {
  const {closeModal} = props;
  const dispatch = useDispatch();

  function changeCity(e) {
    e.preventDefault();
    const city = e.target.getAttribute('data-city');
    dispatch(giveUserCity(city));
    localStorage.setItem('city', city);
    closeModal();
  }

  return (
    <div className='mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready' tabIndex='-1'>
      <div className='mfp-container mfp-s-ready mfp-inline-holder'>
        <div className='mfp-content'>
          <div className='white-popup' id='city-popup'>
            <ul className='geo__list'>
              <li onClick={changeCity} className='geo__item'>
                <a href='/' data-city='default'>
                  Астрахань
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://baksan.agrostroitel.ru/?city=baksan' data-city={cities.baksan}>
                  Баксан
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://budennovsk.agrostroitel.ru/?city=budennovsk' data-city={cities.budennovsk}>
                  Буденновск
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://vladikavkaz.agrostroitel.ru/?city=vladikavkaz' data-city={cities.vladikovkaz}>
                  Владикавказ
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://volgograd.agrostroitel.ru/?city=volgograd' data-city={cities.volgograd}>
                  Волгоград
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://ipatovo.agrostroitel.ru/?city=ipatovo' data-city={cities.ipatovo}>
                  Ипатово
                </a>
              </li>
              <li onClick={changeCity} className='geo__item' >
                <a href='/' data-city={cities.krasnodar}>Краснодар</a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://magas.agrostroitel.ru/?city=magas' data-city={cities.magas}>
                  Магас
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://moscow.agrostroitel.ru/?city=moscow' data-city={cities.moscow}>
                  Москва
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://nalchik.agrostroitel.ru/?city=nalchik' data-city={cities.nalchik}>
                  Нальчик
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://prokhladnyy.agrostroitel.ru/?city=prokhladnyy' data-city={cities.prokhladnyy}>
                  Прохладный
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://pyatigorsk.agrostroitel.ru/?city=pyatigorsk' data-city={cities.pyatigorsk}>
                  Пятигорск
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://rostov.agrostroitel.ru/?city=rostov' data-city={cities.rostov}>
                  Ростов
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://spb.agrostroitel.ru/?city=spb' data-city={cities.saintPetersburg}>
                  Санкт-Петербург
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://stavropol.agrostroitel.ru/?city=stavropol' data-city={cities.stavropol}>
                  Ставрополь
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://cherkessk.agrostroitel.ru/?city=cherkessk' data-city={cities.cherkessk}>
                  Черкесск
                </a>
              </li>
              <li onClick={changeCity} className='geo__item'>
                <a href='https://elista.agrostroitel.ru/?city=elista' data-city={cities.elista}>
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