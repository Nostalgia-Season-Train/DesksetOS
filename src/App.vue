<script lang="ts" setup>
import SFC任务栏 from './components/任务栏.vue'
</script>


<template>
  <main>
    <SFC任务栏/>
  </main>
</template>


<style scoped>
main {
  width: 100%;
  height: 100%;

  background-image: url('./assets/wallpaper.png');  /* 暂不追踪壁纸文件 */
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>
