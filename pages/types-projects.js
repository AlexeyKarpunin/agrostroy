import { useSelector } from 'react-redux';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import '../styles/style.css';

export default function PaperWorkPage () {
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
            <h1 className='is-section'>Типовые проекты</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <h2 className='is-article'>Однопролетные здания без промежуточных колонн</h2>
              <figure className='wp-block-image'><img src='/img/2019/03/1-2.jpg' alt='' className='wp-image-626' srcSet='/img/2019/03/1-2.jpg 846w, /img/2019/03/1-2-300x66.jpg 300w, /img/2019/03/1-2-768x170.jpg 768w, /img/2019/03/1-2-624x138.jpg 624w' sizes='(max-width: 846px) 100vw, 846px' /></figure>
              <p>Если требуется помещение с большим пространством, однопролетный тип сооружения будет оптимален. Такой проект подойдет для зданий шириной до 36 м. Можно спроектировать внутренние перегородки любой формы. Ангары, склады, производственные здания, с/х постройки — данный тип быстровозводимых конструкций может быть применен для этих объектов.</p>
              <h2 className='is-article'>Многопролетные здания с промежуточными колоннами</h2>
              <figure className='wp-block-image'><img src='/img/2019/03/4-1.jpg' alt='Типовые проекты' className='wp-image-628' srcSet='/img/2019/03/4-1.jpg 846w, /img/2019/03/4-1-300x82.jpg 300w, /img/2019/03/4-1-768x211.jpg 768w, /img/2019/03/4-1-624x171.jpg 624w' sizes='(max-width: 846px) 100vw, 846px' /></figure>
              <p>В этом проекте используются внутренние промежуточные несущие колонны. Ширина такого здания может быть от 18 до 72 метров, при неограниченной длине. Проект обычно используют под производственные здания, склады, торговые и офисные помещения.</p>
              <h2 className='is-article'>Односкатные однопролетные и многопролетные здания</h2>
              <figure className='wp-block-image'><img src='/img/2019/03/2-1.jpg' alt='Типовые проекты' className='wp-image-629' srcSet='/img/2019/03/2-1.jpg 846w, /img/2019/03/2-1-300x66.jpg 300w, /img/2019/03/2-1-768x170.jpg 768w, /img/2019/03/2-1-624x138.jpg 624w' sizes='(max-width: 846px) 100vw, 846px' /></figure>
              <p>Оптимальны для строительства небольших зданий, пристроек (не образуют снеговые карманы). Используются для мини-складов, мастерских, и прочего. Ширина 10-30 м при неограниченной длине.</p>
              <h2 className='is-article'>Здание с межэтажным перекрытием</h2>
              <figure className='wp-block-image'><img src='/img/2019/03/3-1.jpg' alt='Типовые проекты' className='wp-image-630' srcSet='/img/2019/03/3-1.jpg 846w, /img/2019/03/3-1-300x82.jpg 300w, /img/2019/03/3-1-768x211.jpg 768w, /img/2019/03/3-1-624x171.jpg 624w' sizes='(max-width: 846px) 100vw, 846px' /></figure>
              <p>Перекрытие поддерживается сетью колонн на первом этаже. Такой проект идеален для размещения производственно-офисных и торговых комплексов.</p>
              <h2 className='is-article'>Комбинированные здания</h2>
              <figure className='wp-block-image'><img src='/img/2019/03/5.jpg' alt='Комбинированные здания' className='wp-image-631' srcSet='/img/2019/03/5.jpg 846w, /img/2019/03/5-300x82.jpg 300w, /img/2019/03/5-768x211.jpg 768w, /img/2019/03/5-624x171.jpg 624w' sizes='(max-width: 846px) 100vw, 846px' /></figure>
              <p>Комбинированный — это уже по сути индивидуальный проект. Здесь практически нет ограничений, используются конструкции различных типов.</p>

            </div>
          </div>
        </div>
      </article>
      <Footer
        city={city}
        language={language}
      />
    </>
  )
}