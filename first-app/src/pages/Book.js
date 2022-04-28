import React, { Component } from "react";
import BookDescription from "../components/book/BookDescription";
import Footer from "../components/partial/Footer";
import Header from "../components/partial/Header";

export class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { title: "Hobbit", author: "J.R.Tolkien", pages: "455" },
        { title: "Rok 1984", author: "G. Orwell", pages: "455" },
        { title: "Władca Pierścieni", author: "J.R.Tolkien", pages: "669" },
        {
          title: "Stary człowiek i morze",
          author: "E.Hemingway",
          pages: "226",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        {/* {console.log(...this.state.books)} */}
        {this.state.books.map((book, i) => (
          <BookDescription key={i} book={book} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default Book;
