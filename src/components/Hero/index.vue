<template>
  <section
    id="home"
    class="flex flex-col items-center md:items-start justify-center"
  >
    <div
      class="w-2/5 lg:w-1/3 absolute ml-8 lg:ml-24 space-y-4 text-white text-center md:text-left z-10"
    >
      <h1 class="font-bold text-4xl lg:text-5xl">
        {{ title }}
      </h1>
      <div class="flex justify-center md:justify-start gap-x-8 font-bold">
        <span>{{ getYear(release_date) }}</span>
        <span class="flex gap-x-2 justify-center items-center"
          ><svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            class="w-4 text-yellow-400"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
            ></path>
          </svg>
          {{ vote_average }}</span
        >
      </div>
      <p class="text-md lg:text-lg">
        {{ overview }}
      </p>
    </div>
    <img
      :src="'https://image.tmdb.org/t/p/original/' + this.backdrop_path"
      :alt="title"
    />
  </section>
</template>

<script>
export default {
  props: {
    backdrop_path: String,
    title: String,
    overview: String,
    vote_average: Number,
    release_date: String,
  },
  data() {
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
