<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="show = true">查看联系方式</button>
    <h2 v-if="show">联系方式：{{ tel }}</h2>
  </div>
</template>

<script lang="ts">
export default {
  name: "person",
  setup() {
    // 数据
    // 数据，原来是写在data中的，此时的name、age、tel、show，都不是响应式的数据
    let name = "张三";
    let age = 18;
    let tel = "18666666666";
    let show = false;

    // 方法
    function changeName() {
      name = "里斯";
    }
    function changeAge() {
      age += 1;
    }

    return {
      name,
      age,
      tel,
      show,
      changeName,
      changeAge,
    };
  },
};
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
