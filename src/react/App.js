import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profiles/:username" component={Profile} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
