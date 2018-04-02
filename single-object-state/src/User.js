import React from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class UserComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      nameInput: ""
    };
  }

  render() {
    return (
      <div style={{ border: "solid 1px" }}>
        <h2>User name: {this.props.name}</h2>
        <input type="text" value={this.state.nameInput} onChange={event => this.handleChangeInput(event)}/>
        <button onClick={() => this.handleClickButton()}>Set user name</button>
      </div>
    );
  }

  handleChangeInput(event) {
    this.setState({ nameInput: event.target.value });
  }

  handleClickButton() {
    this.props.handleClickButton(this.state.nameInput);
    this.setState({ nameInput: "" });
  }
}

const mapStateToProps = state => ({
  name: state.user.name
});

const mapDispatchToProps = dispatch => ({
  handleClickButton: name => dispatch(actions.setUserName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
