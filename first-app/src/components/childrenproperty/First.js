import React, { Component } from "react";

export class First extends Component {
  render() {
    return (
      <div>
        <h1>Pierwszy element</h1>
        {console.log(this.props)}
        {this.props.children}
      </div>
    );
  }
}

export default First;
