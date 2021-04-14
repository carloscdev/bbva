<template>
  <div class="login">
    <div class="login__container container">
      <h2 style="font-weight: bold;">¡TENEMOS ESTOS PRODUCTOS PARA TI!</h2>
      <div class="">
        <div class="card">
          <router-link to="/form/1">
            <div class="card-content">
                <p class="title">
                Tarjetas
              </p>
              <p class="subtitle">
                Tarjetas de Crédito, Tarjetas de Débito.
              </p>
            </div>
          </router-link>
        </div>
        <hr>
        <div class="card">
          <router-link to="/form/2">
            <div class="card-content">
              <p class="title">
                Prestamos
              </p>
              <p class="subtitle">
                Prestamos Personales, Créditos Hipotecarios, Crédito Vehicular
              </p>
            </div>
          </router-link>
        </div>
        <hr>
        <div class="card">
          <router-link to="/form/3">
            <div class="card-content">
              <p class="title">
                Seguros
              </p>
              <p class="subtitle">
                Seguro Vehicular, Seguro de Salud, SOAT, Seguro de Vida.
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>