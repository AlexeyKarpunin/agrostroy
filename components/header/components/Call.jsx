export default function Call () {
  return (
    <a href='tel:88005115060' className='call'>
      <div className='call__value-inner'>
        <span className="icon is-primary {% if iconSize == 'large' %}is-large{% endif %} is-phone">
          <svg>
            <use xlinkHref='/img/iconsprites.svg#phone' />
          </svg>
        </span>
        <span className='call__value in-header'>
          <span className='call__label'>Наш телефон:</span>
          <span className='call__numbers'>8 800 511 5060</span>
          <span className='call__action in-header'>
            Звонок бесплатный
            {/* {% if globus.language == 'ru' %}
		Звонок бесплатный
	{% elseif globus.language == 'en' %}
		Free call
	{% endif %} */}
          </span>
        </span>
      </div>
    </a>
  );
}