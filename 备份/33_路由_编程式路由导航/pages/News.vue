<script setup lang="ts" name="News">
import { reactive } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";

const newsList = reactive([
  { id: 1, title: "好消息", content: "新闻001的内容" },
  { id: 2, title: "震惊！", content: "新闻002的内容" },
  { id: 3, title: "煤油车", content: "新闻003的内容" },
  { id: 4, title: "版本之子", content: "新闻004的内容" },
]);

const router = useRouter();

// 写一个接口限制传递的类型
interface NewInter {
  id: string;
  title: string;
  content: string;
}

function showNewsDetail(news: NewInter) {
  const { id, title, content } = news;
  router.push({
    name: "newsDetail",
    query: {
      id,
      title,
      content,
    },
  });
}
</script>

<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <!-- 第二种写法 -->
        <RouterLink
          :to="{
            name: 'newsDetail',
            query: {
              id: news.id,
              title: news.title,
              content: news.content,
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
