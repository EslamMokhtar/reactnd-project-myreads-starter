import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import CurrentlyReading from "./components/CurrentlyReading";
import WantToRead from "./components/WantToRead";
import Read from "./components/Read";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route
          path="/"
          element={
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <CurrentlyReading />
                  <WantToRead />
                  <Read />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
