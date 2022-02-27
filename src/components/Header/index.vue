<template>
  <header class="header md:bg-black md:bg-darkTransparent">
    <div class="header__content">
      <div class="header__nav bg-black">
        <a href="/#home">
          <img src="/assets/logo.svg" alt="Logo" class="header__logo" />
        </a>
        <button
          :class="isActive ? 'header__menu active' : 'header__menu'"
          @click="toggleLinks"
        >
          <img :src="isActive ? closeButton : openButton" alt="Menu" />
        </button>
      </div>
      <nav class="nav">
        <div
          class="nav__menu"
          :style="isActive ? 'height: 250px;' : 'height: 0;'"
        >
          <ul class="nav__list w-full text-center">
            <li v-for="link in links" :key="link.id">
              <a :href="link.local" class="nav__links m-auto">{{
                link.name
              }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleLinks() {
      this.isActive = !this.isActive;
    },
  },
  data() {
    return {
      closeButton: "/assets/icons/x.svg",
      openButton: "/assets/icons/menu.svg",
      isActive: false,
      links: [
        { id: 1, name: "Featured Movie", local: "#featured" },
        { id: 2, name: "New Arrival", local: "#new-arrival" },
        { id: 3, name: "TV Shows", local: "#tv-show" },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  position: absolute;
  z-index: 10;
}

.header__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
}

.header__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 2rem;
  width: 100%;
}

.header__menu {
  border-color: transparent;
  outline: transparent;
  background: transparent;
  cursor: pointer;
  padding: 8px;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  background-color: rgb(220, 20, 60);
}

.header__menu:hover {
  background-color: rgb(255, 24, 70);
}

.header__menu.active {
  transform: rotate(180deg);
}

.nav {
  width: 100%;
  text-align: center;
}

.nav__menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in;
  background-color: rgba(0, 0, 0, 0.7);
}

.nav_list {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
}

.nav__links {
  display: block;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  width: max-content;
  padding: 1rem 0.375rem;
  font: 1rem;
  font-weight: 900;
  letter-spacing: 0.0625rem;
  transition: all 0.3s ease-in;
  cursor: pointer;
}

.nav__button {
  display: block;
  width: 140px;
  border-radius: 1.875rem;
  margin: 0 auto;
  padding: 18px 0;
  background-color: whitesmoke;
  font: 1rem;
  color: blue;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease-in;
}

@media (min-width: 48em) {
  .header__content {
    flex-direction: row;
    justify-content: space-between;
    padding: 0.6rem 0;
    width: 91%;
  }
  .header__nav {
    padding: 0;
    width: auto;
    background-color: transparent;
  }
  .header__menu {
    display: none;
  }
  .nav {
    width: max-content;
  }
  .nav__menu {
    height: auto !important;
    width: max-content;
    background-color: transparent;
  }
  .nav__triangle {
    display: none;
  }
  .nav__list {
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3.125rem;
  }
  .nav__list li {
    margin: 0;
  }
  .nav__links {
    color: #fff;
  }
  .nav__links:hover {
    transform: scale(1.1);
  }
  .nav__button {
    background-color: #fff;
  }
  .nav__button:hover {
    color: #fff;
    background-color: hsla(200, 100%, 72%, 1);
  }
}

@media (min-width: 120em) {
  .header {
    width: 83.125rem;
  }
}
</style>
