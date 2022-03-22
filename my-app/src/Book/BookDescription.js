import React, { Component } from "react";

class BookDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: "Hobbit",
        author: "J.R. Tolkien",
        pages: "445",
      },
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.book.title}</h1>
        <h2>{this.state.book.author}</h2>
        <h3>Stron: {this.state.book.pages}</h3>
      </div>
    );
  }
}

export default BookDescription;
