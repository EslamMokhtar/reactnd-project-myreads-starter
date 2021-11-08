import React from "react";
import PropTypes from "prop-types";

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
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <form onChange={changeHandler.bind(null, book.id)}>
                        <select defaultValue="wantToRead">
                          <option value="move" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </form>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
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
