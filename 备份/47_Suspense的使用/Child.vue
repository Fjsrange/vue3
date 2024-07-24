<script setup lang="ts" name="Child">
import { ref } from "vue";
import axios from "axios";

let sum = ref(0);
let {
  data: { content },
} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
console.log("data", content);
</script>

<template>
  <!-- teleport 可以将组件html结构移动到指定位置的技术 -->
  <div class="child">
    <h2>我是Child组件</h2>
    <p>当前求和为：{{ sum }}</p>
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
