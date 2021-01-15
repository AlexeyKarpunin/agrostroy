import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Geo (props) {
 const {openModal} = props;
 const [askCity, setAskCity]= useState('is-hide');
 const {city} = useSelector( (state) => state.city);

 function closeAskWindow() {setAskCity('is-hide')}

 useEffect( () => {
  setAskCity('is-show')
 }, [])

  return (
    <a className='geo popup-city' href='#city-popup'>
      <span className='icon is-primary is-geo'>
        <svg>
          <use xlinkHref='/img/iconsprites.svg#geo' />
        </svg>
      </span>
      <span onClick={openModal} className='geo__label'>
        Ваш город:&nbsp;
      </span>
      <span className='link in-text geo__link'>
        <span onClick={openModal}>{city}</span>
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
};