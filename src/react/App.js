import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import TestMessage from "./components/Messages/TestMessage";
import Messages from "./components/Messages/Messages";
import MessageBoard from "./components/Messages/MessageBoard";

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
