import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Search = (props) => {
  const books = props.searchResult;
  const [query, setQuery] = useState({ search: "" });
  const changeHandler = (id, e) => {
    props.onChange(id, e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(query.search);
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuery((pre) => ({ ...pre, [name]: value }));
  };

  const backToHomeHandler = () => {
    setQuery({ search: "" });
    props.clearSearch();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" onClick={backToHomeHandler}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <form onSubmit={submitHandler}>
            <input
              value={query.search}
              name="search"
              type="text"
              placeholder="Search by title or author"
              onChange={onChangeHandler}
            />
          </form>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map((book) => {
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
                          <select defaultValue="none">
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
        {books.error && <h3 style={{ textAlign: "center" }}>No Result.</h3>}
      </div>
    </div>
  );
};
Search.propTypes = {
  searchResult: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};
export default Search;
