import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { useRouteMatch } from "react-router-dom";
import Messages from "./components/Messages/Messages";
import UpdateUser from "./components/UpdateUser";
import "./components/ProfilePage.css";
import ProfileCard from "./components/ProfileCard";
import ProfileImage from './components/ProfileImage'


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

          <div>Profile Page</div> 

       <ProfileCard/>

        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default userIsAuthenticated(Profile);
