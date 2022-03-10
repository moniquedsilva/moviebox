<template>
  <footer
    class="h-9 flex items-center text-center justify-center bg-black text-white"
  >
    <button @click="shareViaWebShare">
      <slot />
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
  name: "Sharer",
  props: {
    label: {
      type: String,
      default: "",
    },
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fixed: false,
      left: "auto",
      top: "16px",
      twitter: "http://twitter.com/share?",
      facebook: "https://www.facebook.com/sharer.php?",
      whatsapp: "whatsapp://send?",
      clipboard: undefined,
      copied: false,
    };
  },
  computed: {
    items() {
      if (this.options) {
        return this.options;
      }
      return [
        {
          label: "Facebook",
          value: "facebook",
          iconName: "facebook",
          iconSize: 16,
        },
        {
          label: "Whatsapp",
          value: "whatsapp",
          iconName: "whatsapp",
          iconSize: 16,
        },
        {
          label: "Twitter",
          value: "twitter",
          iconName: "twitter",
          iconSize: 16,
        },
        {
          label: "Copiar Link",
          value: "link",
          iconName: "link",
          iconSize: 16,
        },
      ];
    },
  },
  methods: {
    shareViaWebShare(item) {
      if (navigator.share) {
        navigator.share({
          title: this.title,
          text: this.text,
          url: this.url,
        });
      } else {
        switch (item.value) {
          case "facebook":
            return this.shareFacebook();
          case "twitter":
            return this.shareTwitter();
          case "whatsapp":
            return this.shareWhatsapp();
          case "link":
            return this.copyLink();
        }
      }
    },
    share(url, title) {
      window.open(
        url,
        title,
        "height=670, width=670, top=" +
          (window.innerHeight / 2 - 200) +
          ", left=" +
          (window.innerWidth / 2 - 335) +
          ", toolbar=no, menubar=no, scrollbars=yes, resizable=yes"
      );
      window.setTimeout(() => {
        this.$emit("opened");
      }, 300);
    },
    shareFacebook() {
      this.share(`${this.facebook}u=${this.url}`, "Compartilhe no Facebook");
    },
    shareTwitter() {
      this.share(
        `${this.twitter}text=${this.title.split("|").join("-")}&url=${
          this.url
        }&via=SiteEscavador`,
        "Compartilhe no Twitter"
      );
    },
    copyLink() {
      this.$copyText(`${this.title}\n${this.url}`)
        .then(() => {
          this.$toast.show("Link copiado!");
        })
        .catch(() => {
          this.$toast.error("Não foi possível copiar. Tente novamente.");
        });
    },
    shareWhatsapp() {
      this.share(
        `${this.whatsapp}text=${this.title} - ${this.url}`,
        "Compartilhe no Whatsapp"
      );
    },
  },
};
</script>
