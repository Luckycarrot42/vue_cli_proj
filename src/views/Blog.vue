<template>
  <div class="home">
    <router-link :to="paginate(false)">Anterior</router-link> *
    <router-link :to="paginate(true)">Siguiente</router-link>
    <h1 v-text="title"></h1>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat id dui nec vehicula. Quisque ut ante nulla. Phasellus elit erat, dignissim sed volutpat ut, ornare ut ex. Nam non arcu vestibulum, pretium nulla in, ultrices eros. Mauris nec pellentesque urna. Sed eget venenatis diam. Suspendisse tempor lacus et dolor varius, ut scelerisque arcu fringilla. Suspendisse non ultricies neque, ac ornare ipsum. In et diam sed lorem pellentesque tempus. Donec eleifend, lectus eget pellentesque facilisis, tortor nibh pulvinar sapien, id sodales metus lacus at arcu. Fusce dapibus dolor sit amet est fringilla, vitae cursus nisi fermentum. Vestibulum porta eros ac lectus cursus, ut aliquam lectus fermentum. Sed porta malesuada justo, eu pellentesque nisi varius eget.</p>
    <br />
    <router-link :to="{name: 'Comments'}">Comentar</router-link>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
  computed: {
    title () {
      return `Este es el blog n° ${this.$route.params.post}`
    }
  },
  methods: {
    paginate (dir) {
      const currentPost = parseInt(this.$route.params.post)
      if (dir) {
        return `/blog/${currentPost + 1}`
      } else {
        return currentPost > 1 ? `/blog/${currentPost - 1}` : `/blog/${currentPost}`
      }
    }
  }
}
</script>
