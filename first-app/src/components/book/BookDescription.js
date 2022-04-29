import propTypes from "prop-types";
import React from "react";

function BookDescription(props) {
  return (
    <div>
      <h1>{props.book.title}</h1>
      <h2>{props.book.author}</h2>
      <h4>{props.book.pages}</h4>
    </div>
  );
}
BookDescription.propTypes = {
  book: propTypes.object.isRequired,
};
BookDescription.defaultProps = {
  book: {
    title: "tytuł książki",
    author: "autor",
    pages: "liczba stron",
  },
};
export default BookDescription;
