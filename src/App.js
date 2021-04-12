import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
// import react to gain access to its packages

function App() {
  // returns JSX
  // renders Navbar component
  return (
    <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
        
    </>
  );
}

export default App;
