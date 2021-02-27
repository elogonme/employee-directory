import React from "react";
import searchIcon from '../img/search.png';

// Search form component
function SearchForm(props) {
  return (
    <form className="form-inline">
      <div className="form-group my-2">
      <div className="input-group-prepend">
          <div className="input-group-text"><img src={searchIcon} alt="search" /></div>
        </div>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
