import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { connect } from "react-redux";
// import { getUser } from "../../redux";
import Spinner from "react-spinkit";

class ProfileCard extends React.Component {
  // componentDidMount() {
  //   this.props.getUser(this.props.username);
  // }

  componentDidUpdate(previousProps) {
    if (this.props.username !== previousProps.username) {
      this.props.getUser(this.props.username);
    }
  }

  render() {
    if (this.props.result == null) {
      return <Spinner name="circle" color="blue" />;
    }
    const user = this.props.result.user;

    return (
      <div>
        <Card>
          <Image
            src={"https://kwitter-api.herokuapp.com" + user.pictureLocation}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.login.result.username,
    result: state.users.getUser.result
  };
};

// const mapDispatchToProps = {getUser}

// export default {ProfileCard}

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
