import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Book from "./Book";
import { books } from "./books";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
