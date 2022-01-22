<template>
  <article>
    <h2>{{ title }}</h2>
    <img
      :src="'https://image.tmdb.org/t/p/w500/' + this.poster_path"
      :alt="title"
    />
  </article>
</template>

<script>
export default {
  props: {
    id: Number,
    poster_path: String,
    title: String,
    overview: String,
    vote_average: Number,
    release_date: String,
  },
}
</script>

<style></style>
