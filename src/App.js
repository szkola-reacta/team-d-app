import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { About, Home, Places, PlaceCreateForm } from "containers";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { PageNotFound } from "components/PageNotFound";
import { BackToTopButton } from "components/BackToTopButton";

import "App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/places">
            <Places />
          </Route>
          <Route path="/place-form">
            <PlaceCreateForm />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route
            path="/page-not-found"
            render={() => <PageNotFound path="/" />}
          />
          <Redirect to="page-not-found" />
        </Switch>
        <Footer />
      </div>
      <BackToTopButton />
    </Router>
  );
}

export default App;
