<template>
  <div class="person">
    <h1>
      情况四：监视【ref】或【reactive】定义的【对象类型】的数据中的某个属性
    </h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>车：{{ person.car.c1 }}、{{ person.car.c2 }}、{{ person.car.c3 }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeC3">修改第三台车</button>
    <button @click="changeCar">修改所有车辆</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { reactive, watch } from "vue";
// 数据
let person = reactive({
  name: "张三",
  age: 18,
  car: {
    c1: "奔驰",
    c2: "宝马",
    c3: "奥迪",
  },
});
// 方法
function changeName() {
  person.name += "~";
}
function changeAge() {
  person.age += 1;
}
function changeC1() {
  person.car.c1 = "奥迪";
}
function changeC2() {
  person.car.c2 = "五菱宏光";
}
function changeC3() {
  person.car.c3 = "七手奥托";
}
function changeCar() {
  person.car = { c1: "沃尔沃", c2: "迪卡侬", c3: "美利达" };
}
// 监听，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
/* watch(
  () => person.name,
  (newVal, oldVal) => {
    console.log("person", newVal, oldVal);
  }
); */
// 监听，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，可以直接写，也能写函数，更推荐写函数
watch(
  () => person.car,
  (newVal, oldVal) => {
    console.log("person", newVal, oldVal);
  },
  { deep: true }
);
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
