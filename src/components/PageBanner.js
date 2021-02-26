import React from "react";

function PageBanner() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid mb-1 py-2 text-white bg-dark">
        <div className="container text-center">
          <h1 className="display-4 title">Employee Directory</h1>
          <h2 className="lead">Click on table headers to filter by heading or use search box to narrow your results.</h2>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
