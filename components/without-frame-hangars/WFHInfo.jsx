export default function WFHInfo ({text}) {
  return (
    <div className='page-section'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section is-section-fix'>{text.header}</h2>
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