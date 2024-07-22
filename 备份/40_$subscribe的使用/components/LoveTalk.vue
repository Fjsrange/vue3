<script setup lang="ts" name="LoveTalk">
import { reactive } from "vue";
import { useTalkListStore } from "@/store/talk";
import { storeToRefs } from "pinia";

const talkListStore = useTalkListStore();
const { talkList } = storeToRefs(talkListStore);

talkListStore.$subscribe((mutate, state) => {
  localStorage.setItem("talkList", JSON.stringify(state.talkList));
});

function getLoveTalk() {
  talkListStore.getATalk();
}
</script>

<template>
  <div class="love-talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">
        {{ talk.content }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.love-talk {
  background-color: orange;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
