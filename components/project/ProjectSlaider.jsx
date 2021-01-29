// import Fotorama from 'fotorama-react-wrapper';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function ProjectSlaider () {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [styles, setStyles] = useState('');

  useEffect (() => {
    setStyles(
      `
   margin: 0 0 20px 0;
   padding-bottom: 10px;
   overflow: hidden;
   
   .slick-dots li.slick-active button {
    border-color: #d6d6d6;
    background-color: #d6d6d6;
   }
   
   }
  
   &:hover .slick-next{
    right: 2px;
    opacity: 1;
   }

   &:hover .slick-prev {
    left: 2px;
    opacity: 1;
   }

  .slick-dots {
    margin-top: -25px;
  }

  .slick-arrow {
    font: 0px/1.3 OpenSans, sans-serif;
    color: #2e2e2e;
    direction: ltr;
    box-sizing: border-box;
    outline: 0;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    z-index: 11;
    cursor: pointer;
    position: absolute;
    width: 32px;
    height: 32px;
    top: 50%;
    margin-top: -16px;
    transform: translate3d(0,0,0);
    transition-property: transform,opacity;
    transition-duration: .3s;
    box-shadow: none;
  }
   
  .slick-next {
    background: url(/img/fotorama.png) no-repeat;
    background-position: -32px 0;
    right: -100px;
    opacity: 0;

    &::before {
      content: '';
    }
  }


  .slick-prev {
    background: url(/img/fotorama.png) no-repeat;
    left: -100px;
    opacity: 0;
    &::before {
      content: '';
    }
  }
`
  );
},[])

  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>
            Выполненные нами проекты
          </h2>
        </div>
        <div className='page-section__body'>
          <SliderWrraper mystyles={styles}>
            <Slider {...settings}>
              <div className='item image slick-slide'>
                <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/diel.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>ОПТОВО-РОЗНИЧНАЯ БАЗА «ДИЭЛ», с. Солянка, Астраханская область</h3>
                      <p className='fotorama__slide-description'>Проектирование и строительство, кровельные и фасадные работы. Оснащение вентиляционным оборудованием. Установка камер для хранения продовольственной продукции — площадью 1700 кв.м.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item image slick-slide'>
                <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/irriko.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>ОВОЩЕХРАНИЛИЩЕ — 20 х 73,8 м. «ИРРИКО», Ставропольский край, Ипатовский район, поселок Винодельненский</h3>
                      <p className='fotorama__slide-description'>Проектирование и строительство овощехранилища навального типа.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item image slick-slide'>
                <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/cvetnoe.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>РЫБОПЕРЕРАБАТЫВАЮЩИЙ КОМПЛЕКС, с. Цветное</h3>
                      <p className='fotorama__slide-description'>Проектирование. Изготовление и монтаж металлоконструкций и сэндвич панелей. Оснащение промышленным холодильным оборудованием. Установка топинговых полов. Общая площадь здания 1400 м2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item image slick-slide'>
                <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/jumanov.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>СКЛАД ПО ХРАНЕНИЮ ЗАМОРОЖЕННОЙ ПРОДУКЦИИ, ИП ДЖУМАТОВ Ш.У., г. Астрахань, Приволжский р-он, Началовское шоссе</h3>
                      <p className='fotorama__slide-description'>Проектирование и строительство объекта. Оснащение промышленным холодильным оборудованием: установлены низкотемпературные морозильные камеры (- 18°C), общей площадью 600 кв.м.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item image slick-slide'>
                <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/слайд-4.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>ЛОГИСТИЧЕСКИЙ ЦЕНТР ООО «ЗАВЕТНОЕ», Ставропольский край, с. Новозаведенное</h3>
                      <p className='fotorama__slide-description'>Проектирование и строительство трех овощехранилищ навального и контейнерного типа, технологического корпуса с навесами по переработке овощей, АБК, тарного цеха, КПП, весовой и прочих технических помещений. Поставка и монтаж всей необходимой сельскохозяйственной техники. Установка холодильного оборудования объем 5000 т.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item image slick-slide'>
                <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/slide2-1.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>АДМИНИСТРАТИВНО-СКЛАДСКОЙ КОМПЛЕКС ЛОГИСТИЧЕСКИЙ ЦЕНТР «ДЕЛОВЫЕ ЛИНИИ», г. Астрахань</h3>
                      <p className='fotorama__slide-description'>Проектирование и строительство. Площадь почти 4000 кв.м.. Из них складские помещения площадью 3200 кв.м. и офисные помещения площадью – 694 кв.м. Нашей компанией был проведен полный цикл работ от проектирования и возведения здания, проведения отделочных работ и оснащения всем необходимым оборудованием.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </SliderWrraper>
          <div className='container centered'>
            <Link  href='/finished-projects'><a className='btn is-secondary'>Посмотреть все объекты</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const SliderWrraper = styled.div` ${props => props.mystyles}`;

