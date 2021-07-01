<template>
  <section class="pagination d-flex align-items-center" :class="'ltr'">
    <div class="d-flex prev-actions">
      <button v-if="width > 1024" class="btn btn-pagination mx-2" :disabled="pagination.current_page <= 1" @click.prevent="changePage(1)">
        <span v-if="width > 1024">First</span>
        <span v-else class="icon-arrow_left_ios"></span>
      </button>
      <button class="btn btn-pagination" :disabled="pagination.current_page <= 1" @click.prevent="changePage(pagination.current_page - 1)">
        <span v-if="width > 1024">Previous</span>
        <span v-else class="icon-arrow_left_ios"></span>
      </button>
    </div>
    <ul class="list d-flex px-2 rounded-10 mx-2">
      <li class="p-2 mx-1" v-for="(page, index) in pagesNumber" :key="index">
        <a href="javascript:void(0)" @click.prevent="changePage(page)" :class="{'active': page == pagination.current_page}">{{ page }}</a>
      </li>
    </ul>
    <div class="d-flex next-actions">
      <button class="btn btn-pagination" :disabled="pagination.current_page >= pagination.last_page" @click.prevent="changePage(pagination.current_page + 1)">
        <span v-if="width > 1024">Next</span>
        <span v-else class="icon-arrow_right_ios"></span>
      </button>
      <button v-if="width > 1024" class="btn btn-pagination mx-2" :disabled="pagination.last_page == pagination.current_page" @click.prevent="changePage(pagination.last_page)">
        <span v-if="width > 1024">Last Page</span>
        <span v-else class="icon-arrow_right_ios"></span>
      </button>
    </div>
  </section>
</template>
<script>
  export default {
    props: {
      pagination: {
        type: Object,
        required: true
      },
      offset: {
        type: Number,
        default: 4
      }
    },

    computed: {
      pagesNumber() {
        if (!this.pagination.to) {
          return []
        }

        let from = this.pagination.current_page - this.offset
        if (from < 1) {
          from = 1
        }

        let to = from + (this.offset * 2)
        if (to >= this.pagination.last_page) {
          to = this.pagination.last_page
        }

        let pagesArray = []
        for (let page = from; page <= to; page++) {
          pagesArray.push(page)
        }

        return pagesArray
      },

      width() {
        return window.innerWidth
      }
    },

    methods : {
      changePage(page) {
        this.pagination.current_page = page
        this.$emit('onPageChange')
      }
    }
  }
</script>
