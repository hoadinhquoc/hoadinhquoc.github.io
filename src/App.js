import React, { useState } from 'react';
import HeroSection from './Components/HeroSection';
import TopBar from './Components/TopBar';
import Main from './Components/Main';
import Footer from './Components/Footer';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => {

    return (
    <>
    <HeroSection></HeroSection>
    <TopBar></TopBar>
    <Main></Main>
    <Footer></Footer>
    </>
    );
};

export default App;