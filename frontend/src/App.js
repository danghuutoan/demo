import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'


import MainNavigation from './components/Navigation/MainNavigation';
import MainFooter from './components/Footer/MainFooter'

import './App.css';
import WelcomeSection from './sections/Welcome';

class App extends Component {
  state = { navbarSolid: false }

  handleScroll = () => {
    const offset = window.scrollY;
    let {navbarSolid} = this.state;
    
    if (offset > 300) {
            if (navbarSolid === false) this.setState({navbarSolid: true});
    } else {
            if (navbarSolid === true) this.setState({navbarSolid: false});
    }
  };
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  render() { 
    return (
    <BrowserRouter>
      <MainNavigation solid={this.state.navbarSolid}/>
      <main className="main-content">
        <WelcomeSection/>
        <h1>dfdsfdsfdsfdsf</h1>
        <h1>dfdsfdsfdsfdsf</h1>
        <h1>dfdsfdsfdsfdsf</h1> 
        <h1>dfdsfdsfdsfdsf</h1> 
        <h1>dfdsfdsfdsfdsf</h1>   
      </main>
      <MainFooter/>
    </BrowserRouter> );
  }
}

export default App;
