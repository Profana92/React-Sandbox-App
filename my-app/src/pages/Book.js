import React, { Component } from "react";
import Header from "./partial/Header";
import BookDescription from "./Book/BookDescription";
import Footer from "./partial/Footer";

class Book extends Component {
  render() {
    return (
      <div>
        <Header />
        <BookDescription />
        <Footer />
      </div>
    );
  }
}

export default Book;
