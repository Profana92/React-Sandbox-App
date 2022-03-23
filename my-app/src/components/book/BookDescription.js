import React, { Component } from "react";

function BookDescription(props) {
  return (
    <div>
      {console.log(props)}
      <h1>{props.book.title}</h1>
      <h2>{props.book.author}</h2>
      <h3>Stron: {props.book.pages}</h3>
      {/* <button onClick={() => props.deleteBooks(props, id)}>Usuń Książkę</button> */}
      <hr />
    </div>
  );
}

export default BookDescription;
