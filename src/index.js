import React from "react";
import ReactDOM from "react-dom/client";

import './style.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/71hwUY5ZmxL._AC_UL900_SR900,600_.jpg"
    alt="Curious Minds Book"
  />
);

const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>;
};

const Author = () =>{
  return <h4>Jordan Moore</h4>;
};


root.render(<BookList/>);

