/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import StoreSlaider from './StoreSlaider';

export default function StorageInfo ({text}) {

  const [item, setItem] = useState(3);

useEffect( () => {
  function widthLisner () {
    const width = window.innerWidth
    if (width < 928 && width > 729) {
      setItem(2);
      return;
    } 
    if (width <= 729) {
      setItem(1);
      return;
    } 
    setItem(3);
  }

  widthLisner();
  window.addEventListener('resize', widthLisner);
  return () => window.removeEventListener('resize', widthLisner);
}, [])

const options = {
    items: item,
    nav: true,
    rewind: true,
    autoplay: true,
    margin:10,
    autoplayTimeout:5000
};

  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>{text.mainHeader}</h2>
        </div>
        <div className='page-section__body'>
          <div className='other-page-section'>
            <p>{text.content[0]}</p>
            <p>{text.content[1]}</p>
            <hr />
            <h3>{text.headers[0]}</h3>
            <StoreSlaider 
              options={options}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
              modalImges={[
                '/img/sliders/storageS1/modal/IMG_20181209_110604.jpg',
                '/img/sliders/storageS1/modal/IMG_20181209_110621.jpg',
                '/img/sliders/storageS1/modal/IMG_20181209_110748.jpg',
                '/img/sliders/storageS1/modal/IMG_20181221_112722.jpg',
                '/img/sliders/storageS1/modal/IMG_20181221_112741.jpg',
                '/img/sliders/storageS1/modal/IMG_20181221_125035.jpg',
                '/img/sliders/storageS1/modal/IMG_20181221_130517.jpg'
              ]}
            />
            <hr />
            <p>{text.content[2]}</p>
            <p>{text.content[3]}</p>
            <hr />
            <h3>{text.headers[0]}</h3>
            <StoreSlaider 
              options={options}
              imges={[
                '/img/sliders/storageS2/image-1-7-300x169.png',
                '/img/sliders/storageS2/image-2-7-300x169.png',
                '/img/sliders/storageS2/image-3-6-300x169.png',
                '/img/sliders/storageS2/image-4-4-300x169.png',
                '/img/sliders/storageS2/image-5-4-300x169.png',
                '/img/sliders/storageS2/image-6-4-300x169.png',
                '/img/sliders/storageS2/image-7-1-300x169.png',
                '/img/sliders/storageS2/image-8-300x169.png',
                '/img/sliders/storageS2/image-9-300x169.png',
                '/img/sliders/storageS2/image-10-300x169.png',
                '/img/sliders/storageS2/image-11-300x169.png',
                '/img/sliders/storageS2/IMG_20170727_121428-300x169.jpg',
                '/img/sliders/storageS2/IMG_20170804_094304-300x169.jpg',
                '/img/sliders/storageS2/IMG_20170804_110958-300x169.jpg',
                '/img/sliders/storageS2/IMG_20170806_110513-300x169.jpg',
                '/img/sliders/storageS2/IMG_20170927_163513-300x169.jpg',
              ]}
              modalImges={[
                '/img/sliders/storageS2/modal/image-1-7.png',
                '/img/sliders/storageS2/modal/image-2-7.png',
                '/img/sliders/storageS2/modal/image-3-6.png',
                '/img/sliders/storageS2/modal/image-4-4.png',
                '/img/sliders/storageS2/modal/image-5-4.png',
                '/img/sliders/storageS2/modal/image-6-4.png',
                '/img/sliders/storageS2/modal/image-7-1-768x432.png',
                '/img/sliders/storageS2/modal/image-8-768x432.png',
                '/img/sliders/storageS2/modal/image-9-768x432.png',
                '/img/sliders/storageS2/modal/image-10.png',
                '/img/sliders/storageS2/modal/image-11.png',
                '/img/sliders/storageS2/modal/IMG_20170727_121428.jpg',
                '/img/sliders/storageS2/modal/IMG_20170804_094304.jpg',
                '/img/sliders/storageS2/modal/IMG_20170804_110958.jpg',
                '/img/sliders/storageS2/modal/IMG_20170806_110513.jpg',
                '/img/sliders/storageS2/modal/IMG_20170927_163513.jpg',
              ]}
            />
            <hr />
            <p>{text.content[4]}</p>
            <hr />
            <h3 className='font_2'>{text.headers[0]}</h3>
            <StoreSlaider 
              options={options}
              imges={[
                '/img/sliders/storageS3/image-1-5-300x169.png',
                '/img/sliders/storageS3/image-2-5-300x169.png',
                '/img/sliders/storageS3/image-3-5-300x169.png',
                '/img/sliders/storageS3/image-4-3-300x169.png',
                '/img/sliders/storageS3/image-5-3-300x169.png',
                '/img/sliders/storageS3/image-6-3-300x169.png',
              ]}
              modalImges={[
                '/img/sliders/storageS3/modal/image-1-5.png',
                '/img/sliders/storageS3/modal/image-2-5.png',
                '/img/sliders/storageS3/modal/image-3-5.png',
                '/img/sliders/storageS3/modal/image-4-3.png',
                '/img/sliders/storageS3/modal/image-5-3.png',
                '/img/sliders/storageS3/modal/image-6-3.png',
              ]}
            />
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}