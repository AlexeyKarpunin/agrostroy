import Form from './Form';

export default function PaperWork() {
  return (
    <article className='page-section is-article'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h1 className='is-section is-section-fix'>Оформление документов</h1>
        </div>
        <p>Мы подготовим для Вас всю необходимую документацию для получения разрешения на строительство и узаконение.</p>
        <p>Узаконение постройки можно совершить как перед строительством, так и непосредственно после него. Любая манипуляция с землей должна быть подотчетна властям и оформлена по всем правилам. Подведение коммуникаций, электричества, согласование на установку котлов, газового оборудования – для всего этого требуются соответствующие разрешения, которые выдаются в случае надлежащим образом оформленной документации. Бюрократические хлопоты не каждому под силу, особенно если знаний в этой сфере не достаточно. Ошибки неминуемо приведут к штрафам при проведении экспертизы со стороны контролирующих органов.</p>
        <p>
          Наш опыт и навыки в оформлении подобного рода документации значительно облегчат процесс получения необходимого результата. Наши специалисты подготовят
          <strong> весь комплект документов</strong>
          {' '}
          для подачи на разрешение на строительство и узаконение. Каждый проект индивидуален.
          <strong>Получите бесплатную консультацию</strong>
          {' '}
          по узаконению, свяжитесь с нашим менеджером, чтобы обговорить все детали.
        </p>
        <Form />
      </div>
    </article>
  )
}