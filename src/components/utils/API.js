import axios from "axios";

const BASEURL = "https://dog.ceo/api/breeds/image/random";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    if (query === 'random') {
      return axios.get(BASEURL);
    } else {
      return axios.get(`https://dog.ceo/api/breed/${query}/images`);
    }
  }
};
