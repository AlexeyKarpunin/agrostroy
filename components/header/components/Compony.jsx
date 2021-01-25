/* eslint-disable react/prop-types */
export default function Company(props){
  const {city, language} = props;
  return (
    <div className='company'>
      <div className='company__title-wrapper'>
        <div className='company__title'>
          <span className='text is-secondary'>{city[language].header.compani[0]}</span>
          <span className='text is-primary'>{city[language].header.compani[1]}</span>
         
        </div>
      </div>
      <p className='company__subtitle'>
        {city[language].header.companiDis[0]}
&nbsp;
        <q className='text is-q is-primary is-nobr'>{city[language].header.companiDis[1]}</q>
      </p>
    </div>
  );
} 