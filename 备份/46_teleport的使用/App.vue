<script setup lang="ts" name="App">
import { ref } from "vue";
import Modal from "@/Modal.vue";
</script>

<template>
  <div class="app">
    <h2>我是app组件</h2>
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="" />
    <br />
    <Modal />
  </div>
</template>

<style>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 400px;
  height: 400px;
  /* 饱和度滤镜 */
  filter: saturate(0%);
}
img {
  width: 270px;
}
</style>
