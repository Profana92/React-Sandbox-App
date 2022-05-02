import React, { Component } from "react";

export class Refs extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  focus = () => {
    this.input.current.focus({ preventScroll: false });
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.input}></input>
        <input type="button" value="wciśnij mnie" onClick={this.focus}></input>
      </div>
    );
  }
}

export default Refs;
