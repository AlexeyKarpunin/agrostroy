export default function Navigation () {
  return (
    <nav className='navigation'>
      <button className='navigation__btn' type='button'>МЕНЮ</button>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <a href='https://agrostroitel.ru/about/' className='navigation__link'>О компании</a>
        </li>
        <li className='navigation__item'>
          <a href='https://agrostroitel.ru/stroitelstvo-hranilish/' className='navigation__link'>Хранилища</a>
          <ul className='submenu'>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/stroitelstvo-hranilish/' className='submenu__link'>Хранилища</a>
            </li>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/stroitelstvo-hranilish/stroitelstvo-fruktohranilish-pod-kluch/' className='submenu__link'>Фруктохранилища</a>
            </li>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/stroitelstvo-hranilish/stroitelstvo-skladov-hraneniye-pererabotka-rybi/' className='submenu__link'>Камеры для заморозки и хранения рыбы</a>
            </li>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/stroitelstvo-hranilish/stroitelstvo-ovoshehranilish-pod-kluch/' className='submenu__link'>Овощехранилища</a>
            </li>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/stroitelstvo-hranilish/stroitelstvo-zernohranilish-pod-kluch/' className='submenu__link'>Зернохранилища</a>
            </li>
          </ul>
        </li>
        <li className='navigation__item'>
          <a href='https://agrostroitel.ru/stroitelstvo-angarov-i-skladov/' className='navigation__link'>Ангары и склады</a>
          <ul className='submenu'>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/stroitelstvo-angarov-i-skladov/' className='submenu__link'>Ангары и склады</a>
            </li>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/stroitelstvo-angarov-i-skladov/sborno-razbornye-angary/' className='submenu__link'>Сборно-разборные ангары</a>
            </li>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/prom-holod/' className='submenu__link'>Холодильные камеры и склады</a>
            </li>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/stroitelstvo-angarov-i-skladov/stroitelstvo-karkasnih-angarov/' className='submenu__link'>Каркасные ангары</a>
            </li>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/stroitelstvo-angarov-i-skladov/stroitelstvo-bistrovozvodimyh-angarov/' className='submenu__link'>Бескаркасные ангары</a>
            </li>
          </ul>
        </li>
        <li className='navigation__item'>
          <a href='https://agrostroitel.ru/prom-holod/' className='navigation__link'>Промхолод</a>
          <ul className='submenu'>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/prom-holod/' className='submenu__link'>Промышленный холод</a>
            </li>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/prom-holod/klimaticheskoe-oborudovanie/' className='submenu__link'>Климатическое оборудование</a>
            </li>
          </ul>
        </li>
        <li className='navigation__item'>
          <a href='https://agrostroitel.ru/metallokonstrukcii/' className='navigation__link'>Металлоконструкции</a>
          <ul className='submenu'>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/metallokonstrukcii/' className='submenu__link'>Металлоконструкции</a>
            </li>
            <li className='submenu__item'>
              <a href='https://agrostroitel.ru/metallokonstrukcii/rekonstrukciya-zdaniy/' className='submenu__link'>Реконструкция зданий</a>
            </li>
          </ul>
        </li>
        <li className='navigation__item'>
          <a href='https://agrostroitel.ru/proektirovanie-obyectov-agrocompleksa/' className='navigation__link'>Проектирование</a>
        </li>
        <li className='navigation__item'>
          <a href='https://agrostroitel.ru/kontakts/' className='navigation__link'>Контакты</a>
        </li>
      </ul>
    </nav>
  );
} 