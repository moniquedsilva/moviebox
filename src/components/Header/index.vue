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
              <a
                :href="link.local"
                @click="isActive = false"
                class="nav__links m-auto"
                >{{ link.name }}</a
              >
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
}

.header__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}

.header__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.75rem 2rem;
}

.header__menu {
  padding: 8px;
  cursor: pointer;
  outline: transparent;
  border-color: transparent;
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
  position: absolute;
  width: 100%;
  height: 0;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  transition: all 0.3s ease-in;
}

.nav_list {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: #fff;
}

.nav__links {
  display: block;
  width: max-content;
  padding: 1rem 0.375rem;
  font: 1rem;
  font-weight: 900;
  letter-spacing: 0.0625rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in;
}

.nav__links:after {
  content: "";
  display: block;
  width: 0;
  height: 4px;
  margin: 0 auto;
  border-radius: 20px;
  background: none repeat scroll 0 0 rgb(220, 20, 60);
  transition: all ease-in-out 0.3s;
}
.nav__links:hover:after {
  width: 100%;
  padding-right: 35px;
}

@media (min-width: 48em) {
  .header {
    position: absolute;
    z-index: 10;
  }

  .header__content {
    flex-direction: row;
    justify-content: space-between;
    width: 91%;
    padding: 0.6rem 0;
  }

  .header__nav {
    width: auto;
    padding: 0;
    background-color: transparent;
  }

  .header__menu {
    display: none;
  }

  .nav {
    width: max-content;
  }

  .nav__menu {
    position: static;
    width: max-content;
    height: auto !important;
    background-color: transparent;
  }

  .nav__triangle {
    display: none;
  }

  .nav__list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3.125rem;
    background-color: transparent;
  }

  .nav__list li {
    margin: 0;
  }

  .nav__links {
    color: #fff;
  }
}

@media (min-width: 120em) {
  .header {
    width: 83.125rem;
  }
}
</style>
