<template>
  <div class="navbar">
    <div class="navbar__container container">
      <router-link to="/"><img src="../assets/images/logo-white.svg" alt="Logo BBVA"></router-link>
      <div class="buttons">
        <router-link to="/login" class="color-yellow">
          <font-awesome-icon :icon="['fas', 'user']" />
          Iniciar sesión
        </router-link>
        <router-link to="/register" class="button-primary">
          <span>
            <font-awesome-icon :icon="['fas', 'plus']" />
            Crear una cuenta
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>