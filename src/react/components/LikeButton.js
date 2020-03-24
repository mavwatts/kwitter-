import React from "react";
import { connect } from "react-redux";


class LikeButton extends React.Component {

    state = {heartButton: "active icon"} //don't need it anymore
    handleHeartToggle = event => {
        this.setState({[event.value.username] : event.value.id});
        console.log("whatever")
      }

  render() {
    
    return (
      <div className="ui heart rating"  onRate={this.handleHeartToggle} role="radiogroup" tabIndex="-1">
        <i
          tabIndex="0"
          aria-checked="true"
          aria-posinset="1"
          aria-setsize="1"
          className={this.state.heartButton}
          role="radio"
        ></i>
      </div>
    );
  }
}

export default connect(state => ({}))(LikeButton);
