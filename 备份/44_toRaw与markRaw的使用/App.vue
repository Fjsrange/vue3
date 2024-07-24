<script setup lang="ts" name="App">
import { reactive, toRaw, markRaw } from "vue";
/* toRaw */
// toRaw()  原始的数据，未经加工的数据
let person = reactive({
  name: "张三",
  age: 18,
  sex: "男",
});
let rawPerson = toRaw(person);
// console.log("person", person);
// console.log("rawPerson", rawPerson);

/* markRaw */
let car = { brand: "奔驰", price: 2000000 };
let rawCar = markRaw(car);
console.log("car", car);
console.log("rawCar", rawCar);
</script>

<template>
  <div class="app">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="person.age++">修改年龄</button>
    <hr />
    <h2>{{ car }}</h2>
    <button @click="car.price++">价格加10</button>
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
