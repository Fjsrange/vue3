<script setup lang="ts" name="Count">
import { ref } from "vue";
import { useCountStore } from "@/store/count";

const countStore = useCountStore();

// 以下两种方式都可以拿到state中的数据
// console.log("11", countStore.sum);
// console.log("11", countStore.$state.sum);

// let sum = ref(1); // 当前求和
let n = ref(1); // 用户选择的数字

function add() {
  // sum.value += n.value;
  // 第一种修改方式
  // countStore.sum += n.value;
  // countStore.school = "尚硅谷";
  // countStore.address = "北京";

  // 第二种修改方式
  // countStore.$patch({
  //   sum: countStore.sum + n.value,
  //   school: "尚硅谷",
  //   address: "北京",
  // });
  // 第三种修改方式
  countStore.increment(n.value);
}
function minus() {
  // sum.value -= n.value;
  countStore.sum -= n.value;
}
</script>

<template>
  <div class="count">
    <h2>当前求和为: {{ countStore.sum }}</h2>
    <h3>欢迎来到：{{ countStore.school }}</h3>
    <h3>欢迎来到：{{ countStore.address }}</h3>
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
