import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const CurrentlyReading = (props) => {
  const books = props.books.filter((book) => book.shelf === "currentlyReading");

  const changeHandler = (id, e) => {
    props.onChange(id, e.target.value);
  };

  return (
    <div className="bookshelf" id="currentlyReading">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <Book
                key={book.id}
                imageLink={book.imageLinks.smallThumbnail}
                changeHandler={changeHandler.bind(null, book.id)}
                title={book.title}
                authors={book.authors}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};
CurrentlyReading.propTypes = {
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default CurrentlyReading;
