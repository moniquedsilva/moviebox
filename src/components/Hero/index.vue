<template>
  <section>
    <h1>
      {{ title }}
    </h1>
    <div>
      <span>{{ getYear(release_date) }}</span>
      <span>{{ vote_average }}</span>
    </div>
    <p>
      {{ overview }}
    </p>
    <img
      :src="'https://image.tmdb.org/t/p/original/' + this.backdrop_path"
      :alt="title"
    />
  </section>
</template>

<script>
export default {
  props: {
    id: Number,
    backdrop_path: String,
    title: String,
    overview: String,
    vote_average: Number,
    release_date: String,
  },
  data: function () {
    return {
      year: '',
    }
  },
  methods: {
    getYear(newValue) {
      let date = newValue.split('-')
      return (this.year = date[0])
    },
  },
}
</script>
