<template>
  <div class="login">
    <div class="login__container container">
      <h2>Ayúdanos a mejorar tu experiencia. <br>Selecciona 1 o más opciones</h2>
      <div class="login__container--buttons">
        <router-link to="/products" class="button-trivia">
            Auto
        </router-link>
        <router-link to="/products" class="button-trivia">
            Vacaciones
        </router-link>
        <router-link to="/products" class="button-trivia">
            Casa
        </router-link>
        <router-link to="/products" class="button-trivia">
            Viajes
        </router-link>
      </div>
        <hr>
      <div class="login__container--buttons">
        <router-link to="/products" class="button-trivia">
            Dinero
        </router-link>
        <router-link to="/products" class="button-trivia">
            Compras Online
        </router-link>
        <router-link to="/products" class="button-trivia">
            Salud
        </router-link>
        <router-link to="/products" class="button-trivia">
            Protección
        </router-link>
      </div>
      <hr>
      <router-link to="/products" class="button-primary">
        <span>
          Consultar
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>

</script>
