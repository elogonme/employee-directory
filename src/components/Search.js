import React from "react";
import SearchResultContainer from "./SearchResultContainer";

function Search(props) {
  return (
    <div className="container text-center">
      <h1 className="mt-2">Search by Breed!</h1>
      <SearchResultContainer />
      
    </div>
  );
}

export default Search;
