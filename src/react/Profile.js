import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { /*Route*/ useRouteMatch } from "react-router-dom";
import Messages from "./components/Messages/Messages";
// import "./components/ProfilePage.css";
import ProfileCard from "./components/ProfileCard";
import { useSelector } from "react-redux";
//Mav use line 8 above to import hook; please note that this a function component now instead of a class component

const Profile = props => {
  const messageMatch = useRouteMatch("/profiles/:username/messagefeed");
  const updateUserMatch = useRouteMatch("/profiles/:username/update");
  return (
    <React.Fragment>
      <Menu isAuthenticated={props.isAuthenticated} />
      {messageMatch ? (
        <Messages />
      ) : updateUserMatch ? (
        <UpdateUser />
      ) : (
        <React.Fragment>
          {/*MAV this is where you will put the home profile page*/}
          <div>Profile Page</div>
          {/* <ProfileCard /> */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default userIsAuthenticated(Profile);
