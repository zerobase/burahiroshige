<template>
  <nav class="navbar navbar-light bg-light global-navbar">
    <router-link class="nav-title" to="/">ブラ広重(仮)</router-link>
    <GitHubCorner></GitHubCorner>
  </nav>
</template>

<script>
import GitHubCorner from '@/components/GitHubCorner'

export default {
  components: {
    GitHubCorner
  }
}
</script>

<style scoped>
.navbar {
  padding: 5px;
}

.nav-title {
  text-decoration: none;
  font-size: 24px;
}
</style>
