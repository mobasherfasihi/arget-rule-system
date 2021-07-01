import queryMixin from '../../mixins/query';

export default {
    mixins: [queryMixin],
    props: {
        // Provide a filter to limit the
        // results of the API request.
        filter: {
            type: Object,
        },
        filterKey: {
            type: String,
            default: null
        }
    },
    watch: {
        // Load the data from the given endpoint
        // on initial rendering of the component and
        // every time the filter property changes.
        filter: {
            handler: 'load',
            deep: true,
            immediate: true,
        },
        endpoint: {
            handler: 'load',
            deep: true,
            immediate: true,
        },
    },
    methods: {
        load() {
            let filterObject = this.filter;
            if (this.filterKey)
                filterObject = { [this.filterKey]: this.filter }
            return this.query('get', this.endpoint, { params: filterObject });
        },
    },
    render() {
        // Render the default scoped slot and
        // provide data and method properties
        // via the slot scope.
        return this.$scopedSlots.default({
            data: this.data,
            error: this.error,
            load: this.load,
            loading: this.loading,
        });
    },
};
