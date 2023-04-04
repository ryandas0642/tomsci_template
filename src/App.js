import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './components/pages/Courses';
import Opportunities from './components/pages/Opportunities';
import SignUp from './components/pages/SignUp';
import EventRedirect from './components/pages/EventRedirect';
import Events from './components/pages/Events';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/courses' component={Courses} />
          <Route path='/opportunities' component={Opportunities} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/event-[event-code]' component={EventRedirect} />
          <Route path='/events' component={Events} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
