import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import '../../styles/style.css';

export default function STpage () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
 
  
  return (
    <>
      <Header
        city={city}
        language={language}
      />
      <article className='page-section is-article'>
        <div className='page-section__inner'>
          <div className='page-section__title'>
            <h1 className='is-section'>Химический состав овощей</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'> 
              <figure className='wp-block-image'><img src='/img/infrost/tab1.gif' alt='Химический состав овощей' /></figure>
              <figure className='wp-block-image'><img src='/img/infrost/tab2.gif' alt='' /></figure>
              <figure className='wp-block-image'><img src='/img/infrost/tab3.gif' alt='химический состав овощей - 2' /></figure>
              <figure className='wp-block-image'><img src='/img/infrost/tab4.gif' alt='' /></figure>
              <figure className='wp-block-image'><img src='/img/infrost/tab5.gif' alt='химический состав овощей - 3' /></figure>

            </div>
          </div>
        </div>
      </article>
      <Footer
        city={city}
        language={language}
      />
    </>
  );
}