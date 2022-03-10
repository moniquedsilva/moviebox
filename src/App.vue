<template>
  <div
    v-if="loading"
    class="w-screen h-screen flex flex-col gap-y-8 items-center justify-center"
  >
    <div
      role="status"
      class="w-40 h-40 border-t-4 border-b-4 border-gray-900 rounded-full animate-spin"
    ></div>
    <span class="visually-hidden text-3xl text-gray-900">Loading...</span>
  </div>
  <div v-else class="font-DMsans">
    <Header />
    <div class="hidden md:block">
      <Hero v-bind="info[0]" />
    </div>
    <main>
      <section id="featured" class="w-11/12 mx-auto pt-16 pb-8">
        <h2 class="w-full mb-11 text-4xl font-bold">Featured Movie</h2>
        <div class="flex gap-x-20 overflow-x-auto scroll">
          <div v-for="movie in info" :key="movie.id">
            <Cards v-bind="movie" />
          </div>
        </div>
      </section>
      <section id="new-arrival" class="w-11/12 mx-auto py-8">
        <h2 class="w-full mb-11 text-4xl font-bold">New Arrival</h2>
        <div class="flex gap-x-20 overflow-x-auto scroll">
          <div v-for="movie in currentYear" :key="movie.id">
            <Cards v-bind="movie" />
          </div>
        </div>
      </section>
      <section id="tv-show" class="w-11/12 mx-auto pt-8 pb-16">
        <h2 class="w-full mb-11 text-4xl font-bold">TV Shows</h2>
        <div class="flex gap-x-20 overflow-x-auto scroll">
          <div v-for="movie in tvShow" :key="movie.id">
            <Cards v-bind="movie" />
          </div>
        </div>
      </section>
    </main>
    <Footer :title="title" :text="text" :url="url">
      <div class="text-white">306</div>
    </Footer>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Hero,
    Cards,
    Footer,
  },
  data() {
    return {
      info: null,
      loading: true,
      tvShow: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
      )
      .then((response) => (this.info = response.data.results))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.loading = false));
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
      )
      .then((response) => (this.tvShow = response.data.results))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.loading = false));
  },
  computed: {
    currentYear() {
      const current = new Date().getFullYear();
      return this.info.filter((year) => year.release_date.includes(current));
    },
    title() {
      return "Compartilhar";
    },
    text() {
      return "Já imaginou ter o controle total de sua vida jurídica? Acompanhe os seus processos e seja frequentemente atualizado sempre que ocorrerem movimentações. Vem aproveitar o melhor assistente jurídico do Brasil junto comigo com 50% de desconto 💛";
    },
    url() {
      return "https://www.escavador.com/";
    },
  },
};
</script>

<style scoped>
.scroll {
  scrollbar-color: rgb(17, 24, 39) rgb(226, 226, 226);
  scrollbar-width: thin;
}

.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgb(226, 226, 226);
  border-radius: 20px;
  background-color: rgb(226, 226, 226);
  overflow-x: auto;
}

.scroll::-webkit-scrollbar {
  width: 6px;
  height: 10px;
  border-radius: 20px;
  background-color: rgb(226, 226, 226);
  overflow-x: auto;
}

.scroll::-webkit-scrollbar-thumb {
  border-radius: 20px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(17, 24, 39);
  overflow-x: auto;
}
</style>
