import React from 'react';
import {BrowserRouter} from 'react-router-dom'


import MainNavigation from './components/Navigation/MainNavigation';
import MainFooter from './components/Footer/MainFooter'

import './App.css';
import WelcomeSection from './sections/Welcome';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation/>
      <main className="main-content">
        <WelcomeSection/>    
      </main>

      
      <MainFooter/>
    </BrowserRouter>
  );
}

export default App;
