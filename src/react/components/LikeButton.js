import React from "react";
import { connect } from "react-redux";

class LikeButton extends React.Component {

    state = {heartButton: "active icon"}
    handleHeartToggle = event => {
        this.setState({[event.value.username] : event.value.id});
      }

    // const likedComment = 
  render() {
    
    return (
      <div class="ui heart rating" role="radiogroup" tabindex="-1">
        <i
          tabindex="0"
          aria-checked="true"
          aria-posinset="1"
          aria-setsize="1"
          class={this.state.heartButton}
          role="radio"
        ></i>
      </div>
    );
  }
}

export default connect(state => ({}))(LikeButton);
