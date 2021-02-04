import React from "react";

const Book = (props) => {
  const { img, title, author } = props.book;
  const clickHandler = () => {
    console.log("Hello World");
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
    </article>
  );
};

export default Book;
