<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="show = true">查看联系方式</button>
    <h2 v-if="show">联系方式：{{ tel }}</h2>
  </div>
</template>

<script lang="ts" setup name="person111">
// 数据
// 数据，原来是写在data中的，此时的name、age、tel、show，都不是响应式的数据
let name = "张三";
let age = 18;
let tel = "18666666666";
let show = false;
let address = "北京昌平区宏福科技园";

// 方法
function changeName() {
  name = "里斯";
}
function changeAge() {
  age += 1;
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
