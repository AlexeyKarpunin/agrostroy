import styled from 'styled-components';
import UrlLogistic from '../urlLogic/urlLogic';
import Header from '../components/header/Header';
import '../styles/style.css';
import store from '../redux/store';
import { useEffect } from 'react';


export default function Home() {
  
  // useEffect ( () => {
  //   setInterval( () => {
  //     console.log('store:',store.getState())
  //   }, 5000)
  // });

  return (
    <>
      <Header />
    </>
  )
}

const Div = styled.div`
     width: 100%;
     height: 500px;
`;


