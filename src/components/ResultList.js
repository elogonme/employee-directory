import React from "react";

function ResultList(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, i) => (
          <tr key={i}>
            <td><img alt="User" className="img-fluid rounded" src={result.picture.medium} /></td>
            <td>{`${result.name.first} ${result.name.last}`}</td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.location.city}</td>
            <td>{result.dob.date.substring(0, 10).split("-").reverse().join("-")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  
  );
}

export default ResultList;
