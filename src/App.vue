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
  <div v-else>
    <Header />
    <Carousel v-bind="info[0]" />
    <main>
      <section>
        <h2>Featured Movie</h2>
        <div v-for="movie in info" :key="movie.id">
          <Movies v-bind="movie" />
        </div>
      </section>
      <section>
        <h2>New Arrival</h2>
        <div v-for="movie in currentYear" :key="movie.id">
          <Movies v-bind="movie" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import Movies from '@/components/Movies'

export default {
  components: {
    Header,
    Carousel,
    Movies,
  },
  data() {
    return {
      info: null,
      loading: true,
      video: null,
    }
  },
  mounted() {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
      )
      .then((response) => (this.info = response.data.results))
      .catch((error) => {
        console.log(error)
      })
      .finally(() => (this.loading = false))
  },
  computed: {
    currentYear() {
      const current = new Date().getFullYear()
      return this.info.filter((year) => year.release_date.includes(current))
    },
  },
}
</script>
