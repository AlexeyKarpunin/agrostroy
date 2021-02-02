import StoreSlaider from './StoreSlaider';

export default function StorageInfo ({text}) {

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
            <p>{text.content[2]}</p>
            <p>{text.content[3]}</p>
            <hr />
            <h3>{text.headers[0]}</h3>
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
            <p>{text.content[4]}</p>
            <hr />
            <h3 className='font_2'>{text.headers[0]}</h3>
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
          </div>
        </div>
      </div>
    </div>
  )
}