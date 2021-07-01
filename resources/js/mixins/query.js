import config from "../../js/vue.config";
export default {
  props: {
    baseUrl: {
      type: String,
      // The JSONPlaceholder API is a fake API
      // basically a Lorem Ipsum JSON API.
      default: config.BASE_URL
    },
    endpoint: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // Create a new axios instance.
      api: axios.create({
        baseURL: this.baseUrl,
        headers: {
          Authorization: {
            toString() {
              return `Bearer ${localStorage.getItem("default_auth_token")}`;
            }
          }
        }
      }),
      data: null,
      error: null,
      loading: false
    };
  },
  methods: {
    // The `query` method will handle
    // different query types for us.
    async query(type, ...params) {
      // If we're currently loading content
      // we don't submit an additional request.
      if (this.loading) return;

      this.loading = true;
      try {
        if (type == "get") {
          if (params.length > 1 && params[1].params) {
            if (params[1].params.filters) {
              let filters = {...params[1].params.filters};
              params[0] += "?page=" + filters.page;
            //   delete params[1].params.filters.page;
            } else {
              let filters = {...params[1].params.page};
              params[0] += "?page=" + params[1].params.page;
              // delete params[1].params.page;
            }
          }
        }
        const response = await this.api[type](...params);
        this.data = response.data;

        if (params.length > 1 && type == 'get') {
          this.data.pagination = {
            total: response.data.total,
            per_page: response.data.per_page,
            current_page: response.data.current_page,
            last_page: response.data.last_page,
            from: response.data.from,
            to: response.data.to
          }
          this.$emit(`success`, response);
        }
        if(type !== 'get') {
          this.$emit('success', response);
        }
        this.error = null;
      } catch (error) {
        if(!this.isUpdateMethod(type)) {
          this.data = null;
        }
        this.error =
           this.isUpdateMethod(type) ? error.response.data.errors : error.response;
        this.$emit(`error`, error);
      }
      this.loading = false;
    },
    isUpdateMethod(type) {
      return type == "post" || type == "patch" || type == "put"
    }
  }
};
