import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PlaceList from "./data/PlaceList";
import SearchPlaceList from "./data/SearchPlaceList";
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
            <SearchPlaceList />
          </Route>
          <Route path="/about">About</Route>
          <Route path="/places">Places</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
