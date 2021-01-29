import Link from "next/link";

export default function TopProject ({text}) {
  return (
    <div className='tabs__section is-active' id='typical_designs'>
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
            <div className='content__action'>
              <Link href='/types-projects'><a className='btn is-primary'>{text.btnText}</a></Link>
              </div>
          </div>
        </div>

        <div className='column'>
          <div className='container'>
            <div className='circle with-gradient' />
            <img className='in-tab-section' src='https://agrostroitel.ru/wp-content/uploads/2019/08/Типовые-проекты.png' alt='Типовые проекты' />
          </div>
        </div>

      </div>
    </div>
  )
}