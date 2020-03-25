import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { useRouteMatch } from "react-router-dom";
import Messages from "./components/Messages/Messages";
import "./components/ProfilePage.css";
import ProfileCard from "./components/ProfileCard";
import { useSelector } from "react-redux"; //imports the function hook component
import ProfileImage from './components/ProfileImage'


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
          {/* <img src={`https://kwitter-api.herokuapp.com/users/${username}/picture`} alt='profile_picture'></img> */}

       <ProfileCard/>
       <ProfileImage/>

        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default userIsAuthenticated(Profile);
