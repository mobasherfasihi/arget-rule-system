
import config from "../../js/vue.config";
const apiUrl = config.BASE_URL;
export const data = {
  methods: {
    getData(section) {
      return axios.get(`${apiUrl}/${section}`);
    },
    searchData(section, data, hasParams = false) {
      let params = Object.assign({}, data);
      Object.keys(params).forEach(key => {
        if (!params[key]) {
           delete params[key];
        }
      });
      // if hasParams is true, then pass data as separate params, otherwise pass it as query params
      if(hasParams)
        return axios.get(`${apiUrl}/${section}`, {params});

      const queryString = JSON.stringify(params);
      return axios.get(`${apiUrl}/${section}?${queryString}`);
    }
  }
}
