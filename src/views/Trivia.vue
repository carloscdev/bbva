<template>
  <div class="login">
    <div class="login__container container">
      <h2>¿Cuáles son tus intereses personales?. <br>Selecciona 1 a 4 opciones</h2>
      <div class="grid-trivia">
        <router-link to="/products" class="button-trivia">
            Seguro Vehicular
        </router-link>
        <router-link to="/products" class="button-trivia">
            Autos Seguros Vida
        </router-link>
        <router-link to="/products" class="button-trivia">
            Seguro Familiar de salud
        </router-link>
      </div>
        <hr>
      <div class="grid-trivia">
        <router-link to="/products" class="button-trivia">
            Crédito Hipotecário
        </router-link>
        <router-link to="/products" class="button-trivia">
            Crédito Vehicular
        </router-link>
        <router-link to="/products" class="button-trivia">
            Fondos Mútuos
        </router-link>
      </div>
        <hr>
      <div class="grid-trivia">
        <router-link to="/products" class="button-trivia">
            Servicios digitales
        </router-link>
        <router-link to="/products" class="button-trivia">
            Seguro Renta Hospitalaria
        </router-link>
        <router-link to="/products" class="button-trivia">
            Préstamo Vehicular
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

<style lang="scss">
.grid-trivia {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
}
</style>
