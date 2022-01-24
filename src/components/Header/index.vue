<template>
  <header
    class="bg-black md:bg-bg h-56 md:h-16 w-full md:absolute flex flex-col md:flex-row gap-x-8 items-center justify-center md:justify-around"
  >
    <a href="/#home">
      <img src="assets/logo.svg" alt="Logo" />
    </a>
    <nav class="flex flex-col md:flex-row gap-x-16 items-center text-white">
      <a href="#featured" class="links"> <span> Featured Movie </span></a>
      <a href="#new-arrival" class="links"> <span> New Arrival </span></a>
      <a href="#tv-show" class="links"> <span> TV Shows </span></a>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.links {
  position: relative;
  width: max-content;
  padding: 1rem 0.375rem;
  font: 1rem;
  font-weight: 900;
  letter-spacing: 0.0625rem;
  text-decoration: none;
  text-transform: uppercase;
}
.links::after {
  border-radius: 5px;
  bottom: 0.875rem;
  content: '';
  display: block;
  height: 0.3rem;
  left: 0;
  opacity: 0.3;
  position: absolute;
  right: 0;
  transition: opacity 0.3s ease-in-out;
  background-color: crimson;
}
.links:hover,
.links:active {
  color: white;
}
.links::after {
  opacity: 1;
}
.links span {
  position: relative;
  z-index: 8;
}
</style>
