import React from 'react';
import {BrowserRouter} from 'react-router-dom'


import MainNavigation from './components/Navigation/MainNavigation';
import MainFooter from './components/Footer/MainFooter'

import './App.css';
import WelcomeSection from './sections/Welcome';

function App() {
  return (
    <BrowserRouter>
    <div onScroll={() => { console.log("scrolling")}}>
      <MainNavigation/>
      <main className="main-content">
        <WelcomeSection/>
        <h1>dfdsfdsfdsfdsf</h1>
        <h1>dfdsfdsfdsfdsf</h1>
        <h1>dfdsfdsfdsfdsf</h1> 
        <h1>dfdsfdsfdsfdsf</h1> 
        <h1>dfdsfdsfdsfdsf</h1>   
      </main>

      
      <MainFooter/>
    </div>
    </BrowserRouter>
  );
}

export default App;
