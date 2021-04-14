<template>
  <div class="login">
      <div class="login__container container">
      <div v-if="$route.params.id == 1">
        <h2 style="font-weight: bold;">Tarjetas</h2>
        <b-field label="DNI">
              <b-input></b-input>
        </b-field>
        <b-field label="Fecha Nacimiento">
              <b-input></b-input>
        </b-field>
        <b-field label="Correo">
              <b-input></b-input>
        </b-field>
        <b-field label="Operador">
              <b-input></b-input>
        </b-field>
        <b-field label="Celular">
              <b-input></b-input>
        </b-field>
      </div>
      <div v-if="$route.params.id == 2">
        <h2 style="font-weight: bold;">Prestamos</h2>
        <b-field label="DNI">
              <b-input></b-input>
        </b-field>
        <b-field label="Fecha Nacimiento">
              <b-input></b-input>
        </b-field>
        <b-field label="Correo">
              <b-input></b-input>
        </b-field>
        <b-field label="Operador">
              <b-input></b-input>
        </b-field>
        <b-field label="Celular">
              <b-input></b-input>
        </b-field>
      </div>
      <div v-if="$route.params.id == 3">
        <h2 style="font-weight: bold;">Seguros</h2>
        <b-field label="DNI">
              <b-input></b-input>
        </b-field>
        <b-field label="Fecha Nacimiento">
              <b-input></b-input>
        </b-field>
        <b-field label="Correo">
              <b-input></b-input>
        </b-field>
        <b-field label="Operador">
              <b-input></b-input>
        </b-field>
        <b-field label="Celular">
              <b-input></b-input>
        </b-field>
      </div>
      <button style="margin-top: 1rem; border: none; cursor: pointer" class="button-primary">
        <span>
          Enviar
        </span>
      </button>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">

</style>