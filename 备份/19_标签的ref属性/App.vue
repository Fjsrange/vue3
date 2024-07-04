<template>
  <h2 ref="title2">你好</h2>
  <button @click="showLogo">点我输入h2的元素</button>
  <Person ref="ren" />
</template>

<script lang="ts" setup name="App">
import Person from "./components/person.vue";
import { ref } from "vue";

// 创建一个title2，用于存储ref标记的内容
let title2 = ref();
let ren = ref();
function showLogo() {
  // console.log(title2.value);
  console.log(ren.value.showLogo());
}
</script>

<style scoped></style>
