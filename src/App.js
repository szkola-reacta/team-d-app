import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { PageNotFound } from 'components/PageNotFound';
import Searchbar from 'components/Searchbar/Searchbar.js';

import 'App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Searchbar />
            Home
          </Route>
          <Route path="/about">About</Route>
          <Route path="/places">Places</Route>
          <Route
            path="/page-not-found"
            render={() => <PageNotFound path="/" />}
          />
          <Redirect to="page-not-found" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
