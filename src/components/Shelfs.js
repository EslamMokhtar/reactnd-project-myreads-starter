import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

const Shelfs = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {[
            { name: "currentlyReading", title: "Currently Reading" },
            { name: "wantToRead", title: "Want To Read" },
            { name: "read", title: "Read" },
          ].map((shelf, index) => (
            <Shelf
              key={index}
              shelfTitle={shelf.title}
              shelfName={shelf.name}
              books={props.books}
              onChange={props.onChange}
            />
          ))}
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
