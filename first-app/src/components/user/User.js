import React, { Component } from "react";

export class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Adam",
      lastname: "Kowalski",
      age: 21,
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>{this.state.lastname}</h2>
        <h2>{this.state.age}</h2>
        <h2>
          {this.props.adultAge <= this.state.age
            ? "pełnoletni"
            : "niepełnoletni"}
        </h2>
      </div>
    );
  }
}

let wrapper = (ComponentToWrap) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <p>{this.props.message}</p>
          <ComponentToWrap {...this.props} />
        </div>
      );
    }
  };
};

const HOC = wrapper(User);
export default HOC;
