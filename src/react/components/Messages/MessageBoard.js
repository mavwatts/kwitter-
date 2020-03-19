import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import MessageList from "./MessageList";
import { receiveMessages } from "../../../redux";

const MessageBoard = props => {
  const dispatch = useDispatch();

  const storedName = JSON.parse(localStorage.getItem("login")).result.username;

  return (
    <React.Fragment>
      <MessageList />
      <Button onClick={() => dispatch(receiveMessages())}>Refresh Board</Button>
      <p>stored username for search: {storedName}</p>
      {/* <p>state username: {username} </p> */}
    </React.Fragment>
  );
};

export default MessageBoard;
