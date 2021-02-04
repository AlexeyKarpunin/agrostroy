import StoreSlaider from './storage/StoreSlaider';

export default function FinisedProjects () {

  const options = {
    items: 3,
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>УФСИН, г. Элиста, Республика Калмыкия</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>«ЦАРИЦИНО», г.Волгоград, Волгоградская область</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>«АЛЬФА-ПОРТ». г. Астрахань, Астраханская область</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>ОВОЩЕХРАНИЛИЩЕ ОБЪЕМОМ НА 2000 т. Харабалинский район</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
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
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3>ЗЕРНОХРАНИЛИЩЕ ОБЪЕМОМ НА 4000 т. «ПОРТ АРМАДА», Астраханская обл.</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ ОБЪЕМОМ НА 3000 т. «ВОЛГО-ПОРТ», Астраханская обл.</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3>ЗЕРНОХРАНИЛИЩЕ «ВОЛГО-ПОРТ», 2-Я ОЧЕРЕДЬ, Астраханская обл.</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ «ВОЛГО-ПОРТ», 3-Я ОЧЕРЕДЬ, Астраханская обл.</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ. ООО «КАСПИЙ АГРО», ул. Пушкина 52 В, Астраханская обл.</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ ИП МАСЛЕННИКОВ, г. Ахтубинск, Астраханская область</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>ОВОЩЕХРАНИЛИЩЕ ИП ЩЕДРИН, станица Гафитское, Ставропольский край</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>СКЛАД МЕТАЛЛА ИП СТОЛЯРОВ, Кутум, Астраханская область</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ ПОРТ СЕТ «АРМАДА», г. Астрахань</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>ЗЕРНОХРАНИЛИЩЕ ИП ДЕРЕБАСОВ, Астраханская область</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
            <hr />
            <h3 className='is-article'>СКЛАД ДЛЯ ТЕХНИКИ «ЗАВОД ТОМАТОВ», с. Вольное, Харабалинский район</h3>
            <StoreSlaider 
              options={options}
              events={events}
              imges={[
                '/img/sliders/storageS1/IMG_20181209_110604-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110621-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181209_110748-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112722-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_112741-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_125035-300x200.jpg',
                '/img/sliders/storageS1/IMG_20181221_130517-300x200.jpg'
              ]}
            />
          </div>
        </div>
      </div>
    </article>
  )
}