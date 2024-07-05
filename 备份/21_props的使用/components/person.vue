<template>
  <div class="person">
    <div v-for="item in personList" :key="item.id">
      {{ item.name }}--{{ item.age }}
    </div>
  </div>
</template>

<script lang="ts" setup name="person">
import { withDefaults } from "vue";
import { type Persons } from "@/types";
// 接收a
// defineProps(["a"]);

// 接收a，同时将props保存起来
// let x = defineProps(["a", "personList"]);
// console.log("x", x);

// 只接收personList
// defineProps(["personList"]);

// 只接收personList + 限制类型
// defineProps<{ personList: Persons }>();

// 只接收personList + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{ personList?: Persons }>(), {
  personList: () => [{ id: "999", name: "康师傅", age: 39 }],
});
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
