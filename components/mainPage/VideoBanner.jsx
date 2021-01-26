export default function VideoBanner() {
  return (
    <div className='page-section is-video'>
      <div className='page-section__inner'>
        <div className='main-slider slick-initialized slick-slider slick-dotted' role='toolbar'>
          <div aria-live='polite' className='slick-list draggable'>
            <div className='slick-track' role='listbox' style={{opacity: '1', width: '8134px', transform: 'translate3d(-1162px, 0px, 0px);'}}>
              <div className='item image slick-slide slick-cloned' data-slick-index='-1' aria-hidden='true' tabIndex='-1' style={{width: '1162px;'}}>
                <div className='slide__inner'>
                  <figure>
                    <div className='slide-image slide-media'>
                      <img src='https://agrostroitel.ru/wp-content/uploads/2019/08/background.jpg' alt='' className='image-entity' />
                    </div>
                  </figure>
                </div>
              </div>
              <div className='item video slick-slide slick-current slick-active' data-slick-index='0' aria-hidden='false' tabIndex='-1' role='option' aria-describedby='slick-slide00' style={{width: '1162px'}}>
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
            </div>
          </div>
                                                  
                                                  
                                                  
                                                  
          <ul className='slick-dots' role='tablist' style={{display: 'block;'}}>
            <li className='slick-active' aria-hidden='false' role='presentation' aria-selected='true' aria-controls='navigation00' id='slick-slide00'><button type='button' data-role='none' role='button' tabIndex='0'>1</button></li>
            <li aria-hidden='true' role='presentation' aria-selected='false' aria-controls='navigation01' id='slick-slide01'><button type='button' data-role='none' role='button' tabIndex='0'>2</button></li>
            <li aria-hidden='true' role='presentation' aria-selected='false' aria-controls='navigation02' id='slick-slide02'><button type='button' data-role='none' role='button' tabIndex='0'>3</button></li>
            <li aria-hidden='true' role='presentation' aria-selected='false' aria-controls='navigation03' id='slick-slide03'><button type='button' data-role='none' role='button' tabIndex='0'>4</button></li>
            <li aria-hidden='true' role='presentation' aria-selected='false' aria-controls='navigation04' id='slick-slide04'><button type='button' data-role='none' role='button' tabIndex='0'>5</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}