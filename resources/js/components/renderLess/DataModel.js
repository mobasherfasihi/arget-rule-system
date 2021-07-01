import queryMixin from '../../mixins/query';

export default {
  mixins: [queryMixin],
  props: {
    // Make it possible to (optionally) provide
    // initial data via an `entity` property.
    entity: {
      type: Object,
    },
    // By providing an initial ID, we can link
    // the model instance with a specific record.
    id: {
      type: [Number, String],
    },
    // redirectURL: {
    //   type: String
    // },
    // redirectSuccessMessage: {
    //   type: String
    // }
  },
  data() {
    return {
      data: this.entity || null,
    };
  },
  created() {
    // If an ID but no initial data entity
    // was provided, the specified record
    // is fetched from the API.
    if (this.id && !this.data) this.find();
  },
  methods: {
    create(data) {
      return this.query('post', this.endpoint, data);
    },
    destroy(id) {
      return this.query('delete', `${this.endpoint}/${id}`);
    },
    find() {
      return this.query('get', `${this.endpoint}/${this.id}`);
    },
    update(data) {
      return this.query('patch', `${this.endpoint}/${this.id}`, data);
    },
    restore(uri, id) {
      return this.query('patch', `${this.endpoint}/${id}/${uri}`);
    },
    removeValidationMsg(key) {
      if (!this.error || !this.error[key]) return;
      delete this.error[key];
    },
  },
  render() {
    return this.$scopedSlots.default({
      create: this.create,
      data: this.data,
      error: this.error,
      destroy: this.destroy,
      loading: this.loading,
      update: this.update,
      restore: this.restore,
      removeValidationMsg: this.removeValidationMsg
    });
  },
};
