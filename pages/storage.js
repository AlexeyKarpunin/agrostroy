import '../styles/style.css';
import Header from '../components/header/Header';
import styled from 'styled-components';

export default function Storage () {

  return (
    <>
      <Header />
      <Div>Storage</Div>
    </>
  );
}
const Div = styled.div`
     width: 100%;
     height: 500px;
`;