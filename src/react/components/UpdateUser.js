import React from "react";
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
