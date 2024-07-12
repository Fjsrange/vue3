<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log("route", route);
let { params } = toRefs(route);
</script>

<template>
  <ul class="news-list">
    <li>编号：{{ params.id }}</li>
    <li>标题：{{ params.title }}</li>
    <li>内容：{{ params.content }}</li>
  </ul>
</template>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}
.news-list li {
  line-height: 30px;
}
</style>
