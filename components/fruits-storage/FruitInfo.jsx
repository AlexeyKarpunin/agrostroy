export default function FruitInfo({text}) {
  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>{text.header}</h2>
        </div>
        <div className='page-section__body'>
          <div className='other-page-section'>
            <p>{text.content[0]}</p>
            <p>{text.content[1]}</p>
            <p>{text.content[2]}</p>

          </div>
        </div>
      </div>
    </div>
  )
}