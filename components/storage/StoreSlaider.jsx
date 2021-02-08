/* eslint-disable react/prop-types */
import { useState } from 'react';
import OwlCarousel from 'react-owl-carousel2';

export default function StoreSlaider ({options, events, imges, modalImges}) {

 const [modalStatus, setModalStatus] = useState('store--modal--close'); // status
 const [modalImg, setModalImg] = useState(''); // link on img
 const [modalImgKey, setModalImgKey] = useState(0); // number in array

 function openModal (e) {
   setModalImg(modalImges[Number(e.target.getAttribute('data-key'))]);
   setModalImgKey(Number(e.target.getAttribute('data-key')));
   setModalStatus('');
  };

 function closeModal () {setModalStatus('store--modal--close')};

 function  swaipLeft () {
   const checkNum = modalImgKey;

   if (checkNum <= 0) {
    setModalImgKey(imges.length - 1);
    setModalImg(modalImges[imges.length - 1]);
   } else {
    setModalImgKey(modalImgKey - 1);
    setModalImg(modalImges[modalImgKey - 1]);
    console.log(modalImgKey)

   }
 }

 function swaipRight () {
  const checkNum = modalImgKey;
  if (checkNum === imges.length - 1) {
   setModalImgKey(0);
   setModalImg(modalImges[0]);
  } else {
   setModalImgKey(Number(modalImgKey) + 1);
   setModalImg(modalImges[modalImgKey + 1]);
  }
 }

  return (
    <>
      <OwlCarousel options={options} events={events}>
        {imges.map( (imgLink, index) => <img onClick={openModal} width='300' height='200' src={imgLink} alt='' data-key={index} />)}
      </OwlCarousel>
      
      <div className={`mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor open-gallery mfp-ready ${modalStatus} `} tabIndex='-1' style={{overflow: 'hidden auto'}}>
        <div className='mfp-container mfp-s-ready mfp-image-holder'>
          <div className='mfp-content'>
            <div className='mfp-figure'>
              <button onClick={closeModal} title='Close (Esc)' type='button' className='mfp-close'>×</button>
              <figure>
                <img className='mfp-img' data-key={modalImgKey} src={modalImg} alt='' style={{maxWidth: '1030px'}} loading='lazy' />
                <figcaption>
                  <div className='mfp-bottom-bar'>
                    <div className='mfp-title' />
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className='mfp-preloader'>Loading...</div>
          <button onClick={swaipLeft} title='Предыдущая фотография' type='button' className='mfp-arrow mfp-arrow-left mfp-prevent-close storage--left--btn' />
          <button onClick={swaipRight} title='Следующая фотография' type='button' className='mfp-arrow mfp-arrow-right mfp-prevent-close storage--right--btn' />
        </div>
      </div>
    </>
  )
}
