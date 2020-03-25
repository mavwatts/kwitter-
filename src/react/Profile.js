import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { Route, useRouteMatch } from "react-router-dom";
import Messages from "./components/Messages/Messages";
// import "./components/ProfilePage.css";
import ProfileCard from "./components/ProfileCard";
import { useSelector } from "react-redux";
import DeleteUser from "./components/Messages/DeleteUser";
//Mav use line 8 above to import hook; please note that this a function component now instead of a class component

const Profile = props => {
  //Mave you need to use line 8 to import the react-redux useSelector hoook; you will need to use this code in your seperate home profile component
  const username = useSelector(state => state.auth.login.result.username);
  console.log(username);
  const messageMatch = useRouteMatch("/profiles/:username/messagefeed");
  return (
    <React.Fragment>
      <Menu isAuthenticated={props.isAuthenticated} />
      {messageMatch ? (
        <Messages />
      ) : (
        <React.Fragment>
          {/*MAV this is where you will put the home profile page*/}
          <div>Profile Page</div>
          <DeleteUser />
          {/* <ProfileCard></ProfileCard> */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default userIsAuthenticated(Profile);
