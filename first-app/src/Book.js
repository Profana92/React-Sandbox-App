import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: { title: "Hobbit", author: "J.R. Tolkien", pages: 455 },
    };
  }
  render() {
    return (
      <div>
        {console.log(this)}
        <h1>{this.state.books.title}</h1>
        <h2>{this.state.books.author}</h2>
        <h4>{this.state.books.pages}</h4>
        <h4>Okładka: {this.props.case}</h4>
      </div>
    );
  }
}
