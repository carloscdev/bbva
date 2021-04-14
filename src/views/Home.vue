<template>
  <div class="home">
    <Hero/>
    <div class="home__container">
      <h2>Tenemos lo que buscas</h2>
      <router-link to="/login" class="button-primary">
        <span>
          Descubre que producto tenemos para ti
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>
<style lang="scss">
.home {
  &__container {
    padding: 5rem 0;
    text-align: center;
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .button-primary {
      margin: 0 auto;
    }
  }
}
</style>
