import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import './components/ProfilePage.css';
// import { Feed } from "./components"

class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        {/* <Feed/> */}
      </React.Fragment>
    );
  }
}

export default userIsAuthenticated(Profile);
