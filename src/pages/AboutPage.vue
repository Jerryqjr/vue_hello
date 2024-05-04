<template>
    <div class="home">
        <ul>
            <li>Chris Paul</li>
            <li>Jerry</li>
            <li>Tom</li>
            <li>卡尔</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="About">
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
    console.log('AboutPage组件挂载了')
})
onUnmounted(() => {
    console.log('AboutPage组件卸载了')
})
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.img {
    height: 100px;
    width: 100px;
}
</style>
