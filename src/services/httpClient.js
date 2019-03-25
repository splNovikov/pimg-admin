import axios from 'axios';

const httpClient = (function() {
  return {
    get(url) {
      return axios.get(url);
    }
  };
})();

export { httpClient as default };
