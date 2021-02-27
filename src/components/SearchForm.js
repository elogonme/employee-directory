import React from "react";
import searchIcon from '../img/search.png';

function SearchForm(props) {
  return (
    <form className="form-inline">
      <div className="form-group my-2">
      <div class="input-group-prepend">
          <div class="input-group-text"><img src={searchIcon} alt="search" /></div>
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
        {/* <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default SearchForm;
