<template>
  <div class="person">
    <h2>情况三：监视【reactive】定义的【对象类型】的数据</h2>
    <h3>姓名：{{ person.name }}</h3>
    <h3>年龄：{{ person.age }}</h3>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <h3>测试：{{ obj.a.b.c }}</h3>
    <button @click="test">修改测试</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { reactive, watch } from "vue";

// 数据
let person = reactive({
  name: "张三",
  age: 18,
});
let obj = reactive({
  a: {
    b: {
      c: 333,
    },
  },
});

// 方法
function changeName() {
  person.name += "!";
}
function changeAge() {
  person.age += 1;
}
function changePerson() {
  // person = { name: "李四", age: 20 };
  Object.assign(person, { name: "李四", age: 20 });
}
function test() {
  obj.a.b.c = 888;
}
// 监视 情况三：监视【reactive】定义的【对象类型】的数据，且默认是开启深度监视的
watch(person, (newVal, oldVal) => {
  console.log("person", newVal, oldVal);
});
watch(obj, (newVal, oldVal) => {
  console.log("test", newVal, oldVal);
});
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
