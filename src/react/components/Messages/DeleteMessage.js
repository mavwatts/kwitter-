import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { receiveMessages } from "../../../redux";

const DeleteMessage = ({ id }) => {
  const dispatch = useDispatch();

  const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  }));
  const classes = useStyles();

  const storedAuthToken =
    JSON.parse(localStorage?.getItem("login"))?.result?.token ?? undefined;

  const deleteMessage = async () => {
    console.log("clicked");
    console.log(id);
    console.log("deleted message: " + id);
    const deleteMessageUrl = `https://kwitter-api.herokuapp.com/messages/${id}`;
    try {
      const response = await fetch(deleteMessageUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + storedAuthToken
        }
      });
      const data = await response.json();
      console.log(data);
      dispatch(receiveMessages());
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={classes.root}>
      <IconButton aria-label="delete" onClick={deleteMessage}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default DeleteMessage;
