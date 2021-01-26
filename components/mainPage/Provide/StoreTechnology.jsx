export default function StoreTechnology({text}) {
  return (
    <div className='tabs__section is-active' id='storage_technology'>
      <div className='column__wrapper is-valign-center'>

        <div className='column is-tab-content'>
          <div className='content is-tab'>
            <div className='content__title'>
              <h3 className='is-content'>{text.header}</h3>
            </div>
            <div className='content__text'>
              <p>
                {text.content[0]}
              </p>
            </div>
            <div className='content__action'><a className='btn is-primary' href='https://agrostroitel.ru/tehnologii-hraneniya/'>{text.btnText}</a></div>
          </div>
        </div>

        <div className='column'>
          <div className='container'>
            <div className='circle with-gradient' />
            <img className='in-tab-section' src='https://agrostroitel.ru/wp-content/uploads/2019/08/box.png' alt='Технологии хранения' />
          </div>
        </div>

      </div>
    </div>
  )
}