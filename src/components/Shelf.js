import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = (props) => {
  const books = props.books.filter((book) => book.shelf === props.shelfName);

  const changeHandler = (id, e) => {
    props.onChange(id, e.target.value);
  };

  return (
    <div className="bookshelf" id={props.shelfName}>
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <Book
                key={book.id}
                shelf={book.shelf}
                imageLink={book.imageLinks && book.imageLinks.smallThumbnail}
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
Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Shelf;
