import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    // this.increase = this.increase.bind(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.increase}>Dodaj</button>
        <button onClick={this.decrease}>usuń</button>
        <button onClick={this.clear}>usuń</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
  increase = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };
  clear = () => {
    this.setState({
      counter: 0,
    });
  };
}

export default Counter;
