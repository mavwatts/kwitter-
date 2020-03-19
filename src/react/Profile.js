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
        <h2>Profile</h2>
        <Route path="/profiles/:username/messagefeed" component={Messages} />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
