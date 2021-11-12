import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import { getAll, update, search } from "./BooksAPI";
import "./App.css";
import Shelfs from "./components/Shelfs";

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const getBooks = async () => {
    const books = await getAll();
    setBooks(books);
  };
  useEffect(() => {
    getBooks();
  }, []);

  const onChange = (id, shelf) => {
    const book = books.find((book) => book.id === id);
    if (book) {
      book.shelf = shelf;
      setBooks([...books]);
      return update(book, shelf);
    }
    const bookFromSearch = searchResult.find((book) => book.id === id);
    bookFromSearch.shelf = shelf;
    setBooks([...books, bookFromSearch]);
    update(bookFromSearch, shelf);
  };

  const onSubmit = async (bookName) => {
    const booksFromSearch = await search(bookName);
    setSearchResult(booksFromSearch);
  };

  const onChangeHandler = async (bookName) => {
    const booksFromSearchQuery = await search(bookName);
    setSearchResult(booksFromSearchQuery || []);
  };
  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              onChangeHandler={onChangeHandler}
              clearSearch={() => setSearchResult([])}
              onChange={onChange}
              onSubmit={onSubmit}
              searchResult={searchResult}
            />
          }
        />
        <Route
          path="/"
          element={<Shelfs onChange={onChange} books={books} />}
        />
      </Routes>
    </div>
  );
};

export default App;
