import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { Route } from "react-router-dom";
import Messages from "./components/Messages/Messages";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Route path="/profiles/:username/messagefeed" component={Messages} />
        <h1>Profile Page</h1>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
