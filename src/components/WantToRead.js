import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const WantToRead = (props) => {
  const books = props.books.filter((book) => book.shelf === "wantToRead");

  const changeHandler = (id, e) => {
    props.onChange(id, e.target.value);
  };

  return (
    <div className="bookshelf" id="wantToRead">
      <h2 className="bookshelf-title">Want to Read</h2>
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
WantToRead.propTypes = {
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default WantToRead;
