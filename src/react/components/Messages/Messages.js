import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import MessageBoard from "./MessageBoard";

import { useDispatch } from "react-redux";
import { receiveMessages } from "../../../redux";

const Messages = props => {
  const dispatch = useDispatch();

  const storedName =
    JSON.parse(localStorage?.getItem("login"))?.result?.username ?? undefined;
  const storedAuthToken =
    JSON.parse(localStorage?.getItem("login"))?.result?.token ?? undefined;

  const { register, handleSubmit, reset, control /*watch*/ } = useForm({
    defaultValues: {
      text: ""
    }
  });

  const onSubmit = async (data, e) => {
    reset();
    const storedAuthToken =
      JSON.parse(localStorage?.getItem("login"))?.result?.token ?? undefined;
    console.log(data);

    const messagesURL = "https://kwitter-api.herokuapp.com/messages";

    const response = await fetch(messagesURL, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + storedAuthToken
      },
      body: JSON.stringify(data)
    });

    console.log(response.status);
    if (!response.ok) {
      console.log("can't post");
    } else {
      dispatch(receiveMessages());
    }
  };
  dispatch(receiveMessages());

  return (
    <React.Fragment>
      <h1>Message Feed</h1>

      <h3>Post a Message Here</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          multiline={true}
          fullWidth={true}
          rowsMax="10"
          name="text"
          label="Post"
          type="text"
          variant="outlined"
          placeholder="type message here"
          inputProps={{ maxLength: 250, minLength: 1 }}
          title="250 characters max"
          required={true}
          inputRef={register}
        ></TextField>
        <Button type="submit">Post a Message</Button>
      </form>
      <br />
      <h3>Message Board for {storedName}</h3>
      <MessageBoard />
      {/* <p>logged in: {loggedIn ? "true" : "false"}</p> */}
      {/* <p>token: {authToken}</p> */}
      <p>
        stored token?: {storedAuthToken ? storedAuthToken : "no stored token"}
      </p>
    </React.Fragment>
  );
};

export default Messages;
