import React from "react";
import { LoginForm } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
// import Signupform from "./components/SignupForm";
import { Link } from "./components"

class Home extends React.Component {
  render() {
    return (
      <>
        <h2>
          {" "}
          <img src="/logo/duck-logo.png" height="50px" width="50px" alt='duck-logo' />
          Kwacker
        </h2>
        <LoginForm />
        <Link to ="/register">Sign Up</Link>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
