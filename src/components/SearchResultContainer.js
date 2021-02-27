import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "./utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    employees: [],
    filtered: []
  };

  // When this component mounts, get Employees from API
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.search()
      .then(res => {
        this.setState({ employees: res.data.results,
         filtered: res.data.results });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    // Filter array items based on search criteria (query) 
    function filterItems(arr, query) {
      return arr.filter(function(el) {
          return el.name.first.toLowerCase().indexOf(query.toLowerCase()) !== -1 || el.name.last.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    }

    let employees = filterItems(this.state.employees, value);
    this.setState({
      [name]: value,
      filtered: employees
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.filtered} />
      </div>
    );
  }
}

export default SearchResultContainer;
