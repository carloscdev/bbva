<template>
  <div class="login">
    <div class="login__container container">
      <h2>Iniciar sesión</h2>
      <div class="login__container--buttons">
        <button class="button-social">
          <router-link to="/products">
            <font-awesome-icon :icon="['fab', 'google']" />
            Google
          </router-link>
        </button>
        <button class="button-social">
          <router-link to="/products">
            <font-awesome-icon :icon="['fab', 'facebook']" />
            Facebook
          </router-link>
        </button>
        <button class="button-social">
          <router-link to="/products">
            <font-awesome-icon :icon="['fab', 'twitter']" />
            Twitter
          </router-link>
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
import axios from 'axios'
export default {
  methods: {
    loginFace() {
      axios.get('facebook')
      .then(response => console.log(response))
    }
  }
}
</script>

<style>

</style>