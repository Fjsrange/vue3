<script setup lang="ts" name="App">
import { ref, readonly } from "vue";

let sum = ref(0);
let sum2 = readonly(sum);
let car = ref({
  brand: "奔驰",
  options: {
    color: "red",
    price: 100000,
  },
});
let car2 = readonly(car.value);

function changeSum() {
  sum.value += 1;
}
function changeSum2() {
  sum2.value += 1;
}

function changeBrand() {
  car.value.brand = "宝马";
}
function changeColor() {
  car.value.options.color = "绿色";
}
function changePrice() {
  car.value.options.price = 10000;
}

function changeBrand2() {
  car2.brand = "宝马";
}
function changeColor2() {
  car2.options.color = "绿色";
}
function changePrice2() {
  car2.options.price = 10000;
}
</script>

<template>
  <div class="app">
    <h2>当前求和为：{{ sum }}</h2>
    <h2>当前求和为：{{ sum2 }}</h2>
    <h2>当前骑车为：{{ car }}</h2>
    <h2>当前骑车为：{{ car2 }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <button @click="changeSum2">点我sum2+1</button>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changeColor">修改颜色</button>
    <button @click="changePrice">修改价格</button>
    <button @click="changeBrand2">修改品牌2</button>
    <button @click="changeColor2">修改颜色2</button>
    <button @click="changePrice2">修改价格2</button>
  </div>
</template>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
button {
  margin: 0 5px;
}
</style>
