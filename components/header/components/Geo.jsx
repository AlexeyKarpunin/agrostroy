/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Geo (props) {
 const {openModal, language, city} = props;

 const [askCity, setAskCity]= useState('is-hide');
 
 function closeAskWindow() {
   localStorage.setItem('askAboutCity', true);
   setAskCity('is-hide')
  }

 useEffect( () => {
    const ask = localStorage.getItem('askAboutCity');
    if (!ask) setAskCity('is-show');
  }, [])

  return (
    <a className='geo popup-city'>
      <span className='icon is-primary is-geo'>
        <svg>
          <use xlinkHref='/img/iconsprites.svg#geo' />
        </svg>
      </span>
      <span onClick={openModal} className='geo__label'>
        {city[language].header.cityName}
        :&nbsp;
      </span>
      <span className='link in-text geo__link'>
        <span onClick={openModal}>{city[language].header.city}</span>
        <div id='modal-geo' className={`geo__modal ${askCity}`}>
          <p>Это ваш город?</p>
          <div className='geo__modal-footer'>
            <button onClick={closeAskWindow} type='button' id='geo__yes-btn' className='geo__modal-btn'>Да</button>
            <button onClick={openModal} type='button' id='geo__no-btn' className='geo__modal-btn'>Нет, сменить город</button>
          </div>
        </div>
      </span>
    </a>
  );
}


Geo.propTypes = {
  openModal: PropTypes.func,
  language: PropTypes.string,
  city: PropTypes.object
};