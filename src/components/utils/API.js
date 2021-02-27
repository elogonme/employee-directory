import axios from "axios";
// API search method to fetch and return random list of employees
const BASEURL = "https://randomuser.me/api/?inc=picture,name,phone,email,location,dob&nat=ca,us,&results=100";

// Export an object with a "search" method that returns Employee List from the Random user API
 const API = {
  search: function() {
      return axios.get(BASEURL);
  }
};

export default API;