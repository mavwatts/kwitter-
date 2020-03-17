import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import MessageList from "./MessageList";

const MessageBoard = props => {
  // const username = useSelector(state => state.messages.username);
  // const loggedIn = useSelector(state => state.login.loggedIn);
  const dispatch = useDispatch();

  const storedName = JSON.parse(localStorage.getItem("login")).result.username;

  const fetchMessages = async () => {
    const messageListUrl = `https://kwitter-api.herokuapp.com/messages?limit=20&offset=0&username=${storedName}`;
    let data = await fetch(messageListUrl);
    let dataList = await data.json();
    console.log(dataList);
    console.log(dataList.messages);
    dispatch(receiveMessages(dataList.messages));
    // console.log(dataList.messages[0].text);
    // let messageList = dataList.messages;
    // console.log(messageList);
    // console.log(loggedIn);

    console.log(storedName && "local storage: true");
  };
  // fetchMessages();
  function receiveMessages(messageList) {
    return {
      type: "RECEIVEMESSAGES",
      messages: messageList.map(value => {
        console.log(value);
        return value;
      })
    };
  }

  return (
    <React.Fragment>
      <MessageList />
      <Button onClick={fetchMessages}>Refresh Board</Button>
      <p>stored username for search: {storedName}</p>
      {/* <p>state username: {username} </p> */}
    </React.Fragment>
  );
};

export default MessageBoard;
