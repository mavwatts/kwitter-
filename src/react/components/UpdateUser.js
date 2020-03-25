import React from "react";
<<<<<<< HEAD
import { Button, Checkbox, Form } from "semantic-ui-react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { updateUser } from "../../redux";
import "./SignupForm.css";
import { Link } from "../components";

class UpdateUser extends React.Component {
  state = { username: "", password: "", displayName: "" };

  updateUser = e => {
    e.preventDefault();
    this.props.updateUser(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <Form id="signup-form" onSubmit={this.updateUser}>
          {/* <Form.Field>
            
            <label>Username</label>
            <input
              name="username"
              placeholder=""
              type="text"
              onChange={this.handleChange}
            />
          </Form.Field> */}
          <Form.Field>
            <label>Display Name</label>
            <input
              placeholder=""
              name="displayName"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder=""
              name="password"
              type="password"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
        <Link to="/">Go Back</Link>

        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.users.updateUser.result,
    loading: state.users.updateUser.loading,
    error: state.users.updateUser.error
  }),
  { updateUser }
)(UpdateUser);
=======
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";

const UpdateUser = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      displayName: "",
      password: ""
    }
  });
  const storedAuthToken =
    JSON.parse(localStorage?.getItem("login"))?.result?.token ?? undefined;

  const storedName =
    JSON.parse(localStorage?.getItem("login"))?.result?.username ?? undefined;

  const usersURL = `https://kwitter-api.herokuapp.com/users/${storedName}`;

  const onSubmit = handleSubmit(async data => {
    reset();
    console.log("updating...");
    try {
      console.log(data);

      const response = await fetch(usersURL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + storedAuthToken
        },
        body: JSON.stringify(data)
      });
      console.log(response.status);
      console.log(response.url);
      console.log(response.ok);
      console.log(await response.json());
    } catch (error) {
      console.error(error.name);
      console.error(error.message);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <h1>Update Account</h1>

      <TextField
        size="small"
        label="display name"
        name="displayName"
        variant="filled"
        placeholder="Display Name"
        inputRef={register}
      />

      <div />

      <TextField
        name="password"
        type="password"
        label="password"
        placeholder="Password"
        variant="filled"
        inputProps={{ minLength: 5 }}
        inputRef={register}
      />

      <div />

      <Button color="primary" type="submit">
        Update
      </Button>
    </form>
  );
};

export default UpdateUser;
>>>>>>> a1b25eb5de7a7d51b492acd6b7737a680afa2547
