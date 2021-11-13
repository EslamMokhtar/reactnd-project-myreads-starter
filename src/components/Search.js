import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Book from "./Book";

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
    props.onChangeHandler(value);
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
                <Book
                  key={book.id}
                  shelf="none"
                  imageLink={book.imageLinks && book.imageLinks.smallThumbnail}
                  changeHandler={changeHandler.bind(null, book.id)}
                  title={book.title}
                  authors={book.authors}
                />
              );
            })}
        </ol>
        {books.error && (
          <h2 style={{ textAlign: "center" }}>
            No results for "{query.search}"
          </h2>
        )}
      </div>
    </div>
  );
};
Search.propTypes = {
  searchResult: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};
export default Search;
