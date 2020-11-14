import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            Home
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
