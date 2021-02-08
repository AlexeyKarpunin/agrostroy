import { useEffect, useState } from 'react';
import StoreSlaider from './storage/StoreSlaider';

export default function FinisedProjects () {
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

const events = {
  onDragged(event) {},
  onChanged(event) {}
};

  return (
    <article className='page-section is-article'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h1 className='is-section'>Готовые объекты</h1>
        </div>
        <div className='page-section__body'>
          <div className='other-page-section'>
            <h3 className='is-article'>АДМИНИСТРАТИВНО-СКЛАДСКОЙ КОМПЛЕКС ЛОГИСТИЧЕСКИЙ ЦЕНТР «ДЕЛОВЫЕ ЛИНИИ», г. Астрахань</h3>
            <p>
              <em>Выполненные работы</em>
              <br />
              Проектирование и строительство. Площадь почти 4000 кв.м.. Из них складские помещения площадью 3200 кв.м. и офисные помещения площадью – 694 кв.м. Нашей компанией был проведен полный цикл работ от проектирования и возведения здания, проведения отделочных работ и оснащения всем необходимым оборудованием.
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/1-1024x683.jpg',
                '/img/2019/03/2-300x200.jpg',
                '/img/2019/03/3-300x200.jpg',
                '/img/2019/03/4-300x200.jpg',
                '/img/2019/03/image-1-10-300x200.png',
                '/img/2019/03/image-2-10-300x200.png',
                '/img/2019/03/image-3-8-300x200.png',
                '/img/2019/03/image-4-6-300x200.png',
                '/img/2019/03/image-5-6-300x200.png',
                '/img/2019/03/image-6-6-300x200.png',
                '/img/2019/03/image-7-3-300x200.png',
                '/img/2019/03/image-10-1-300x200.png',
                '/img/2019/03/image-11-1-300x200.png',
                '/img/2019/03/image-12-300x200.png',
               
              ]}
              modalImges={[
                '/img/2019/03/1.jpg',
                '/img/2019/03/2.jpg',
                '/img/2019/03/3.jpg',
                '/img/2019/03/4.jpg',
                '/img/2019/03/image-1-10.png',
                '/img/2019/03/image-2-10.png',
                '/img/2019/03/image-3-8.png',
                '/img/2019/03/image-4-6.png',
                '/img/2019/03/image-5-6.png',
                '/img/2019/03/image-6-6.png',
                '/img/2019/03/image-7-3.png',
                '/img/2019/03/image-10-1.png',
                '/img/2019/03/image-11-1.png',
                '/img/2019/03/image-12.png',

              ]}  
            />
            <hr />
            <h3 className='is-article'>ЦЕХ ПО ПРОИЗВОДСТВУ И ХРАНЕНИЮ МЯСНЫХ ПОЛУФАБРИКАТОВ «ЦАРИЦЫНСКИЕ КОЛБАСЫ», ул. Рыбинская, г.Астрахань.</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование и строительство объекта. Оснащение промышленным холодильным оборудованием: 2 низкотемпературные камеры, для хранения колбас и полуфабрикатов общей площадью более 1000 кв.м.
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/image-1-15-300x225.png',
                '/img/2019/03/image-2-15-300x225.png',
                '/img/2019/03/image-3-13-300x225.png',
                '/img/2019/03/image-4-11-300x225.png',
                '/img/2019/03/image-5-8-300x225.png',
                '/img/2019/03/image-6-8-300x225.png',
                '/img/2019/03/image-7-4-300x225.png',
                '/img/2019/03/image-8-3-300x225.png'

              ]}
              modalImges={[
                '/img/2019/03/image-1-15.png',
                '/img/2019/03/image-2-15.png',
                '/img/2019/03/image-3-13.png',
                '/img/2019/03/image-4-11.png',
                '/img/2019/03/image-5-8.png',
                '/img/2019/03/image-6-8.png',
                '/img/2019/03/image-7-4.png',
                '/img/2019/03/image-8-3.png',
              ]}
            />
            <hr />
            <h3 className='is-article'>ЦЕХ ПО ПРОИЗВОДСТВУ И ХРАНЕНИЮ МЯСНЫХ ПОЛУФАБРИКАТОВ «ЦАРИЦЫНСКИЕ КОЛБАСЫ» — 2АЯ ОЧЕРЕДЬ, ул. Рыбинская, г.Астрахань.</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование и строительство объекта. Оснащение промышленным холодильным оборудованием: 3 холодильные камеры, для хранения колбас и полуфабрикатов т низкотемпературная камера. Общая площадь камер 770 кв.м.
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/image-1-16-300x200.png',
                '/img/2019/03/image-2-16-300x200.png',
                '/img/2019/03/image-3-14-300x200.png',
                '/img/2019/03/image-4-12-300x200.png',
              ]}
              modalImges={[
                '/img/2019/03/image-1-16.png',
                '/img/2019/03/image-2-16.png',
                '/img/2019/03/image-3-14.png',
                '/img/2019/03/image-4-12.png',
              ]}
            />
            <hr />
            <h3 className='is-article'>СКЛАД ПО ХРАНЕНИЮ ЗАМОРОЖЕННОЙ ПРОДУКЦИИ, ИП ДЖУМАТОВ Ш.У., г. Астрахань, Приволжский р-он, Началовское шоссе</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование и строительство объекта. Оснащение промышленным холодильным оборудованием: установлены низкотемпературные морозильные камеры (- 18°C), общей площадью 600 кв.м.
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/1-15-300x200.jpg',
                '/img/2019/03/3-14-300x200.jpg',
                '/img/2019/03/4-11-300x200.jpg',
                '/img/2019/03/11-3-300x194.jpg',
              ]}
              modalImges={[
                '/img/2019/03/modal/1-15.jpg',
                '/img/2019/03/modal/3-14.jpg',
                '/img/2019/03/modal/4-11.jpg',
                '/img/2019/03/modal/11-3.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>ЛОГИСТИЧЕСКИЙ ЦЕНТР ООО «ВИКАЛИНА», г. Знаменск</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование и строительство объекта. Оснащение промышленным холодильным оборудованием.
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/image-1-11-300x226.png',
                '/img/2019/03/image-2-11-300x226.png',
                '/img/2019/03/image-3-9-300x225.png',
                '/img/2019/03/image-4-7-300x225.png',
              ]}
              modalImges={[
                '/img/2019/03/modal/image-1-11.png',
                '/img/2019/03/modal/image-2-11.png',
                '/img/2019/03/modal/image-3-9.png',
                '/img/2019/03/modal/image-4-7.png',
              ]}
            />
            <hr />
            <h3 className='is-article'>РЫБОПЕРЕРАБАТЫВАЮЩИЙ КОМПЛЕКС, с. Цветное</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование. Изготовление и монтаж металлоконструкций и сэндвич панелей. Оснащение промышленным холодильным оборудованием. Установка топинговых полов. Общая площадь здания 1400 м2
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/rybopererabotka002-300x200.jpg',
                '/img/2019/03/rybopererabotka004-300x200.jpg',
                '/img/2019/03/Цветное-рыбоперерабатывающий-300x200.jpg',
              ]}
              modalImges={[
                '/img/2019/03/rybopererabotka002.jpg',
                '/img/2019/03/rybopererabotka004.jpg',
                '/img/2019/03/Цветное-рыбоперерабатывающий.jpg',

              ]}
            />
            <hr />
            <h3 className='is-article'>БАКРЕУ, Астраханская область</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование и строительство объекта ПОД КЛЮЧ. Оснащение промышленным холодильным оборудованием. Общая площадь здания 2520 м2
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/bakreo1-300x169.jpg',
                '/img/2019/03/bakreo2-300x169.jpg',
                '/img/2019/03/bakreo3-300x200.jpg',
                '/img/2019/03/bakreo4-300x200.jpg',
                '/img/2019/03/bakreo5-300x200.jpg',
                '/img/2019/03/bakreo6-300x200.jpg',
                '/img/2019/03/bakreo7-300x169.jpg',
                '/img/2019/03/bakreo8-300x200.jpg',
                '/img/2019/03/bakreo9-300x200.jpg',
                '/img/2019/03/IMG_20180323_140434-300x200.jpg',
                '/img/2019/03/IMG_20180323_140649-300x200.jpg',
                '/img/2019/03/IMG_20180323_141350-300x200.jpg',
              ]}
              modalImges={[
                '/img/2019/03/bakreo1.jpg',
                '/img/2019/03/bakreo2.jpg',
                '/img/2019/03/bakreo3.jpg',
                '/img/2019/03/bakreo4.jpg',
                '/img/2019/03/bakreo5.jpg',
                '/img/2019/03/bakreo6.jpg',
                '/img/2019/03/bakreo7.jpg',
                '/img/2019/03/bakreo8.jpg',
                '/img/2019/03/bakreo9.jpg',
                '/img/2019/03/bakreo1.jpg',
                '/img/2019/03/IMG_20180323_140434.jpg',
                '/img/2019/03/IMG_20180323_140649.jpg',
                '/img/2019/03/IMG_20180323_141350.jpg',

              ]}
            />
            <hr />
            <h3 className='is-article'>ОВОЩЕХРАНИЛИЩЕ — 20 х 73,8 м. «ИРРИКО», Ставропольский край, Ипатовский район, поселок Винодельненский</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование и строительство овощехранилища навального типа.
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/image-1-7-300x169.png',
                '/img/2019/03/image-2-7-300x169.png',
                '/img/2019/03/image-3-6-300x169.png',
                '/img/2019/03/image-4-4-300x169.png',
                '/img/2019/03/image-5-4-300x169.png',
                '/img/2019/03/image-6-4-300x169.png',
                '/img/2019/03/image-7-1-300x169.png',
                '/img/2019/03/image-8-300x169.png',
                '/img/2019/03/image-9-300x169.png',
                '/img/2019/03/image-10-300x169.png',
                '/img/2019/03/image-11-300x169.png',
                '/img/2019/03/IMG_20170727_121428-300x169.jpg',
                '/img/2019/03/IMG_20170804_094304-300x169.jpg',
                '/img/2019/03/IMG_20170804_110958-300x169.jpg',
                '/img/2019/03/IMG_20170806_110513-300x169.jpg',
                '/img/2019/03/IMG_20170927_163513-300x169.jpg',
              ]}
              modalImges={[
                '/img/2019/03/image-1-7.png',
                '/img/2019/03/image-2-7.png',
                '/img/2019/03/image-3-6.png',
                '/img/2019/03/image-4-4.png',
                '/img/2019/03/image-5-4.png',
                '/img/2019/03/image-6-4.png',
                '/img/2019/03/image-7-1-768x432.png',
                '/img/2019/03/image-8-768x432.png',
                '/img/2019/03/image-9-768x432.png',
                '/img/2019/03/image-10.png',
                '/img/2019/03/image-11.png',
                '/img/2019/03/IMG_20170727_121428.jpg',
                '/img/2019/03/IMG_20170804_094304.jpg',
                '/img/2019/03/IMG_20170804_110958.jpg',
                '/img/2019/03/IMG_20170806_110513.jpg',
                '/img/2019/03/IMG_20170927_163513.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>ООО «ВСТК»</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование и строительство под ключ. Оснащение промышленным холодильным оборудованием. Общая площадь здания 2520 м2.
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/vstk1-300x200.jpg',
                '/img/2019/03/vstk2-300x200.jpg',
                '/img/2019/03/vstk3-300x200.jpg',
                '/img/2019/03/vstk4-300x200.jpg',
                '/img/2019/03/vstk5-300x200.jpg',
                '/img/2019/03/vstk6-300x200.jpg',
              ]}
              modalImges={[
                '/img/2019/03/vstk1.jpg',
                '/img/2019/03/vstk2.jpg',
                '/img/2019/03/vstk3.jpg',
                '/img/2019/03/vstk4.jpg',
                '/img/2019/03/vstk5.jpg',
                '/img/2019/03/vstk6.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>УФСИН, г. Элиста, Республика Калмыкия</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/IMG_20181209_110604-300x200.jpg',
                '/img/2019/03/IMG_20181209_110621-300x200.jpg',
                '/img/2019/03/IMG_20181209_110748-300x200.jpg',
                '/img/2019/03/IMG_20181221_112722-300x200.jpg',
                '/img/2019/03/IMG_20181221_112741-300x200.jpg',
                '/img/2019/03/IMG_20181221_125035-300x200.jpg',
                '/img/2019/03/IMG_20181221_130517-300x200.jpg'
              ]}
              modalImges={[
                '/img/2019/03/IMG_20181209_110604.jpg',
                '/img/2019/03/IMG_20181209_110621.jpg',
                '/img/2019/03/IMG_20181209_110748.jpg',
                '/img/2019/03/IMG_20181221_112722.jpg',
                '/img/2019/03/IMG_20181221_112741.jpg',
                '/img/2019/03/IMG_20181221_125035.jpg',
                '/img/2019/03/IMG_20181221_130517.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>ОПТОВО-РОЗНИЧНАЯ БАЗА «ДИЭЛ», с. Солянка, Астраханская область</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование и строительство, кровельные и фасадные работы. Оснащение вентиляционным оборудованием. Установка камер для хранения продовольственной продукции — площадью 1700 кв.м.
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/image-1-5-1-300x169.png',
                '/img/2019/03/image-2-5-1-300x169.png',
                '/img/2019/03/image-3-3-300x169.png',
                '/img/2019/03/image-4-3-1-300x200.png',
                '/img/2019/03/image-5-2-300x200.png',
                '/img/2019/03/image-6-1-1-300x200.png',
                '/img/2019/03/IMG_20160423_113223-300x200.jpg',
                '/img/2019/03/IMG_20160426_165730-300x200.jpg',
                '/img/2019/03/IMG_20160426_170029-300x200.jpg',
                '/img/2019/03/IMG_20160427_155212-300x200.jpg'
              ]}
              modalImges={[
                '/img/2019/03/image-1-5-1.png',
                '/img/2019/03/=image-2-5-1.png',
                '/img/2019/03/=image-3-3.png',
                '/img/2019/03/image-4-3-1.png',
                '/img/2019/03/image-5-2.png',
                '/img/2019/03/image-6-1-1.png',
                '/img/2019/03/IMG_20160423_113223.jpg',
                '/img/2019/03/IMG_20160426_165730.jpg',
                '/img/2019/03/IMG_20160426_170029.jpg',
                '/img/2019/03/IMG_20160427_155212.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>«ЦАРИЦИНО», г.Волгоград, Волгоградская область</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/P1030827-300x200.jpg',
                '/img/2019/03/P1030828-300x200.jpg',
                '/img/2019/03/P1030829-300x200.jpg',

              ]}
              modalImges={[
                '/img/2019/03/P1030827.jpg',
                '/img/2019/03/P1030828.jpg',
                '/img/2019/03/P1030829.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>ЛОГИСТИЧЕСКИЙ ЦЕНТР ООО «ЗАВЕТНОЕ», Ставропольский край, с. Новозаведенное</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование и строительство трех овощехранилищ навального и контейнерного типа, технологического корпуса с навесами по переработке овощей, АБК, тарного цеха, КПП, весовой и прочих технических помещений. Поставка и монтаж всей необходимой сельскохозяйственной техники. Установка холодильного оборудования объем 5000 т.
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/1-10-300x226.jpg',
                '/img/2019/03/3-8-300x214.jpg',
                '/img/2019/03/4-7-300x228.jpg',
                '/img/2019/03/5-3-300x226.jpg',
                '/img/2019/03/6skGdJnXvxg-300x226.jpg',
                '/img/2019/03/9-226x300.jpg',
                '/img/2019/03/10-1-300x226.jpg',
                '/img/2019/03/11-1-226x300.jpg',
                '/img/2019/03/12-300x226.jpg',
                '/img/2019/03/13-300x226.jpg',
                '/img/2019/03/DSC_0640-300x200.jpg',
                '/img/2019/03/DSC_0641-300x200.jpg',
                '/img/2019/03/DSC_0642-300x200.jpg',
                '/img/2019/03/zavetnoe1-300x199.jpg',
                '/img/2019/03/zavetnoe4-300x199.jpg',
                '/img/2019/03/zavetnoe5-300x199.jpg',
                '/img/2019/03/zavetnoe6-300x199.jpg',
                '/img/2019/03/zavetnoe7-300x199.jpg',
              ]}
              modalImges={[
                '/img/2019/03/1-10.jpg',
                '/img/2019/03/3-8.jpg',
                '/img/2019/03/4-7.jpg',
                '/img/2019/03/5-3.jpg',
                '/img/2019/03/6skGdJnXvxg.jpg',
                '/img/2019/03/9.jpg',
                '/img/2019/03/10-1.jpg',
                '/img/2019/03/11-1.jpg',
                '/img/2019/03/12.jpg',
                '/img/2019/03/13.jpg',
                '/img/2019/03/DSC_0640.jpg',
                '/img/2019/03/DSC_0641.jpg',
                '/img/2019/03/DSC_0642.jpg',
                '/img/2019/03/zavetnoe1.jpg',
                '/img/2019/03/zavetnoe4.jpg',
                '/img/2019/03/zavetnoe5.jpg',
                '/img/2019/03/zavetnoe6.jpg',
                '/img/2019/03/zavetnoe7.jpg',
              
              ]}
            />
            <hr />
            <h3 className='is-article'>ОВОЩЕХРАНИЛИЩЕ ОБЪЕМОМ НА 6000 т. ООО «УЛЬЯНОВЕЦ», Ставропольский край, п. Новоульяновский</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование и строительство овощехранилищ навального и контейнерного типа и технологического корпуса по переработке овощей. Поставка и монтаж всей необходимой сельскохозяйственной техники и оборудования по переработке овощей. Установка холодильного оборудования объем 3000 т.
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/image-1-300x198.jpg',
                '/img/2019/03/image-2-300x198.jpg',
                '/img/2019/03/image-3-624x413.jpg',
                '/img/2019/03/image-4-300x198.jpg',
                '/img/2019/03/image-5-300x198.jpg',
              ]}
              modalImges={[
                '/img/2019/03/image-1.jpg',
                '/img/2019/03/image-2.jpg',
                '/img/2019/03/image-3-624x413.jpg',
                '/img/2019/03/image-4.jpg',
                '/img/2019/03/image-5.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>«АЛЬФА-ПОРТ». г. Астрахань, Астраханская область</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/IMG_20180806_105732-300x200.jpg',
                '/img/2019/03/IMG_20180814_152450-300x200.jpg',
                '/img/2019/03/IMG_20181022_134236-300x200.jpg',
                '/img/2019/03/IMG_20181024_111051-300x200.jpg',
                '/img/2019/03/IMG_20181024_143341-300x200.jpg',
                '/img/2019/03/IMG_20181116_091146-300x200.jpg',
                '/img/2019/03/IMG_20181116_111641-300x200.jpg',

              ]}
              modalImges={[
                '/img/2019/03/IMG_20180806_105732.jpg',
                '/img/2019/03/IMG_20180814_152450.jpg',
                '/img/2019/03/IMG_20181022_134236.jpg',
                '/img/2019/03/IMG_20181024_111051.jpg',
                '/img/2019/03/IMG_20181024_143341.jpg',
                '/img/2019/03/IMG_20181116_091146.jpg',
                '/img/2019/03/IMG_20181116_111641.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>ОВОЩЕХРАНИЛИЩЕ ОБЪЕМОМ НА 2000 т. Харабалинский район</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/image-1-1-300x225.png',
                '/img/2019/03/image-2-1-300x225.png',
                '/img/2019/03/image-3-1-300x225.png',
              ]}
              modalImges={[
                '/img/2019/03/image-1-1.png',
                '/img/2019/03/image-2-1.png',
                '/img/2019/03/image-3-1.png',
              ]}
            />
            <hr />
            <h3 className='is-article'>ЛУКОХРАНИЛИЩЕ ОБЪЕМОМ НА 2000 т. с. Золотуха, Астраханская область, Ахтубинский район</h3>
            <p>
              <em>Выполненные работы:</em>
              <br />
              Проектирование и строительство трех овощехранилищ навального типа. Оснащение системами климат-контроля.
            </p>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/2-13-300x225.jpg',
                '/img/2019/03/3-11-300x225.jpg',
                '/img/2019/03/5-4-300x225.jpg',
                '/img/2019/03/6-3-300x225.jpg',
                '/img/2019/03/8-2-300x225.jpg',
                '/img/2019/03/10-2-300x225.jpg',
                '/img/2019/03/11-2-300x225.jpg',
                '/img/2019/03/12-1-300x225.jpg',
                '/img/2019/03/14-1-300x225.jpg',
                '/img/2019/03/15-1-300x225.jpg',
                '/img/2019/03/16-1-300x225.jpg',
                '/img/2019/03/17-1-300x225.jpg',
                '/img/2019/03/19-300x225.jpg',
                '/img/2019/03/image-2-1-1-300x225.png',
                '/img/2019/03/image-3-1-1-300x225.png',
                '/img/2019/03/image-4-300x225.png',
                '/img/2019/03/image-6-300x225.png',
              ]}
              modalImges={[
                '/img/2019/03/2-13.jpg',
                '/img/2019/03/3-11.jpg',
                '/img/2019/03/5-4.jpg',
                '/img/2019/03/6-3.jpg',
                '/img/2019/03/8-2.jpg',
                '/img/2019/03/10-2.jpg',
                '/img/2019/03/11-2.jpg',
                '/img/2019/03/12-1.jpg',
                '/img/2019/03/14-1.jpg',
                '/img/2019/03/15-1.jpg',
                '/img/2019/03/16-1.jpg',
                '/img/2019/03/17-1.jpg',
                '/img/2019/03/19.jpg',
                '/img/2019/03/image-2-1-1.png',
                '/img/2019/03/image-3-1-1.png',
                '/img/2019/03/image-4.png',
                '/img/2019/03/image-6.png',
              ]}
            />
            <hr />
            <h3>ЗЕРНОХРАНИЛИЩЕ ОБЪЕМОМ НА 4000 т. «ПОРТ АРМАДА», Астраханская обл.</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/image-2-2-300x225.png',
                '/img/2019/03/image-3-2-300x225.png',
                '/img/2019/03/image-4-1-300x225.png',
                '/img/2019/03/image-5-1-300x225.png',
                '/img/2019/03/image-6-1-300x225.png',

              ]}
              modalImges={[
                '/img/2019/03/image-2-2.png',
                '/img/2019/03/image-3-2.png',
                '/img/2019/03/image-4-1.png',
                '/img/2019/03/image-5-1.png',
                '/img/2019/03/image-6-1.png',

              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ ОБЪЕМОМ НА 3000 т. «ВОЛГО-ПОРТ», Астраханская обл.</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/1-12-300x200.jpg',
                '/img/2019/03/2-12-300x200.jpg',
                '/img/2019/03/3-10-300x200.jpg',
                '/img/2019/03/4-9-300x200.jpg',
                '/img/2019/03/IMG_2550-300x200.jpg',
                '/img/2019/03/IMG_2552-300x200.jpg',
                '/img/2019/03/IMG_2580-300x200.jpg',
                '/img/2019/03/IMG_2589-300x200.jpg',
                '/img/2019/03/IMG_2592-300x200.jpg',
              ]}
              modalImges={[
                '/img/2019/03/1-12.jpg',
                '/img/2019/03/2-12.jpg',
                '/img/2019/03/3-10.jpg',
                '/img/2019/03/4-9.jpg',
                '/img/2019/03/IMG_2550.jpg',
                '/img/2019/03/IMG_2552.jpg',
                '/img/2019/03/IMG_2580.jpg',
                '/img/2019/03/IMG_2589.jpg',
                '/img/2019/03/IMG_2592.jpg',
              ]}
            />
            <hr />
            <h3>ЗЕРНОХРАНИЛИЩЕ «ВОЛГО-ПОРТ», 2-Я ОЧЕРЕДЬ, Астраханская обл.</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/image-6-3-300x169.png',
                '/img/2019/03/image-5-3-300x169.png',
                '/img/2019/03/image-4-3-300x169.png',
                '/img/2019/03/image-3-5-300x169.png',
                '/img/2019/03/image-2-5-300x169.png',
                '/img/2019/03/image-1-5-300x169.png',

              ]}
              modalImges={[
                '/img/2019/03/image-6-3.png',
                '/img/2019/03/image-5-3.png',
                '/img/2019/03/image-4-3.png',
                '/img/2019/03/image-3-5.png',
                '/img/2019/03/image-2-5.png',
                '/img/2019/03/image-1-5.png',

              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ «ВОЛГО-ПОРТ», 3-Я ОЧЕРЕДЬ, Астраханская обл.</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/IMG_20180425_132534-300x200.jpg',
                '/img/2019/03/IMG_20180424_162524-300x200.jpg',
                '/img/2019/03/IMG_20180403_163013-300x200.jpg',
                '/img/2019/03/IMG_20180403_094741-300x200.jpg',
                '/img/2019/03/IMG_20180403_092723-300x200.jpg',
                '/img/2019/03/IMG_20180324_120550-300x200.jpg',
                '/img/2019/03/IMG_20180317_111731-300x200.jpg',
              ]}
              modalImges={[
                '/img/2019/03/IMG_20180425_132534.jpg',
                '/img/2019/03/IMG_20180424_162524.jpg',
                '/img/2019/03/IMG_20180403_163013.jpg',
                '/img/2019/03/IMG_20180403_094741.jpg',
                '/img/2019/03/IMG_20180403_092723.jpg',
                '/img/2019/03/IMG_20180324_120550.jpg',
                '/img/2019/03/IMG_20180317_111731.jpg',

              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ. ООО «КАСПИЙ АГРО», ул. Пушкина 52 В, Астраханская обл.</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/image-1-6-300x200.png',
                '/img/2019/03/image-2-6-300x200.png',
              ]}
              modalImges={[
                '/img/2019/03/image-1-6.png',
                '/img/2019/03/image-2-6.png',
              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ ИП МАСЛЕННИКОВ, г. Ахтубинск, Астраханская область</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/IMG_20160704_131539-300x200.jpg',
                '/img/2019/03/IMG_20160629_101321-300x200.jpg',
                '/img/2019/03/IMG_20160623_093113-300x200.jpg',
                '/img/2019/03/IMG_20160623_093055-300x200.jpg',
                '/img/2019/03/2-6-300x200.jpg',
                '/img/2019/03/1-6-300x200.jpg',
              ]}
              modalImges={[
                '/img/2019/03/IMG_20160704_131539.jpg',
                '/img/2019/03/IMG_20160629_101321.jpg',
                '/img/2019/03/IMG_20160623_093113.jpg',
                '/img/2019/03/IMG_20160623_093055.jpg',
                '/img/2019/03/2-6.jpg',
                '/img/2019/03/1-6.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>ОВОЩЕХРАНИЛИЩЕ ИП ЩЕДРИН, станица Гафитское, Ставропольский край</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/IMG_20160723_174446-300x200.jpg',
                '/img/2019/03/IMG_20160723_190332-300x200.jpg',
                '/img/2019/03/IMG_20160723_181635-300x200.jpg',
                '/img/2019/03/IMG_20160723_174456-300x200.jpg',
                '/img/2019/03/IMG_20160723_181719-300x200.jpg',
                '/img/2019/03/IMG_20160723_182053-300x200.jpg',
              ]}
              modalImges={[
                '/img/2019/03/IMG_20160723_174446.jpg',
                '/img/2019/03/IMG_20160723_190332.jpg',
                '/img/2019/03/IMG_20160723_181635.jpg',
                '/img/2019/03/IMG_20160723_174456.jpg',
                '/img/2019/03/IMG_20160723_181719.jpg',
                '/img/2019/03/IMG_20160723_182053.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>СКЛАД МЕТАЛЛА ИП СТОЛЯРОВ, Кутум, Астраханская область</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/IMG_20180706_091338-300x200.jpg',
                '/img/2019/03/IMG_20180706_091108-300x200.jpg',
                '/img/2019/03/IMG_20180627_164853-300x200.jpg',
                '/img/2019/03/IMG_20180724_115613-300x200.jpg',
                '/img/2019/03/IMG_20180808_095849-300x200.jpg',
              ]}
              modalImges={[
                '/img/2019/03/IMG_20180706_091338.jpg',
                '/img/2019/03/IMG_20180706_091108.jpg',
                '/img/2019/03/IMG_20180627_164853.jpg',
                '/img/2019/03/IMG_20180724_115613.jpg',
                '/img/2019/03/IMG_20180808_095849.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ ПОРТ СЕТ «АРМАДА», г. Астрахань</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/IMG_2225-300x200.jpg',
                '/img/2019/03/IMG_2224-300x200.jpg',
                '/img/2019/03/IMG_2211-300x200.jpg',
                '/img/2019/03/IMG_2181-300x200.jpg',
                '/img/2019/03/IMG_2154-300x200.jpg',
              ]}
              modalImges={[
                '/img/2019/03/IMG_2225.jpg',
                '/img/2019/03/IMG_2224.jpg',
                '/img/2019/03/IMG_2211.jpg',
                '/img/2019/03/IMG_2181.jpg',
                '/img/2019/03/IMG_2154.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ ИП ДЕРЕБАСОВ, Астраханская область</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/IMG_20170623_134546-300x200.jpg',
                '/img/2019/03/IMG_20170623_134338-300x200.jpg',
                '/img/2019/03/IMG_20170621_161535-300x200.jpg',
                '/img/2019/03/IMG_20170621_154923-300x200.jpg',
                '/img/2019/03/IMG_20170601_155459-300x200.jpg',
                '/img/2019/03/IMG_20170601_154723-300x200.jpg',
              ]}
              modalImges={[
                '/img/2019/03/IMG_20170623_134546.jpg',
                '/img/2019/03/IMG_20170623_134338.jpg',
                '/img/2019/03/IMG_20170621_161535.jpg',
                '/img/2019/03/IMG_20170621_154923.jpg',
                '/img/2019/03/IMG_20170601_155459.jpg',
                '/img/2019/03/IMG_20170601_154723.jpg',
              ]}
            />
            <hr />
            <h3 className='is-article'>СКЛАД ДЛЯ ТЕХНИКИ «ЗАВОД ТОМАТОВ», с. Вольное, Харабалинский район</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/2019/03/IMG_20160111_153110-300x200.jpg',
                '/img/2019/03/IMG_20160111_154115-300x200.jpg',
                '/img/2019/03/IMG_20160111_153812-300x200.jpg',
              ]}
              modalImges={[
                '/img/2019/03/IMG_20160111_153110.jpg',
                '/img/2019/03/IMG_20160111_154115.jpg',
                '/img/2019/03/IMG_20160111_153812.jpg',
                
              ]}
            />
          </div>
        </div>
      </div>
    </article>
  )
}