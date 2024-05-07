<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句随机笑话</button>
        <ul>
            <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { useTalkStore } from '@/store/jokeTalk'

const talkStore = useTalkStore()

//方法
function getLoveTalk() {
    talkStore.getATalk()
}
</script>
<style scoped>
.talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    margin: 50px 0;
}
</style>