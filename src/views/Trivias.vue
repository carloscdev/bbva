<template>
  <div class="trivia">
    <div class="trivia__container container">
      <div class="trivia__container--text">
        <h2>
          Resuelve la siguiente trivia
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.trivia {
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #073362;
  &__container {
    background-image: url("../assets/images/bg-2.jpg");
    background-size: 90%;
    background-position: center right;
    background-repeat: no-repeat;
    height: 60vh;
    width: 100%;
    
  }
}
</style>