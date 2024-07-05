<template>
  <div class="person">???</div>
</template>

<script lang="ts" setup name="person">
import { type PersonInter, type Persons } from "@/types";
// let person: PersonInter = { id: "001", name: "张三", age: 18 };

// 定义一个数组，数组中的元素是PersonInter类型
let personList: Persons = [
  { id: "001", name: "张三", age: 18 },
  { id: "002", name: "李四", age: 19 },
  { id: "003", name: "王五", age: 20 },
];
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
