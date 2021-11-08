import React from "react";
import { Link } from "react-router-dom";
import WantToRead from "./WantToRead";
import Read from "./Read";
import CurrentlyReading from "./CurrentlyReading";
import PropTypes from "prop-types";

const Shelfs = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading books={props.books} onChange={props.onChange} />
          <WantToRead books={props.books} onChange={props.onChange} />
          <Read books={props.books} onChange={props.onChange} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};
Shelfs.propTypes = {
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Shelfs;
