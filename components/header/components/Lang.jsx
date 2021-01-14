/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";

export default function Lang () {
  
 const [ruActive, setRu] = useState(true);
 const [engActive, setEng] = useState(false);

  function activateBtn (e) {
    e.preventDefault();
    if (!e.target.classList.contains('is-active')) {
      ruActive ? setRu(false) : setRu(true);
      engActive ? setEng(false) : setEng(true);
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