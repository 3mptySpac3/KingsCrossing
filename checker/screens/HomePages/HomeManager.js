// App.js
import React, { useState } from 'react';
import Home from './Home';
import SPO from './SPO';
import MPO from './MPO';
import MPOO from './MPOO';

const HomeManager = () => {
    const [currentScreen, setCurrentScreen] = useState('Home');


    let content;
    if (currentScreen === 'Home') {
      content = <Home setCurrentScreen={setCurrentScreen} />;
    } else if (currentScreen === 'SPO') {
      content = <SPO setCurrentScreen={setCurrentScreen} />;
    } else if (currentScreen === 'MPO') {
      content = <MPO setCurrentScreen={setCurrentScreen} />;
    } else if (currentScreen === 'MPOO') {
      content = <MPOO setCurrentScreen={setCurrentScreen} />;
    }
  
    return content;
  };

export default HomeManager;
