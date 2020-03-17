import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
// import { useSelector } from "react-redux";
import MessageBoard from "./MessageBoard";
// import { loadState } from "./localStorage";
import { useDispatch } from "react-redux";
const Messages = props => {
  // const authToken = useSelector(state => state.login.token);
  const dispatch = useDispatch();
  //   const persistedState = loadState();
  //   const storedAuthToken = persistedState?.token ?? "no stored token";
  //   const storedName = persistedState?.username ?? "no stored user name";
  //   console.log(persistedState?.token ?? "no stored token");

  const storedName =
    JSON.parse(localStorage?.getItem("login"))?.result?.username ?? undefined;
  const storedAuthToken =
    JSON.parse(localStorage?.getItem("login"))?.result?.token ?? undefined;
  // const username = useSelector(state => state.messages.username);
  // const loggedIn = useSelector(state => state.login.loggedIn);
  const { register, handleSubmit, reset, control, watch } = useForm({
    defaultValues: {
      text: ""
    }
  });

  const onSubmit = async (data, e) => {
    console.log(data);
    console.log(e.target.textContent);
    console.log(e);
    console.log(e.target.elements[0].defaultValue);
    reset({ text: "" });

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

    console.log(await response.json());
    // console.log(await username);

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

      //   console.log(persistedState && "local storage: true");
      // };

      function receiveMessages(messageList) {
        return {
          type: "RECEIVEMESSAGES",
          messages: messageList.map(value => {
            console.log(value);
            return value;
          })
        };
      }
      fetchMessages();
    };
  };

  //   console.log(watch("text"));
  return (
    <React.Fragment>
      <h1>Message Feed</h1>

      <h3>Post a Message</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={TextField}
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
          control={control}
        ></Controller>
        <Button type="submit">Post Message</Button>
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
