<script setup lang="ts" name="App">
import { ref, reactive, shallowRef, shallowReactive } from "vue";

let sum = shallowRef(0);
let person = shallowRef({
  name: "张三",
  age: 18,
});
let car = shallowReactive({
  brand: "奔驰",
  options: {
    color: "红色",
    engine: "v8",
  },
});

function changeSum() {
  sum.value += 1;
}
function changeName() {
  person.value.name = "李四";
}
function changeAge() {
  person.value.age += 1;
}
function changePerson() {
  person.value = {
    name: "王五",
    age: 28,
  };
}
function changeBrand() {
  car.brand = "宝马";
}
function changeColor() {
  car.options.color = "蓝色";
}
function changeEngine() {
  car.options.engine = "v12";
}
</script>

<template>
  <div class="app">
    <h2>求和为： {{ sum }}</h2>
    <h2>名字为： {{ person.name }}</h2>
    <h2>年龄为： {{ person.age }}</h2>
    <h2>汽车信息：{{ car }}</h2>
    <button @click="changeSum">sum+1</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改个人</button>
    <span>|</span>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changeColor">修改颜色</button>
    <button @click="changeEngine">修改发动机</button>
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
