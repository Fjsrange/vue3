<template>
  <Person a="哈哈" :personList="personList" />
</template>

<script lang="ts" setup name="App">
import Person from "./components/person.vue";
import { reactive } from "vue";
import { type Persons } from "./types";

let personList = reactive<Persons>([
  { id: "001", name: "张三", age: 18 },
  { id: "002", name: "李四", age: 20 },
  { id: "003", name: "王五", age: 22 },
]);
</script>

<style scoped></style>
