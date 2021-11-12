import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: props.imageLink && `url(${props.imageLink})`,
            }}
          />
          <div className="book-shelf-changer">
            <form onChange={props.changeHandler}>
              <select defaultValue={props.shelf}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </form>
          </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors.join(", ")}</div>
      </div>
    </li>
  );
};
Book.propTypes = {
  imageLink: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
};
export default Book;
