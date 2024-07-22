<script setup lang="ts" name="LoveTalk">
import { reactive } from "vue";
import axios from "axios";
import { nanoid } from "nanoid";

let talkList = reactive([
  { id: 1, content: "我爱你，就像老鼠爱大米" },
  { id: 2, content: "你是我生命中最美的风景，让我无法抗拒地爱上了你。" },
  { id: 3, content: "你是我心中的唯一，我愿意用我的一生来守护你。" },
]);

function getLoveTalk() {
  // 发请求
  let res = axios.get("https://api.uomg.com/api/rand/qinghau?format=json");
  // 连续解构赋值 + 重命名
  // let { data: { content: content }} = axios.get("https://api.uomg.com/api/rand/qinghau?format=json");
  console.log("res", res);
  if (res.code == 200) {
    // 把犬区到的数据包装成一个obj对象
    let obj = { id: nanoid(), content: res.data.content };
    // let obj = { id: nanoid(), content };
    console.log("obj", obj);
    talkList.unshift(obj);
  }

  // talkList.push({id:talkList.length+1,content:res.data.content})
}
</script>

<template>
  <div class="love-talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.content }}</li>
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
