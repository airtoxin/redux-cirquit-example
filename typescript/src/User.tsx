import * as React from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import {Dispatch} from "redux";
import {State} from "./store";

export interface Props {
  name: string;
  handleClickButton: (name: string) => void;
}

export interface ComponentState {
  nameInput: string;
}

class UserComponent extends React.Component<Props, ComponentState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nameInput: ""
    };
  }

  render() {
    return (
      <div style={{ border: "solid 1px" }}>
        <h1>Namespace: user</h1>
        <h2>User name: {this.props.name}</h2>
        <input type="text" value={this.state.nameInput} onChange={event => this.handleChangeInput(event)}/>
        <button onClick={() => this.handleClickButton()}>Set user name</button>
      </div>
    );
  }

  handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ nameInput: event.target.value });
  }

  handleClickButton() {
    this.props.handleClickButton(this.state.nameInput);
    this.setState({ nameInput: "" });
  }
}

const mapStateToProps = (state: State) => ({
  name: state.user.name
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleClickButton: (name: string) => {
    dispatch(actions.setUserName(name));
  }
});

export const User = connect(mapStateToProps, mapDispatchToProps)(UserComponent);
