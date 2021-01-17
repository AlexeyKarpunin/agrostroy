import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector} from 'react-redux';
import {askUserGealocation} from '../redux/actions';
import gealocation from '../gealocation/geo';
import findById from '../gealocation/geoById';
import Header from '../components/header/Header';
import '../styles/style.css';



export default function Home() {

  const router = useRouter();
  const {city} = useSelector( (state) => state.city);
  const dispatch = useDispatch();

  // useEffect ( () => {
  //   setInterval( () => {
  //     console.log('store:',store.getState())
  //   }, 5000)
  // });

  useEffect( () => {
    fetch('/api/ip').then( res => res.json()).then( (data) => console.log(data));
  })

  useEffect( () => {
    router.push(`/?city=${city}`, undefined, { shallow: true })
  },[city])

  useEffect( () => {
    const geo = gealocation();
    findById().then(response => response.json()).then(result => {
      console.log('byId',result.location.data.city)
      return result.location.data.city
    })
    // dispatch(askUserGealocation());
  },[])
 
  return (
    <>
      <Header />
      <Div />
    </>
  )
}

const Div = styled.div`
     width: 100%;
     height: 500px;
`;


