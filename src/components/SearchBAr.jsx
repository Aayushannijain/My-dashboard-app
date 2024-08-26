import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../store";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="input-group search-bar">
      <input
        type="text"
        className="form-control"
        placeholder="Search widgets..."
        onChange={handleInputChange}
      />
      <span className="input-group-text">
        <IoMdSearch /> {/* Displaying the search icon */}
      </span>
    </div>
  );
};

export default SearchBar;
