/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {changeLanguageEng, changeLanguageRus} from '../../../redux/actions';

export default function Lang () {
  
 const [ruActive, setRu] = useState(true);
 const [engActive, setEng] = useState(false);
 const dispatch = useDispatch();

 useEffect(() =>{
  const lang = localStorage.getItem('lang');
  if (!lang) {
    localStorage.setItem('lang', 'ru');
  } else if (lang === 'eng') {
    setRu(false);
    setEng(true);
  }
 }, [])

 useEffect( () => {
   ruActive ? dispatch(changeLanguageRus()) : dispatch(changeLanguageEng())
 }, [ruActive, engActive]);

  function activateBtn (e) {
    e.preventDefault();
    if (!e.target.classList.contains('is-active')) {

      if (ruActive) {
        setRu(false)
      } else {
        setRu(true);
        localStorage.setItem('lang', 'ru');
      }

      if (engActive) {
        setEng(false)
      } else {
        setEng(true); 
        localStorage.setItem('lang', 'eng');
      }
    }
  } 
  
  return (
    <ul className='lang' aria-label='Меню выбора языка'>
      <li className='lang__item'>
        <a onClick={activateBtn} className={ruActive ? 'lang__link is-active' : 'lang__link'} href='/'>
          RU
        </a>
      </li>
      <li className='lang__item'>
        <a onClick={activateBtn} className={engActive ? 'lang__link is-active' : 'lang__link'} href='/'>
          EN
        </a>
      </li>
    </ul>
  );
}