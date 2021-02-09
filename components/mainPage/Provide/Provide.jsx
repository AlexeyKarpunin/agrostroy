/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
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
  const [width, setWidth] = useState(1920);
  const  text = city[language].mainPage.provide;
  
  useEffect( () => {

    function widthLisner () {
      const widthWindow = window.innerWidth
      setWidth(widthWindow)
    }
  
    widthLisner();
    window.addEventListener('resize', widthLisner);
    return () => window.removeEventListener('resize', widthLisner);
  }, [])

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
            { width > 969 ? (
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
            ) : <MobileAccordion text={text} component={component} onClick={changeContent} />}
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileAccordion ({text, component, onClick}) {
  const {topProject, documents, readyProject, storeTechnology, cost} = NAMES_OF_COMPONENTS;
  const [anime, setAnime] = useState(component);

  useEffect( () => {
    setTimeout( () => {setAnime(component)}, 10);
  }, [component])

  // function back (content) {
    
  //   switch(content) {
  //     case content === cost:
  //       return(
  //         <ControllBlock>
  //           <HiidenWrraper status={anime === cost ? 'active' : ''}>
  //             <Cost text={text.cost} />
  //           </HiidenWrraper>
  //         </ControllBlock>
  //       );
  //     case content === storeTechnology:
  //       return(
  //         <ControllBlock>
  //           <HiidenWrraper status={anime === storeTechnology ? 'active' : ''}>
  //             <StoreTechnology text={text.storageTechnology} />
  //           </HiidenWrraper>
  //         </ControllBlock>
  //       );
  //     case content === readyProject:
  //       return(
  //         <ControllBlock>
  //           <HiidenWrraper status={anime === readyProject ? 'active' : ''}>
  //             <ReadyProject text={text.ready} />
  //           </HiidenWrraper> 
  //         </ControllBlock>
  //       );
  //     case content === documents:
  //       return(
  //         <ControllBlock>
  //           <HiidenWrraper status={anime === documents ? 'active' : ''}>
  //             <Documents text={text.documents} />
  //           </HiidenWrraper>
  //         </ControllBlock>
  //       );
  //     case content === topProject:
  //       return(
  //         <ControllBlock>
  //           <HiidenWrraper status={anime === topProject ? 'active' : ''}>
  //             <TopProject text={text.standart} />
  //           </HiidenWrraper>
  //         </ControllBlock>   
  //       );
  //     default:
  //       return(<></>);
  //   }
  // }

  return (
    <AccSection>
      <AccContent>
        <AccItem>
          <AccBtn onClick={(e) => onClick(e, cost)} status={component === cost ? 'active' : ''}>{text.linkList[0]}</AccBtn>
          <ControllBlock>
            <HiidenWrraper status={anime === cost ? 'active' : ''}>
              <Cost text={text.cost} />
            </HiidenWrraper>
          </ControllBlock>
        </AccItem>
        <AccItem>
          <AccBtn onClick={(e) => onClick(e, storeTechnology)} status={component === storeTechnology ? 'active' : ''}>{text.linkList[1]}</AccBtn>
          <ControllBlock>
            <HiidenWrraper status={anime === storeTechnology ? 'active' : ''}>
              <StoreTechnology text={text.storageTechnology} />
            </HiidenWrraper>
          </ControllBlock>
        </AccItem>
        <AccItem>
          <AccBtn onClick={(e) => onClick(e, documents)} status={component === documents ? 'active' : ''}>{text.linkList[2]}</AccBtn>
          <ControllBlock>
            <HiidenWrraper status={anime === documents ? 'active' : ''}>
              <Documents text={text.documents} />
            </HiidenWrraper>
          </ControllBlock>
        </AccItem>
        <AccItem>
          <AccBtn onClick={(e) => onClick(e, topProject)} status={component === topProject ? 'active' : ''}>{text.linkList[3]}</AccBtn>
          <ControllBlock>
            <HiidenWrraper status={anime === topProject ? 'active' : ''}>
              <TopProject text={text.standart} />
            </HiidenWrraper>
          </ControllBlock>
        </AccItem>
        <AccItem>
          <AccBtn onClick={(e) => onClick(e, readyProject)} status={component === readyProject ? 'active' : ''}>{text.linkList[4]}</AccBtn>
          <ControllBlock>
            <HiidenWrraper status={anime === readyProject ? 'active' : ''}>
              <ReadyProject text={text.ready} />
            </HiidenWrraper> 
          </ControllBlock>
        </AccItem>
      </AccContent>
    </AccSection>
  );
}

const AccSection = styled.div``;
const AccContent = styled.div``;
const AccItem = styled.div``;
const AccBtn = styled.div`
  text-align: center;
  padding: 10px 0;
  border: 1px solid #d5d5d5;
  background-color: ${props => props.status === 'active' ? '#f15400': '#efeff1'};
  &:hover {
    cursor: poiner;
    background-color: #f15400;
  }
`;
const ControllBlock = styled.div`
  overflow: hidden;
`;
const HiidenWrraper = styled.div`
  transition-duration: 1s;
  margin-top: ${props => props.status === 'active' ? '0px' : '-400px;'}
`;
