<template>
  <div class="person">
    <h2>情况二：监视【ref】定义的【对象类型】的数据</h2>
    <h3>姓名：{{ person.name }}</h3>
    <h3>年龄：{{ person.age }}</h3>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { ref, watch } from "vue";

// 数据
let person = ref({
  name: "张三",
  age: 18,
});
// 方法
function changeName() {
  person.value.name += "!";
}
function changeAge() {
  person.value.age += 1;
}
function changePerson() {
  person.value = { name: "李四", age: 20 };
}
// 监视 情况二：监视【ref】定义的【对象类型】的数据，坚实的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
// watch的第一个参数是：被监视的数据
// watch的第二个参数是：监视的回调
// watch的第三个参数是：配置对象（deep、immediate等等。。。）
watch(
  person,
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
