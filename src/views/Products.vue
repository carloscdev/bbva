<template>
  <div class="login">
    <div class="login__container container">
      <h2 style="font-weight: bold;">¡TENEMOS ESTOS PRODUCTOS PARA TI!</h2>
      <div class="">
        <div class="card">
          <div class="card-content">
            <p class="title">
              Tarjetas
            </p>
            <p class="subtitle">
              Tarjetas de Crédito, Tarjetas de Débito.
            </p>
          </div>
        </div>
        <hr>
        <div class="card">
          <div class="card-content">
            <p class="title">
              Prestamos
            </p>
            <p class="subtitle">
              Prestamos Personales, Créditos Hipotecarios, Crédito Vehicular
            </p>
          </div>
        </div>
        <hr>
        <div class="card">
          <div class="card-content">
            <p class="title">
              Seguros
            </p>
            <p class="subtitle">
              Seguro Vehicular, Seguro de Salud, SOAT, Seguro de Vida.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

.card {
  color: black-100;
  border: black 3px solid;
  background-color: $white-100;
  padding: 1rem 2rem;
  text-align: center;
  transition: background $transition;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

}

.card:hover {
    background-color: $blue-300;
    color: white;
  }

.card:focus {
    outline: none;
    box-shadow:  $shadow;
  }

</style>