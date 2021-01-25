import { useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from './components/Logo';
import Company from './components/Compony';
import Geo from './components/Geo';
import Call from './components/Call';
import Lang from './components/Lang';
import ModalChooseCities from './components/ModalCooseCities';
import Navigation from './components/Navigation';

export default function Header () {
  const [modalCityStatus, setModalCityStatus] = useState(false);
  // eslint-disable-next-line no-unused-expressions
  function toggleModalWindowWithCities () {modalCityStatus ? setModalCityStatus(false) : setModalCityStatus(true)};
  
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

  return (
    <>
      {modalCityStatus ? <ModalChooseCities closeModal={toggleModalWindowWithCities} /> : null}
      <header className='page-header'>
        <div className='page-header__body'>
          <div className='page-section__inner'>
            <div className='column__wrapper in-header is-valign-center'>
              <div className='column is-logo with-delimiter'>
                <Logo />
              </div>
              <div className='column is-company with-delimiter'>
                <Company 
                  city={city}
                  language={language}
                />
              </div>
              <div className='column is-geo with-delimiter'>
                <Geo 
                  openModal={toggleModalWindowWithCities} 
                  city={city}
                  language={language}
                />
              </div>
              <div className='column is-call'>
                <Call
                  city={city}
                  language={language}
                />
              </div>
              <div className='column is-lang'>
                <Lang />
              </div>
            </div>
          </div>
        </div>
        <div className='page-header__nav'>
          <div className='page-section__inner'>
            <Navigation />
          </div>
        </div>
      </header>
    </>
  );
}


