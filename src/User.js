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
      <div>
        <h1>User name: {this.props.name}</h1>
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
