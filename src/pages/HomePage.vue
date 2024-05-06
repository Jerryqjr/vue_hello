<template>
  <div class="home">
    <img src="/src/images/杰尼.jpg" alt="杰尼龟头像">
  </div>
</template>

<script lang="ts" setup name="Home">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/news')
  }, 3000);
})

</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.home img {
  max-width: 200px;
  max-height: 200px;
}
</style>
