import React from "react";

function ResultList(props) {
  return (
    <table className="table table-striped text-center">
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
            <td><img alt="User" className="img-fluid round shadow ml-2" src={result.picture.medium} /></td>
            <td className="align-middle">{`${result.name.first} ${result.name.last}`}</td>
            <td className="align-middle">{result.phone}</td>
            <td className="align-middle">{result.email}</td>
            <td className="align-middle">{result.location.city}</td>
            <td className="align-middle">{result.dob.date.substring(0, 10).split("-").reverse().join("-")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  
  );
}

export default ResultList;
