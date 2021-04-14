<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
    }
}
</style>
