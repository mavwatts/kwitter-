import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../redux";
import "./LoginForm.css";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading}>
            Login
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.auth.login.result,
    loading: state.auth.login.loading,
    error: state.auth.login.error
  }),
  { login }
)(LoginForm);

// import React from 'react'
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

// const LoginForm = () => (
//   <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//     <Grid.Column style={{ maxWidth: 450 }}>
//       <Header as='h2' color='teal' textAlign='center'>
//         <Image src='logo/duck-logo.png' /> Log-in to your account
//       </Header>
//       <Form size='large'>
//         <Segment stacked>
//           <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
//           <Form.Input
//             fluid
//             icon='lock'
//             iconPosition='left'
//             placeholder='Password'
//             type='password'
//           />

//           <Button color='teal' fluid size='large'>
//             Login
//           </Button>
//         </Segment>
//       </Form>
//       <Message>
//         New to us? <a href='#'>Sign Up</a>
//       </Message>
//     </Grid.Column>
//   </Grid>
// )

// export default LoginForm


