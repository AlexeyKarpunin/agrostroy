/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation ({city, language}) {
  const text = city[language].header.navigation;
  const [menuStatus, setMenuStatus] = useState(false);

  function toggleMobileMenu () {
    // eslint-disable-next-line no-unused-expressions
    menuStatus ? setMenuStatus(false) : setMenuStatus(true);
  }


  return (
    <nav className='navigation'>
      <button onClick={toggleMobileMenu} className={`navigation__btn ${menuStatus ? 'active' : null}`} type='button'>{text.mobile}</button>
      <ul className={`navigation__list ${ menuStatus ? 'navigation__list_show' : null}`}>
        <li className='navigation__item'>
          <Link href='/aboutComponi'><a className='navigation__link'>{text.nav[0]}</a></Link>
        </li>
        <li className='navigation__item'>
          <Link href='/storage'><a className='navigation__link'>{text.nav[1][0]}</a></Link>
          <ul className='submenu'>
            <li className='submenu__item'>
              <Link href='/storage'><a className='submenu__link'>{text.nav[1][0]}</a></Link>
            </li>
            <li className='submenu__item'> 
              <Link href='/storage/fruit-storage'><a className='submenu__link'>{text.nav[1][1]}</a></Link>
            </li>
            <li className='submenu__item'>
              <Link href='/storage/fish-storage'><a className='submenu__link'>{text.nav[1][2]}</a></Link>
            </li>
            <li className='submenu__item'>
              <Link href='/storage/vegetables-storage'><a className='submenu__link'>{text.nav[1][3]}</a></Link>
            </li>
            <li className='submenu__item'>
              <Link href='/storage/corn-storage'><a className='submenu__link'>{text.nav[1][4]}</a></Link>
            </li>
          </ul>
        </li>
        <li className='navigation__item'>
          <Link href='/hangers-and-warehouse'><a className='navigation__link'>{text.nav[2][0]}</a></Link>
          <ul className='submenu'>
            <li className='submenu__item'>
              <Link href='/hangers-and-warehouse'><a className='submenu__link'>{text.nav[2][0]}</a></Link>
            </li>
            <li className='submenu__item'>
              <Link href='/hangers-and-warehouse/folding-hangar'><a className='submenu__link'>{text.nav[2][1]}</a></Link>
            </li>
            <li className='submenu__item'>
              <Link href='/prom-holod'><a className='submenu__link'>{text.nav[2][2]}</a></Link>
            </li>
            <li className='submenu__item'>
              <Link href='/hangers-and-warehouse/frame-hangars'><a className='submenu__link'>{text.nav[2][3]}</a></Link>
            </li>
            <li className='submenu__item'>
              <Link href='/hangers-and-warehouse/without-frame-hangars'><a className='submenu__link'>{text.nav[2][4]}</a></Link>
            </li>
          </ul>
        </li>
        <li className='navigation__item'>
          <Link href='/prom-holod'><a className='navigation__link'>{text.nav[3][0]}</a></Link>
          <ul className='submenu'>
            <li className='submenu__item'>
              <Link href='/prom-holod'><a className='submenu__link'>{text.nav[3][1]}</a></Link>
            </li>
            <li className='submenu__item'> 
              <Link href='/prom-holod/climatic-equipment'><a className='submenu__link'>{text.nav[3][2]}</a></Link>
            </li>
          </ul>
        </li>
        <li className='navigation__item'>
          <Link href='/metal-constructions'><a className='navigation__link'>{text.nav[4][0]}</a></Link>
          <ul className='submenu'>
            <li className='submenu__item'>
              <Link href='/metal-constructions'><a className='submenu__link'>{text.nav[4][0]}</a></Link>
            </li>
            <li className='submenu__item'>
              <Link href='/metal-constructions/reconstruction'><a className='submenu__link'>{text.nav[4][1]}</a></Link>
            </li>
          </ul>
        </li>
        <li className='navigation__item'>
          <Link href='/project'><a className='navigation__link'>{text.nav[5]}</a></Link>
        </li>
        <li className='navigation__item'>
          <Link href='/contacts'><a className='navigation__link'>{text.nav[6]}</a></Link>
        </li>
      </ul>
    </nav>
  );
} 


