<template>
  <article class="w-60 flex flex-col gap-y-3 mb-4">
    <h2 class="order-3 text-xl text-gray-900 font-bold">
      {{ title || original_name }}
    </h2>
    <img
      :src="'https://image.tmdb.org/t/p/w500/' + this.poster_path"
      :alt="title || original_name"
      class="order-1"
    />
    <div class="order-4 text-justify">
      <p class="inline text-justify" v-if="!readMoreActivated">
        {{ overview.slice(0, 200) }}
      </p>
      <span class="inline" v-if="!readMoreActivated && overview.length > 200"
        >[...]</span
      >
      <span
        class="block underline text-red-600"
        v-if="!readMoreActivated && overview.length > 200"
        @click="activateReadMore"
      >
        Read more...
      </span>
      <p v-if="readMoreActivated">{{ overview }}</p>
    </div>
    <div class="order-2 flex justify-between items-center">
      <span class="text-xs text-gray-400 font-bold"
        >{{ original_language | upperCase }},
        {{ (release_date || first_air_date) | currentYear }}</span
      >
      <div
        class="flex gap-x-1 items-center justify-center text-xs text-gray-400 font-bold"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="star"
          class="text-yellow-400 w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
          ></path>
        </svg>
        {{ vote_average }}
      </div>
    </div>
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
    first_air_date: String,
    original_name: String,
  },
  data() {
    return {
      readMoreActivated: false,
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
  methods: {
    activateReadMore() {
      this.readMoreActivated = true
    },
  },
}
</script>
