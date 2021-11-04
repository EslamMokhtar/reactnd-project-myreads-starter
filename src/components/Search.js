import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";
const Search = () => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const books = await getAll();
    setBooks(books);
  };
  useEffect(() => {
    getBooks();
  }, []);
  console.log(books)
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid" />
      </div>
    </div>
  );
};

export default Search;
