// App.js
import React, { useState } from 'react';
import Home from './Home';
import SPO from './SPO';
import MPO from './MPO';
import MPOO from './MPOO';
import MainGame from '../MainGame';

const HomeManager = () => {
    const [currentScreen, setCurrentScreen] = useState('Home');
    const [difficulty, setDifficulty] = useState('Easy');


    let content;
    if (currentScreen === 'Home') {
      content = <Home setCurrentScreen={setCurrentScreen} setDifficulty={setDifficulty}/>;
    } else if (currentScreen === 'SPO') {
      content = <SPO setCurrentScreen={setCurrentScreen} setDifficulty={setDifficulty} />;
    } else if (currentScreen === 'MPO') {
      content = <MPO setCurrentScreen={setCurrentScreen} setDifficulty={setDifficulty}/>;
    } else if (currentScreen === 'MPOO') {
      content = <MPOO setCurrentScreen={setCurrentScreen} setDifficulty={setDifficulty}/>;
    }
    else if (currentScreen === 'MainGame') {
      content = <MainGame setCurrentScreen={setCurrentScreen} setDifficulty={setDifficulty} />;
    }
  
    return content;
  };

export default HomeManager;
