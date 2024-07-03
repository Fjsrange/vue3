<template>
  <div class="app">
    <h1>你好啊</h1>
    <person />
  </div>
</template>

<script lang="ts">
import person from "./components/person.vue";
// js或ts
export default {
  name: "App", // 组件名
  components: { person },
};
</script>

<style scoped>
/* 样式 */
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
