<script setup lang="ts" name="News">
import { reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Detail from "./Detail.vue";

const newsList = reactive([
  { id: 1, title: "好消息", content: "新闻001的内容" },
  { id: 2, title: "震惊！", content: "新闻002的内容" },
  { id: 3, title: "煤油车", content: "新闻003的内容" },
  { id: 4, title: "版本之子", content: "新闻004的内容" },
]);
</script>

<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 第一种写法 -->
        <!-- <RouterLink
          :to="`/news/detail/${news.id}/${news.title}/${news.content}`"
          >{{ news.title }}</RouterLink
        > -->
        <!-- 第二种写法 -->
        <RouterLink
          :to="{
            name: 'newsDetail',
            params: {
              id: news.id,
              title: news.title,
              // content: news.content,
            },
          }"
          >{{ news.title }}</RouterLink
        >
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li::marker {
  color: #64997e;
}
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64997e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
