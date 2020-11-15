import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PlaceList from "./data/PlaceList";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            Home
            <PlaceList />
          </Route>
          <Route path="/about">About</Route>
          <Route path="/places">Places</Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
