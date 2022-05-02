import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import BookDescription from "./components/book/BookDescription";
// import Header from "./components/partial/Header";
// import Footer from "./components/partial/Footer";
import Book from "./pages/Book";
// import PropCheck from "./components/propcheck/PropCheck";
import Counter from "./components/counter/Counter";
import HOC from "./components/user/User";
import Refs from "./components/refs/Refs";
import First from "./components/childrenproperty/First";
import Second from "./components/childrenproperty/Second";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <First>
      <Second />
    </First>
    {/* <App /> */}
    {/* <Header /> */}
    <Book />
    <Counter />
    {/* <PropCheck age={29} /> */}
    {/* <BookDescription /> */}
    {/* <Footer /> */}
    <HOC adultAge="19" message="Siemanko" />
    <Refs />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
