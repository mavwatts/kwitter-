import { Image } from "semantic-ui-react";
import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { uploadImage } from "../../redux";

class ProfileImage extends Component {
  state = { picture: "" };
  handleUploadUserPicture = e => {
    e.preventDefault();
    this.props.uploadImage(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <form
          onSubmit={this.handleUploadUserPicture}
          className="changePictureButtons"
        >
          <div className="ui input">
            <input
              id="choosePictureButton"
              type="file"
              name="picture"
              placeholder="Select Picture"
            ></input>
          </div>
          <Input
            id="submitPictureButton"
            type="submit"
            value="Upload Picture"
          ></Input>
        </form>
      </>
    );
  }
}

export default connect(
  state => ({
    result: state.users.uploadImage.result,
    loading: state.users.uploadImage.loading,
    error: state.users.uploadImage.error
  }),
  { uploadImage }
)(ProfileImage);
