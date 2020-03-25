import React from "react";
import { LoginForm } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import { Link } from "./components";
import Logo from "../logo/duck-logo.jpg";
import "./components/Home.css";


class Home extends React.Component {
  render() {
    return (
      <>
        <h2>
          <div id='logoID'><img src={Logo} alt="website-logo" height="50px" width="50px"/></div>
          Kwacker
        </h2>
        <LoginForm />
        <Link to ="/register">Sign Up</Link>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
