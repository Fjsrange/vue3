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
  data() {
    return {
      show: false,
      name: "张三",
      age: 20,
      tel: "18666666666",
    };
  },
  methods: {
    changeName() {
      this.name = "里斯";
    },
    changeAge() {
      this.age += 1;
    },
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
