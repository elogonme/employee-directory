import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map((result, i) => (
        <li className="list-group-item" key={i}>
          <img alt="Dog" className="img-fluid" src={result} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
