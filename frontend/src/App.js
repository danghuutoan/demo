import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'



import BookingsPage from './pages/Bookings';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';
import MainFooter from './components/Footer/MainFooter'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation/>
      <main className="main-content">
        <Switch>
          <Redirect from="/" to="/home" exact/>
          <Route path="/home" component={HomePage}/>
          <Route path="/events" component={EventsPage}/>
          <Route path="/bookings" component={BookingsPage}/>
        </Switch>
      </main>
      <MainFooter/>
    </BrowserRouter>
  );
}

export default App;
