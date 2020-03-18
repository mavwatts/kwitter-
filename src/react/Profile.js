import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import './components/ProfilePage.css';
import FeedExampleBasic from "./components/Feed"



class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
<FeedExampleBasic />
      </React.Fragment>
    );
  }
}

export default userIsAuthenticated(Profile);
