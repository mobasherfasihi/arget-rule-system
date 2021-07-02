<template>
  <section
    class="alert p-3 rounded mt-3 d-flex justify-content-between align-items-center"
    :class="type"
  >
    <div v-if="message" @mouseover="stopTimer" @mouseleave="resumeTimer">
      <p>{{ messageText }}</p>
    </div>
    <slot v-else></slot>
    <span class="pointer" @click="close">&#9747;</span>
  </section>
</template>

<script>
export default {
  props: {
    /**
     *
     */
    type: {
      type: String,
      default: "success"
    },
    message: {
      type: Object
    }
  },
  data() {
    return {
      messageText: null,
      timer: null,
      hasTimer: false
    };
  },
  watch: {
    message: {
      handler(newVal, oldVal) {},
      deep: true
    }
  },
  mounted() {
    if (this.message && this.message.text && this.message.autoDismiss) {
      this.messageText = this.message.text;
      this.hasTimer = this.message.autoDismiss;
      this.stopTimer();
      this.message.autoDismiss && this.startTimer();
    }
  },
  methods: {
    close() {
      this.messageText = null;
      this.$emit("onClose");
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    resumeTimer() {
      this.startTimer();
    },
    startTimer() {
      this.timer = setTimeout(() => {
        this.close();
      }, 5000);
    }
  }
};
</script>
