import React from 'react';

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Title from './components/Title'
import CardsStack from './components/CardsStack'
import CardAbout from './components/CardAbout'

import {Container} from 'react-bootstrap'

import './style.css'


function App() {
  return (
    <>
      <NavBar />
        <Container>
        <br /> 
        <Title />
        <br /> <br />
        <center >
          <h3>Stacks de desenvolvimento:</h3>
        </center>
        <hr style = {{backgroundColor: '#fff'}} />
        <CardsStack />
        <br /> <br /> 
        <CardAbout />
        </Container>
        <br /> <br /> 
      <Footer />
    </>
  );
}

export default App;
