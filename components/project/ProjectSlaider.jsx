// import Fotorama from 'fotorama-react-wrapper';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function ProjectSlaider ({text}) {

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
            {text.header}
          </h2>
        </div>
        <div className='page-section__body'>
          <SliderWrraper mystyles={styles}>
            <Slider {...settings}>
              <div className='item image slick-slide'>
                <img src='/img/2019/08/diel.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>{text.slide1.header}</h3>
                      <p className='fotorama__slide-description'>{text.slide1.content}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item image slick-slide'>
                <img src='/img/2019/08/irriko.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>{text.slide2.header}</h3>
                      <p className='fotorama__slide-description'>{text.slide2.content}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item image slick-slide'>
                <img src='/img/2019/08/cvetnoe.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>{text.slide3.header}</h3>
                      <p className='fotorama__slide-description'>{text.slide3.content}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item image slick-slide'>
                <img src='/img/2019/08/jumanov.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>{text.slide4.header}</h3>
                      <p className='fotorama__slide-description'>{text.slide4.content}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item image slick-slide'>
                <img src='/img/2019/08/слайд-4.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>{text.slide5.header}</h3>
                      <p className='fotorama__slide-description'>{text.slide5.content}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item image slick-slide'>
                <img src='/img/2019/08/slide2-1.jpg' alt='' />
                <div className='fotorama__caption'>
                  <div className='fotorama__caption__wrap'>
                    <div className='fotorama__block-content'>
                      <h3 className='is-slide'>{text.slide6.header}</h3>
                      <p className='fotorama__slide-description'>{text.slide6.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </SliderWrraper>
          <div className='container centered'>
            <Link  href='/finished-projects'><a className='btn is-secondary'>{text.btn}</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const SliderWrraper = styled.div` ${props => props.mystyles}`;

