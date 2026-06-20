<template>
  <div class="container">
  </div>
</template>


<style scoped>
.container {
  --height: 50px;

  position: absolute;
  bottom: calc(-1 * var(--height) + 1px);

  width: 100%;
  height: var(--height);

  background: #FFFA;

  transition: .5s;

  &:hover {
    position: absolute;
    bottom: 0px;
  }
}
</style>
