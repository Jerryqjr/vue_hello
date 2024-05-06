<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newList" :key="news.id">
                <button @click="showNewsDetail(news)">查看新闻</button>
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
import { RouterView, RouterLink, useRouter } from 'vue-router'
const newList = reactive([
    { id: 'abc123', title: '震惊', content: '明天是周日' },
    { id: 'abc456', title: '难道说', content: '还有高手' },
    { id: 'abc789', title: '好消息', content: '快放假了' },
    { id: 'abc123', title: '没想到', content: '我是天才' },
])

const router = useRouter()

interface NewsInter {
    id: string,
    title: string,
    content: string
}

function showNewsDetail(news: NewsInter) {
    router.push({
        path: '/news/detail',
        query: {
            id: news.id,
            title: news.title,
            content: news.content
        }
    })
}
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
