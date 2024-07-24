<script setup lang="ts" name="Child">
import { ref } from "vue";

let sum = ref(0);
</script>

<template>
  <!-- teleport 可以将组件html结构移动到指定位置的技术 -->
  <div class="child">
    <h2>我是Child组件{{ x }}</h2>
    <p>当前求和为：{{ sum }}</p>
    <h4 v-beauty="sum">好开心</h4>
    <Hello />
  </div>
</template>

<style scoped>
.child {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
