<template>
  <article class="w-60 flex flex-col gap-y-3">
    <h2 class="order-3 text-lg text-gray-900 font-bold">{{ title }}</h2>
    <img
      :src="'https://image.tmdb.org/t/p/w500/' + this.poster_path"
      :alt="title"
      class="order-1"
    />
    <span class="order-2 text-xs text-gray-400 font-bold"
      >{{ original_language | upperCase }},
      {{ release_date | currentYear }}</span
    >
  </article>
</template>

<script>
export default {
  props: {
    id: Number,
    poster_path: String,
    genre_ids: Array,
    title: String,
    overview: String,
    original_language: String,
    vote_average: Number,
    release_date: String,
  },
  data() {
    return {
      genreList: [],
      genre: [
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' },
        { id: 16, name: 'Animation' },
        { id: 35, name: 'Comedy' },
        { id: 80, name: 'Crime' },
        { id: 99, name: 'Documentary' },
        { id: 18, name: 'Drama' },
        { id: 10749, name: 'Romance' },
        { id: 10751, name: 'Family' },
      ],
    }
  },
  filters: {
    upperCase: function (value) {
      if (!value) return ''
      return value.toString().toUpperCase()
    },
    currentYear: function (value) {
      if (!value) return ''
      value = value.toString().split('-', 3)
      return value[0]
    },
  },
}
</script>

<style></style>
