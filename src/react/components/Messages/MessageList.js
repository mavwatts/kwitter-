import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  makeStyles,
  Typography
} from "@material-ui/core";
import { useSelector } from "react-redux";
// import LikeButton from "../LikeButton";
import RatingExampleHeart from "./ToggleButton"

const MessageList = () => {
  const messageList = useSelector(
    state => state?.messages?.messages?.result?.messages ?? []
  );

  const useStyles = makeStyles(theme => ({
    root: {
      width: "50%",
      maxWidth: "100%",
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  }));

 

  const classes = useStyles();
  return (
    <React.Fragment>
      {messageList.map((value, index) => {
        return (
          <List key={value.id} className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={value.username}
                  src={`https://kwitter-api.herokuapp.com/users/${value.username}/picture`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={value.username}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    ></Typography>

                    {value.text}
                  </React.Fragment>
                }
              />
              <p>Likes: {value.likes.length}</p>
            </ListItem>
            {/* <LikeButton /> */}
            <RatingExampleHeart />

            <Divider variant="inset" component="li" />
          </List>
        );
      })}
    </React.Fragment>
  );
};

export default MessageList;
