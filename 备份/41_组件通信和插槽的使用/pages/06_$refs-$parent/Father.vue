<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>房产：{{ house }}</h4>
    <button @click="changeToy">修改c1的玩具</button>
    <button @click="changeTComputer">修改c2的电脑</button>
    <button @click="getAllChild($refs)">让所有孩子的书增加</button>
    <Child1 ref="c1" />
    <Child2 ref="c2" />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
import { ref, reactive } from "vue";

let house = ref(4);
let c1 = ref();
let c2 = ref();

function changeToy() {
  c1.value.toy = "飞机";
}

function changeTComputer() {
  c2.value.computer = "MacBook Pro";
}

function getAllChild(refs: { [key: string]: any }) {
  console.log(refs);
  for (const key in refs) {
    refs[key].book += 3;
  }
}

// 把数据交给外部
defineExpose({
  house,
});
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.father button {
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>
