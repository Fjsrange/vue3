<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车的价值{{ car.price }}</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br />
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="item in games" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="changeGameName">修改第一个游戏的名字</button>
    <hr />
    <div>测试：{{ obj.a.b.c }}</div>
    <button @click="changeObj">修改测试</button>
  </div>
</template>

<script lang="ts" setup name="person">
import { reactive } from "vue";
// 数据
let car = reactive({ brand: "奔驰", price: 100 });
let games = reactive([
  { id: "001", name: "英雄联盟" },
  { id: "002", name: "穿越火线" },
  { id: "003", name: "地下城与勇士" },
  { id: "004", name: "魔兽世界" },
]);
let obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
});

function changePrice() {
  car.price += 10;
}

function changeGameName() {
  games[0].name = "Apex";
}

function changeObj() {
  obj.a.b.c = 123456;
}
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
