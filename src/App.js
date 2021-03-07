import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
// import react to gain access to its packages

function App() {
  // returns JSX
  // renders Navbar component
  return (
    <>
        <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
        </Router>
        
    </>
  );
}

export default App;
