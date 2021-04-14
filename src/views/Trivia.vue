<template>
  <div class="login">
    <div class="login__container container">
      <h2>¡Conoce los productos que tenemos para ti!</h2>
      <div class="login__container--buttons">
        <button class="button-trivia">
            Auto
        </button>
        <button class="button-trivia">
            Vacaciones
        </button>
        <button class="button-trivia">
            Casa
        </button>
        <button class="button-trivia">
            Viajes
        </button>
      </div>
        <hr>
      <div class="login__container--buttons">
        <button class="button-trivia">
            Dinero
        </button>
        <button class="button-trivia">
            Compras Online
        </button>
        <button class="button-trivia">
            Salud
        </button>
        <button class="button-trivia">
            Protección
        </button>
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
