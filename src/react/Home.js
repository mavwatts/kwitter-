import React from "react";
import { LoginForm, Menu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>
          {" "}
          <img src="/logo/duck-logo.png" height="50px" width="50px" />
          Kwacker
        </h2>
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
