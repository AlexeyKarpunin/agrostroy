export default function ProjectSlaider () {
  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>
            Выполненные нами проекты
          </h2>
        </div>
        <div className='page-section__body'>
          <style />
          <div className='fotorama--hidden' />
          <div className='fotorama fotorama1611583560137'>
            <div className='fotorama__wrap fotorama__wrap--css3 fotorama__wrap--slide fotorama__wrap--toggle-arrows fotorama__wrap--no-controls' style={{width: '1200px', minWidth: '0px', maxWidth: '100%'}}>
              <div className='fotorama__stage' style={{width: '1162px', height: '455px'}}>
                <div className='fotorama__stage__shaft' style={{transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)', width: '1162px', marginLeft: '0px'}}>
                  <div className='fotorama__stage__frame fotorama__loaded fotorama__loaded--img fotorama__active' style={{left: '0px'}}>
                    <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/diel.jpg' className='fotorama__img' style={{width: '1161.7px', height: '455px', left: '0.148936px', top: '0px'}} alt='' />
                    <div className='fotorama__caption'>
                      <div className='fotorama__caption__wrap'>
                        <div className='fotorama__block-content'>
                          <h3 className='is-slide'>ОПТОВО-РОЗНИЧНАЯ БАЗА «ДИЭЛ», с. Солянка, Астраханская область</h3>
                          <p className='fotorama__slide-description'>Проектирование и строительство, кровельные и фасадные работы. Оснащение вентиляционным оборудованием. Установка камер для хранения продовольственной продукции — площадью 1700 кв.м.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='fotorama__stage__frame fotorama__loaded fotorama__loaded--img' style={{left: '1164px'}}>
                    <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/irriko.jpg' className='fotorama__img' style={{width: '1161.7px', height: '455px', left: '0.148936px', top: '0px'}} alt='' />
                    <div className='fotorama__caption'>
                      <div className='fotorama__caption__wrap'>
                        <div className='fotorama__block-content'>
                          <h3 className='is-slide'>ОВОЩЕХРАНИЛИЩЕ — 20 х 73,8 м. «ИРРИКО», Ставропольский край, Ипатовский район, поселок Винодельненский</h3>
                          <p className='fotorama__slide-description'>Проектирование и строительство овощехранилища навального типа.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='fotorama__arr fotorama__arr--prev fotorama__arr--disabled' tabIndex='-1' role='button' disabled='disabled' />
                <div className='fotorama__arr fotorama__arr--next' tabIndex='0' role='button' />
                <div className='fotorama__video-close' />
              </div>
              <div className='fotorama__nav-wrap'>
                <div className='fotorama__nav fotorama__nav--dots' style={{width: '1162px'}}>
                  <div className='fotorama__nav__shaft' style={{transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)'}}>
                    <div className='fotorama__thumb-border' />
                    <div className='fotorama__nav__frame fotorama__nav__frame--dot fotorama__active' tabIndex='0' role='button'><div className='fotorama__dot' /></div>
                    <div className='fotorama__nav__frame fotorama__nav__frame--dot' tabIndex='0' role='button'><div className='fotorama__dot' /></div>
                    <div className='fotorama__nav__frame fotorama__nav__frame--dot' tabIndex='0' role='button'><div className='fotorama__dot' /></div>
                    <div className='fotorama__nav__frame fotorama__nav__frame--dot' tabIndex='0' role='button'><div className='fotorama__dot' /></div>
                    <div className='fotorama__nav__frame fotorama__nav__frame--dot' tabIndex='0' role='button'><div className='fotorama__dot' /></div>
                    <div className='fotorama__nav__frame fotorama__nav__frame--dot' tabIndex='0' role='button'><div className='fotorama__dot' /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container centered'>
            <a className='btn is-secondary' href='/gotovie-obyecti'>
              Посмотреть все объекты
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}