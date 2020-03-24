import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { Route } from "react-router-dom";
import Messages from "./components/Messages/Messages";
import "./components/ProfilePage.css";
import ProfileCard from "./components/ProfileCard"

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Route path="/profiles/:username/messagefeed" component={Messages} />

        <h1>Profile Page</h1>
      <ProfileCard/>
      </React.Fragment>
    );
  }
}

export default userIsAuthenticated(Profile);
