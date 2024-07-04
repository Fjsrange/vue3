<template>
  <person />
</template>

<script lang="ts">
import person from "./components/person.vue";
// js或ts
export default {
  name: "App", // 组件名
  components: { person },
};
</script>

<style scoped></style>
