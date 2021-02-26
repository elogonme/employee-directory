import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=picture,name,phone,email,location,dob";

// Export an object with a "search" method that returns Employee List from the Random user API
 const API = {
  search: function() {
      return axios.get(BASEURL);
  }
};

export default API;