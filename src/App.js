import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { About } from "containers";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { PageNotFound } from "components/PageNotFound";
import { Place } from "./components/Place";
import Searchbar from "components/Searchbar/Searchbar.js";
import { PlaceCreateForm } from "./components/PlaceCreateForm";

import "App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Searchbar />
            <PlaceCreateForm />
            Home
          </Route>
          <Route path="/about">
            <About />
          </Route>
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
