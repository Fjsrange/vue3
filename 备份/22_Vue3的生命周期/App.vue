<template>
  <Person v-if="show" />
</template>

<script lang="ts" setup name="App">
import Person from "./components/person.vue";
import { ref, onMounted } from "vue";

let show = ref(true);
// 挂载完毕
onMounted(() => {
  console.log("父---挂载完毕");
});
</script>

<style scoped></style>
