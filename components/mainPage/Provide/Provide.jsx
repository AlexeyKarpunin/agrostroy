import { useState } from 'react';
import Cost from './Cost';
import Documents from './Documents';
import ReadyProject from './ReadyProjects';
import StoreTechnology from './StoreTechnology';
import TopProject from './TopProject';

const NAMES_OF_COMPONENTS = {
  topProject: 'TOP',
  documents: 'DOC',
  readyProject: 'Ready',
  storeTechnology: 'storeTech',
  cost: 'cost',

}

export default function Provide ({city, language}) {
  const {topProject, documents, readyProject, storeTechnology, cost} = NAMES_OF_COMPONENTS;
  const [component, setComponent] = useState(cost);
  const  text = city[language].mainPage.provide;
  
  function ComponentRender () {
    switch(component) {
      case topProject:
      return <TopProject text={text.standart} />
      case documents:
      return <Documents text={text.documents} />
      case readyProject:
      return <ReadyProject text={text.ready} />
      case storeTechnology:
      return <StoreTechnology text={text.storageTechnology} />
      case cost:
      return <Cost text={text.cost} />
      default:
        return <Cost text={text.cost} />
    }
  }
 
  function changeContent (e, status) {
    e.preventDefault();
    setComponent(status);
  }
  
  return (
    <div className='page-section service'>
      <div className='page-section__inner'>
        <div className='page-section__title'>
          <h2 className='is-section'>

            {text.header}
    	
          </h2>
        </div>
        <div className='page-section__body'>
          <div className='tabs__wrapper'>
            <div className='tabs'>
              <div className='tabs__bar-wrapper'>
                <ul className='tabs__bar'>
                  <li className='tabs__item'>
                    <a 
                      className={`btn is-fit is-tab js-tabs__link ${component === cost ? 'is-active' : null }`}
                      onClick={(e) => changeContent(e, cost)}
                      href='/'
                    >
                      {text.linkList[0]}
                    </a>
                  </li>
                  <li className='tabs__item'>
                    <a 
                      className={`btn is-fit is-tab js-tabs__link ${component === storeTechnology ? 'is-active' : null }`} 
                      onClick={(e) => changeContent(e, storeTechnology)}
                      href='/'
                    >
                      {text.linkList[1]}
                    </a>
                  </li>
                  <li className='tabs__item'>
                    <a
                      className={`btn is-fit is-tab js-tabs__link ${component === documents ? 'is-active' : null }`} 
                      onClick={(e) => changeContent(e, documents)}

                      href='/'
                    >
                      {text.linkList[2]}
                    </a>
                  </li>
                  <li className='tabs__item'>
                    <a 
                      className={`btn is-fit is-tab js-tabs__link ${component === topProject ? 'is-active' : null }`} 
                      onClick={(e) => changeContent(e, topProject)}
                      href='/'
                    >
                      {text.linkList[3]}
                    </a>
                  </li>
                  <li className='tabs__item'>
                    <a 
                      className={`btn is-fit is-tab js-tabs__link ${component === readyProject ? 'is-active' : null }`} 
                      onClick={(e) => changeContent(e, readyProject)}
                      href='/'
                    >
                      {text.linkList[4]}
                    </a>
                  </li>
                </ul>
              </div>
              <div className='tabs__sections'>
                {ComponentRender()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}