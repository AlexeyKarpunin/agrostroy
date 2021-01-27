
import Slider from 'react-slick';

export default function VideoBanner() {
  
 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <div className='page-section is-video'>
      <div className='page-section__inner'>
        <Slider {...settings}>
          <div className='item video slick-slide slick-cloned' data-slick-index='5' aria-hidden='true' tabIndex='-1' style={{width: '1162px'}}>
            <div className='slide__inner'>
              <span className='loading'>
                <div className='sk-three-bounce'>
                  <div className='sk-child sk-bounce-1' />
                  <div className='sk-child sk-bounce-2' />
                  <div className='sk-child sk-bounce-3' />
                </div>
              </span>
              <video src='https://agrostroitel.ru/wp-content/uploads/2019/08/video-agro.mp4' className='slide-video slide-media' loop='' muted='' preload='metadata' />
            </div>
          </div>
          <div className='item image slick-slide' data-slick-index='1' aria-hidden='true' tabIndex='-1' role='option' aria-describedby='slick-slide01' style={{width: '1162px;'}}>
            <div className='slide__inner'>
          
              <figure>
                <div className='slide-image slide-media'>
                  <img src='https://agrostroitel.ru/wp-content/uploads/2019/03/slide-1.jpg' alt='' className='image-entity' />
                </div>
              </figure>
            </div>
          </div>
          <div className='item image slick-slide' data-slick-index='2' aria-hidden='true' tabIndex='-1' role='option' aria-describedby='slick-slide02' style={{width: '1162px'}}>
            <div className='slide__inner'>
              <figure>
                <div className='slide-image slide-media'>
                  <img src='https://agrostroitel.ru/wp-content/uploads/2019/02/slide-2.jpg' alt='' className='image-entity' />
                </div>
              </figure>
            </div>
          </div>
          <div className='item image slick-slide' data-slick-index='3' aria-hidden='true' tabIndex='-1' role='option' aria-describedby='slick-slide03' style={{width: '1162px'}}>
            <div className='slide__inner'>
              <figure>
                <div className='slide-image slide-media'>
                  <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/diel.jpg' alt='' className='image-entity' />
                </div>
              </figure>
            </div>
          </div>
          <div className='item image slick-slide' data-slick-index='4' aria-hidden='true' tabIndex='-1' role='option' aria-describedby='slick-slide04' style={{width: '1162px'}}>
            <div className='slide__inner'>
              <figure>
                <div className='slide-image slide-media'>
                  <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/background.jpg' alt='' className='image-entity' />
                </div>
              </figure>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}