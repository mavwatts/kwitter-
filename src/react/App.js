import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Signupform from "./components/SignupForm";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/register" component={Signupform} />
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles/:username" component={Profile} />
        <Route path="*" component={NotFound} />
        
      </Switch>
    );
  }
}

export default App;
