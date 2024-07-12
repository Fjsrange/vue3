<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log("route", route);
let { query } = toRefs(route);
</script>

<template>
  <ul class="news-list">
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
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
