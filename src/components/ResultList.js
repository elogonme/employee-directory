import React, { Component } from "react";
import { FaSortAlphaDown, FaSortAlphaUpAlt, BiSort, } from 'react-icons/fa';

const sortTypes = {
  down: {
    fn: (a, b) => {
      var nameA=a.name.first.toLowerCase(), nameB=b.name.first.toLowerCase();
      if (nameA < nameB) //sort string ascending
        return -1;
      if (nameA > nameB)
        return 1;
      return 0; //default return value (no sorting)
    }
  },
  up: {
    fn: (a, b) => {
      var nameA=a.name.first.toLowerCase(), nameB=b.name.first.toLowerCase();
      if (nameA > nameB) //sort string ascending
        return -1;
      if (nameA < nameB)
        return 1;
      return 0; //default return value (no sorting)
    }
  },
};

class ResultList extends Component {
  state = {
		currentSort: 'down'
	};
  
  // method called every time the sort button is clicked
	// it will change the currentSort value to the next one
	onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
	};
  
  render() {
    const data  = this.props.results;
		const { currentSort } = this.state;

    return (
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col" onClick={this.onSortChange}>
              {this.state.currentSort === 'down' 
              ? <FaSortAlphaDown className="text-info mr-1" /> 
              : <FaSortAlphaUpAlt className="text-info mr-1" />
              }
              Name
              </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">
              <FaSortAlphaDown className="text-info mr-1" />
              Location
              </th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {[...data].sort(sortTypes[currentSort].fn).map((result, i) => (
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
}

export default ResultList;
