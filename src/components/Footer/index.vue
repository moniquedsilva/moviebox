<template>
  <footer
    class="h-9 flex items-center text-center justify-center bg-black text-white"
  >
    <button v-if="canShare()" @click="share">
      <img src="/assets/icon_share.png" />
    </button>
    <div>
      Developed by
      <a
        href="https://github.com/moniquedsilva"
        target="_blank"
        rel="noopener noreferrer"
        class="underline"
      >
        Monique Silva</a
      >.
    </div>
  </footer>
</template>

<script>
export default {
  name: "ShareLink",
  methods: {
    canShare() {
      if (navigator.share) {
        return true;
      }
      return false;
    },
    share() {
      if (navigator.share) {
        const title = "teste";
        const text = "teste";
        navigator
          .share({
            title,
            url: window.location.href,
            text,
          })
          .then(() => {
            alert("Thanks for sharing!");
          })
          .catch((err) => {
            alert(`Couldn't share because of ${err.message}`);
          });
      } else {
        alert("Web Share API not supported.");
      }
    },
  },
};
</script>
