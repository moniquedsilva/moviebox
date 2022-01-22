<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <Header />
    <Hero v-bind="info[0]" />
    <main>
      <section>
        <h2>Featured Movie</h2>
        <div v-for="movie in info" :key="movie.id">
          <Movies v-bind="movie" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Movies from '@/components/Movies'

export default {
  components: {
    Header,
    Hero,
    Movies,
  },
  data() {
    return {
      info: null,
      loading: true,
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
}
</script>
