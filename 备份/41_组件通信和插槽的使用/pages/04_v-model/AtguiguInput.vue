<template>
  <!-- 自定义input组件 -->
  <input
    type="text"
    :value="username"
    @input="emit('update:username', (<HTMLInputElement>$event.target).value)"
  />
  <input
    type="text"
    :value="password"
    @input="emit('update:password', (<HTMLInputElement>$event.target).value)"
  />
</template>

<script setup lang="ts" name="AtguiguInput">
defineProps(["username", "password"]);
const emit = defineEmits(["update:username", "update:password"]);
</script>

<style scoped>
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
}
</style>
