import styled from 'styled-components';
import Header from '../components/header/Header';
import '../styles/style.css';


export default function AboutComponi () {

  return (
    <>
      <Header />
      <Div>AboutComponi</Div>
    </>
  );
}


const Div = styled.div`
     width: 100%;
     height: 500px;
`;