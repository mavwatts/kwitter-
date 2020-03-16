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

const MessageList = () => {
  const messageList = useSelector(
    state => state.messages.messages.result?.messages ?? undefined
  );

  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
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
      {messageList.map(value => {
        return (
          <List key={value.id} className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={value.username}
                  src="data:image/jpeg;base64,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"
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
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        );
      })}
    </React.Fragment>
  );
};

export default MessageList;
