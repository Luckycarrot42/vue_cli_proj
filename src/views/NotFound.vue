<template>
  <div class="home">
    <h1>Error 404</h1>
    <p>{{ route }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    route () {
      return this.$route.path
      // <-- entrega ruta usada para llegar -->
    }
  }
}
</script>
