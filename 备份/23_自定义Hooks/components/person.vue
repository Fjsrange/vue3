<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}, 放大10倍后：{{ bigSum }}</h2>
    <button @click="add">点击sum+1</button>
    <hr />
    <button @click="getDog">再来一只狗</button>
    <br />
    <img :src="dog" alt="" v-for="(dog, index) in dogList" :key="index" />
  </div>
</template>

<script lang="ts" setup name="person">
import useDog from "@/hooks/useDog";
import useSum from "@/hooks/useSum";

const { sum, add, bigSum } = useSum();
const { dogList, getDog } = useDog();
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

img {
  height: 100px;
  margin: 0 10px;
}
</style>
