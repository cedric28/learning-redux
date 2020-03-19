import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Users from './pages/Users';
import Profile from './pages/Profile';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={Users} path="/users" />
          <Route component={Profile} path="/users/:user_id" />
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
