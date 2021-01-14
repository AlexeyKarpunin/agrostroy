import PropTypes from 'prop-types';

export default function Geo (props) {
 const {openModal} = props;
  return (
    <a className='geo popup-city' href='#city-popup'>
      <span className='icon is-primary is-geo'>
        <svg>
          <use xlinkHref='/img/iconsprites.svg#geo' />
        </svg>
      </span>
      <span onClick={openModal} className='geo__label'>
        Ваш город:&nbsp;
        {/* {% if globus.language == 'ru' %}
      Ваш город:&nbsp;
    {% elseif globus.language == 'en' %}
      City:&nbsp;
    {% endif %} */}
      </span>
      <span className='link in-text geo__link'>
        {/* {{ getCity(uri.get_current_url, cities) }} */}
        <div id='modal-geo' className='geo__modal'>
          <p>Это ваш город?</p>
          <div className='geo__modal-footer'>
            <button type='button' id='geo__yes-btn' className='geo__modal-btn'>Да</button>
            <button type='button' id='geo__no-btn' className='geo__modal-btn'>Нет, сменить город</button>
          </div>
        </div>
      </span>
    </a>
  );
}


Geo.propTypes = {
  openModal: PropTypes.func,
};