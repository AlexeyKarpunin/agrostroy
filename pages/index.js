import styled from 'styled-components';
import Header from '../components/header/Header';
import VideoBanner from '../components/mainPage/VideoBanner';
import ExpBilding from '../components/mainPage/ExpBilding';
import WorkWithUs from '../components/mainPage/WorkWithUs';
import Map from '../components/mainPage/Map';
import PhaseWork from '../components/mainPage/PhaseWork';
import Provide from '../components/mainPage/Provide/Provide';
import Footer from '../components/footer/Footer';
import '../styles/style.css';
import { useSelector } from 'react-redux';

// import store from '../redux/store';
// import { useEffect } from 'react';


export default function Home() {
  
  // useEffect ( () => {
  //   setInterval( () => {
  //     console.log('store:', store.getState())
  //   }, 5000)
  // });

  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);

 
  return (
    <>
      <Header 
        city={city}
        language={language}
      />
      <VideoBanner />
      <ExpBilding
        city={city}
        language={language}
      />
      <WorkWithUs 
        city={city}
        language={language}
      />
      <Map
        city={city}
        language={language}
      />
      <PhaseWork
        city={city}
        language={language}
      />
      <Provide 
        city={city}
        language={language}
      />
      <Footer 
        city={city}
        language={language}
      />
    </>
  )
}

const Div = styled.div`
     width: 100%;
     height: 500px;
`;


