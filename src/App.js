import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cards from "./data/Cards";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            Home
            <Cards />
          </Route>
          <Route path="/about">About</Route>
          <Route path="/places">Places</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
