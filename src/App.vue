<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <Hero v-bind="info[0]" />
  </div>
</template>

<script>
import axios from 'axios'
import Hero from '@/components/Hero'

export default {
  components: {
    Hero,
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
