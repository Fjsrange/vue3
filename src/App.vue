<script setup lang="ts" name="App">
import { Suspense } from "vue";
import Child from "@/Child.vue";
</script>

<template>
  <div class="app">
    <h2>我是app组件{{ x }}</h2>
    <Hello />
    <Child />
  </div>
</template>

<style>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
