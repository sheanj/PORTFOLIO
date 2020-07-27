import React from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import { Route } from "react-router-dom";
import Card from "./components/Contact/Card";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/contact">
        <Card />
      </Route>
    </div>
  );
}

export default App;
