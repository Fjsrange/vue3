<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车的价值{{ car.price }}</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <hr />
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { ref, reactive } from "vue";
// 数据
let car = ref({ brand: "奔驰", price: 100 });
let sum = ref(0);

function changeBrand() {
  car.value.brand = "宝马";
}
function changePrice() {
  car.value.price += 10;
}
function changeCar() {
  // car = { brand: "宝马", price: 200 }; // 无法实现修改对象的功能
  // car = reactive({ brand: "宝马", price: 200 }); // 无法实现修改对象的功能

  // assign的功能是将后面所有的属性(key: value)都加到第一个里面
  // Object.assign(car, obj1, obj2, obj3);
  // Object.assign(car, { brand: "宝马", price: 200 });

  car.value = { brand: "宝马", price: 200 };
}
function changeSum() {
  sum.value += 1;
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 10px;
}
</style>
