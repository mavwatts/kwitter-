import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";

import Messages from "./components/Messages/Messages";
// import TestMessages from "./components/Messages/TestMessage"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profiles/:username" component={Profile} />
      <Route path="/messagefeed" component={Messages} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
