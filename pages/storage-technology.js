
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import '../styles/style.css';

const giveHeadinfo = (city) => ({
  ru: {
    title: 'Технологии хранения',
    description: 'Строительство объектов агрокомплекса'
  },
  eng: {
    title: 'Технологии хранения',
    description: 'The construction of agricultural complex'
  }
})

export default function StorageTechnology () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
  const headInfo = giveHeadinfo(city[language].title.in);

  return (
    <>
      <Head>
        <title>{headInfo[language].title}</title>
        <meta name='description' content={headInfo[language].description} />
      </Head>
      <Header 
        city={city}
        language={language}
      />
      <article className='page-section is-article'>
        <div className='page-section__inner'>
          <div className='page-section__title'>
            <h1 className='is-section is-section-fix'>Технологии хранения</h1>
          </div>
          <div className='page-section__body'>
            <div className='other-page-section'>
              <ul className='tehnoligiiBlock'>
                <li>
                  <Link href='storage-technology/regulated-and-modified-atmosphere'><a>Регулируемая и модифицированная атмосфера</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/storage-modes-for-fruits-and-vegetables'><a>Режимы хранения плодоовощной продукции</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/storage-modes-for-fruits-and-berries'><a>Режимы хранения фруктов и ягод</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/storage-modes-for-flowers'><a>Режимы хранения цветов, черенков и саженцев</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/product-compatibility'><a>Совместимость продуктов</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/teh-cold-storage-mode'><a>Технологический режим холодильного хранения</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/physiological-and-biochemical-processes'><a>Физиолого-биохимические процессы, происходящие в плодах и овощах в послеутробный период</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/refrigerators-for-fruits'><a>Холодильники для фруктов</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/chemical-composition-of-vegetables'><a>Химический состав овощей</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/storage-of-grapes'><a>Хранение винограда в регулируемой атмосфере (РГС)</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/storage-of-bananas'><a>Хранение и дозаривание бананов</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/storage-of-fruits-and-vegetables'><a>Хранение овощей и фруктов в РГС</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/storage-of-cabbage'><a>Хранение капусты</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/store-of-potato'><a>Картофелехранилище</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/store-of-onion'><a>Хранение лука</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/store-of-carrot'><a>Хранение моркови</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/store-of-flowers'><a>Хранение цветов в условиях измененной атмосферы</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/how-storing-flowers'><a>Как хранят цветы</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/storage-of-cuttings-and-seedlings'><a>Хранение черенков и саженцев</a></Link>
                </li>
                <li>
                  <Link href='storage-technology/controlled-atmosphere'><a>Что такое регулируемая атмосфера</a></Link>
                </li>
              </ul>

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