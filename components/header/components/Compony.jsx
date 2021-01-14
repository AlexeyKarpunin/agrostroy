export default function Company(){
  return (
    <div className='company'>
      <div className='company__title-wrapper'>
        <div className='company__title'>
          <span className='text is-secondary'>Агростроитель</span>
          <span className='text is-primary'>Юг</span>
          {/* {% if globus.language == 'ru' %}
          <span class="text is-secondary">Агростроитель</span><span class="text is-primary">Юг</span>
        {% elseif globus.language == 'en' %}
          <span class="text is-secondary">Agrostroitel</span><span class="text is-primary">Ug</span>
        {% endif %} */}
        </div>
      </div>
      <p className='company__subtitle'>
        Строительство объектов сельхоз назначения
        <q className='text is-q is-primary is-nobr'>Под ключ</q>
        {/* {% if globus.language == 'ru' %}
      Строительство объектов сельхоз назначения <q class="text is-q is-primary is-nobr">Под ключ</q>
    {% elseif globus.language == 'en' %}
      Construction of agricultural facilities <q class="text is-q is-primary is-nobr">Turn key</q>
    {% endif %} */}
      </p>
    </div>
  );
} 