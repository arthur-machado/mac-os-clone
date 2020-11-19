import React from 'react';

import './assets/global.css';

import TopBar from './components/TopBar';
import Dock from './components/Dock';
import Finder from './components/Finder';


function App() {
  return (
    <>

      <Finder />
      <Dock />
      <TopBar />
      
    </>
  );
}

export default App;
