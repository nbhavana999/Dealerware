import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
