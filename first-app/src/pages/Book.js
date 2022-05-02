import React, { Component } from "react";
import BookDescription from "../components/book/BookDescription";
import Footer from "../components/partial/Footer";
import Header from "../components/partial/Header";
let i = 0;
export class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { id: 0, title: "Hobbit", author: "J.R.Tolkien", pages: "455" },
        { id: 1, title: "Rok 1984", author: "G. Orwell", pages: "455" },
        {
          id: 2,
          title: "Władca Pierścieni",
          author: "J.R.Tolkien",
          pages: "669",
        },
        {
          id: 3,
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
          <BookDescription key={i} book={book} deleteBook={this.deleteBook} />
        ))}
        <button onClick={this.updateBook}>Resetuj książki</button>
        <button onClick={this.addNewBook}>Dodaj nową książkę</button>
        <Footer />
      </div>
    );
  }

  updateBook = () => {
    this.setState({
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
    });
  };
  addNewBook = () => {
    this.setState((prevState) => ({
      books: [
        ...prevState.books,
        { id: i, title: "Hobbit", author: "J.R.Tolkien", pages: "455" },
      ],
    }));
    i++;
  };
  deleteBook = (id) => {
    console.log(id);
    this.setState((prevState) => ({
      books: this.state.books.filter(function (book) {
        return book.id !== id;
      }),
    }));
  };
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  componentDidUpdate(prevProps, prevState, snapshots) {
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshots);
  }
}

export default Book;
