<script setup lang="ts" name="Count">
import { ref } from "vue";
import { useCountStore } from "@/store/count";
import { storeToRefs } from "pinia";

const countStore = useCountStore();
// storeToRefs 只会关注store中的数据，不会对方法进行ref包裹
const { sum, school, address } = storeToRefs(countStore);

let n = ref(1); // 用户选择的数字

function add() {
  countStore.increment(n.value);
}
function minus() {
  countStore.sum -= n.value;
}
</script>

<template>
  <div class="count">
    <h2>当前求和为: {{ sum }}</h2>
    <h3>欢迎来到：{{ school }}</h3>
    <h3>欢迎来到：{{ address }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
