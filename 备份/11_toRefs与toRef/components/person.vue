<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }} {{ nl }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { reactive, toRef, toRefs } from "vue";
let person = reactive({
  name: "张三",
  age: 18,
  sex: "男",
});
let { name, age } = toRefs(person);
let nl = toRef(person, "age");
console.log("nl.value", nl.value);

console.log("person", person);

function changeName() {
  name.value += "~";
}
function changeAge() {
  age.value += 1;
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
