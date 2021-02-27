import React from "react";

function PageBanner() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid mb-1 py-2 text-white bg-dark">
        <div className="container text-center">
          <h1 className="display-4 title">
            <img src="img/employees.png" alt="Employees group" className="icon pb-2 pr-2"/>
            Employee Directory</h1>
          <h2 className="lead">Click on name header to sort by name or use search box to narrow your results.</h2>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
