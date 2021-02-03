import { useState,  useEffect} from 'react';
import { useDispatch} from 'react-redux';
import Logo from './components/Logo';
import Company from './components/Compony';
import Geo from './components/Geo';
import Call from './components/Call';
import Lang from './components/Lang';
import ModalChooseCities from './components/ModalCooseCities';
import Navigation from './components/Navigation';
import {giveUserCity} from '../../redux/actions';

export default function Header ({city, language}) {
  const [modalCityStatus, setModalCityStatus] = useState(false);
  const dispatch = useDispatch();
 
  // eslint-disable-next-line no-unused-expressions
  function toggleModalWindowWithCities () {modalCityStatus ? setModalCityStatus(false) : setModalCityStatus(true)};

  useEffect(() => {
    const city = localStorage.getItem('city');
    if (city) {
      dispatch(giveUserCity(city));
    } 
  }, [])

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
            <Navigation
              city={city}
              language={language}
            />
          </div>
        </div>
      </header>
    </>
  );
}


