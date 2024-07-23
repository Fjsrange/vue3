<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="热门游戏列表">
        <ul>
          <li v-for="game in games" :key="game.id">
            {{ game.name }}
          </li>
        </ul>
      </Category>
      <Category title="今日城市美食">
        <img :src="imgUrl" />
      </Category>
      <Category title="今日影视推荐">
        <video :src="videoUrl" controls></video>
      </Category>
    </div>
    <div class="content">
      <Game>
        <template v-slot="params">
          <ul>
            <li v-for="y in params.youxi" :key="y.id">
              {{ y.name }}
            </li>
          </ul>
        </template>
      </Game>

      <Game>
        <template v-slot="params">
          <ol>
            <li v-for="item in params.youxi" :key="item.id">
              {{ item.name }}
            </li>
          </ol>
        </template>
      </Game>

      <Game>
        <template #default="{ youxi }">
          <h3 v-for="g in youxi" :key="g.id">{{ g.name }}</h3>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Game from "./Game.vue";
import Category from "./Category.vue";
import { ref, reactive } from "vue";

const games = reactive([
  { id: 1, name: "英雄联盟" },
  { id: 2, name: "绝地求生" },
  { id: 3, name: "守望先锋" },
  { id: 4, name: "红色警戒" },
]);

let imgUrl = ref("https://z1.ax1x.com/2023/11/19/piNxLo4.jpg");
let videoUrl = ref("https://media.w3.org/2010/05/sintel/trailer.mp4");
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
.content {
  display: flex;
  justify-content: space-evenly;
}
img,
video {
  width: 100%;
}
</style>
