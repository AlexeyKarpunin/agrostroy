import '../styles/style.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Storagebanner from '../components/storage/Storagebanner';
import Advantages from '../components/project/Advantages';
import RoundBanner from '../components/storage/RoundBanner';
import ProjectSlaider from '../components/project/ProjectSlaider';
import ProjectForm from '../components/project/ProjectForm';
import Map from '../components/mainPage/Map';
import Provide from '../components/mainPage/Provide/Provide';
import StorageInfo from '../components/storage/StorageInfo';

export default function Storage () {
  const city = useSelector( (state) => state.city.city);
  const language = useSelector( (state) => state.language.language);
  
  return (
    <>
      <Header
        city={city}
        language={language}
      />
      <Storagebanner />
      <Advantages />
      <RoundBanner />
      <StorageInfo />
      <ProjectSlaider />
      <ProjectForm />
      <Map
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
  );
}
const Div = styled.div`
     width: 100%;
     height: 500px;
`;