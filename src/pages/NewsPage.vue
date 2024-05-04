<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newList" :key="news.id">
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title
                    }}</RouterLink> -->
                <!-- 第二种写法 -->
                <RouterLink :to="{
                    path: '/news/detail',
                    query: {
                        id: news.id,
                        title: news.title,
                        content: news.content,
                    }

                }">{{ news.title
                    }}</RouterLink>


            </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
        <img src="/src/images/head.jpg" alt="新闻">
    </div>
</template>

<script lang="ts" setup name="News">
import { reactive } from 'vue'
const newList = reactive([
    { id: 'abc123', title: '震惊', content: '明天是周日' },
    { id: 'abc456', title: '难道说', content: '还有高手' },
    { id: 'abc789', title: '好消息', content: '快放假了' },
    { id: 'abc123', title: '没想到', content: '我是天才' },
])
</script>

<style scoped>
.news {
    display: flex;
    justify-content: start;
    align-items: start;
    height: 100%;
}

.news ul {
    /* list-style-type: none; */
    margin-top: 30px;
    padding-left: 50px;
}

.news li::marker {
    color: aqua;
}

.news li>a {
    color: green;
    font-size: 18px;
    text-decoration: none;

}
</style>
