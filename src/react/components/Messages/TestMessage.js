import React from "react";
import MessageBoard from "./MessageBoard";

const TestMessage = props => {
  const storedName =
    JSON.parse(localStorage?.getItem("login"))?.result?.username ?? undefined;
  const storedAuthToken =
    JSON.parse(localStorage?.getItem("login"))?.result?.token ?? undefined;
  return (
    <React.Fragment>
      <h1>Message Feed</h1>

      <h3>Post a Message</h3>

      <form>
        <input
          name="text"
          label="Post"
          type="text"
          variant="outlined"
          placeholder="type message here"
          inputProps={{ maxLength: 250, minLength: 1 }}
          title="250 characters max"
          required={true}
        ></input>
        <input type="submit" value="Post Message"></input>
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

export default TestMessage;
