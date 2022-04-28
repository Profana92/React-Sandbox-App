import React from "react";

function BookDescription(props) {
  return (
    <div>
      {console.log(props)}
      <h1>{props.book.title}</h1>
      <h2>{props.book.author}</h2>
      <h4>{props.book.pages}</h4>
    </div>
  );
}

export default BookDescription;
