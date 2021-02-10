
import Form from './Form'; 

export default function Calculation () {
  return (
    <article className='page-section is-article'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h1 className='is-section is-section-fix'>Предварительный расчет стоимости</h1>
        </div>
        <Form />
      </div>
    </article>
  )
}