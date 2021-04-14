<template>
  <div class="register">
    <div class="register__container container">
      <h2>Registrate</h2>
      <div class="register__container--buttons">
        <button class="button-social">
          <font-awesome-icon :icon="['fab', 'google']" />
          Google
        </button>
        <button class="button-social">
          <font-awesome-icon :icon="['fab', 'facebook']" />
          Facebook
        </button>
        <button class="button-social">
          <font-awesome-icon :icon="['fab', 'twitter']" />
          Twitter
        </button>
      </div>
      <hr>
      <router-link to="/login" class="button-primary-outline">
        <font-awesome-icon :icon="['fas', 'user']" />
        Iniciar sesión
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>