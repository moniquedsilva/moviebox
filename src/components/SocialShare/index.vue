<template v-if="webShareAPI">
  <button @click="webShare">
    <slot />
  </button>
</template>

<script>
export default {
  name: "SocialShare",
  props: {
    title: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  computed: {
    webShareAPI() {
      return navigator.share;
    },
  },
  methods: {
    webShare() {
      if (navigator.share) {
        navigator.share({
          title: this.title,
          text: this.text,
          url: this.url,
        });
      }
    },
  },
};
</script>

<style></style>
