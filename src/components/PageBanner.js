import React from "react";
import logo from '../img/employees.png';

// Top of the page banner component with title and logo
function PageBanner() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid mb-1 py-2 text-white bg-dark">
        <div className="container text-center">
          <h1 className="display-4 title">
            <img src={logo} alt="Employees" className="icon pb-2 pr-2"/>
            Employee Directory</h1>
          <h2 className="lead">Click on name header to sort by name or use search box to narrow your results.</h2>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
