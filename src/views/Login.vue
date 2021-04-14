<template>
  <div class="login">
    <div class="login__container container">
      <h2>Iniciar sesión</h2>
      <div class="login__container--buttons">
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
      <router-link to="/register" class="button-primary">
        <span>
          <font-awesome-icon :icon="['fas', 'plus']" />
          Crear una cuenta
        </span>
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