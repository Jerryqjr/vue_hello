<template>
  <div class="app">
    <Count></Count>
    <LoveTalk></LoveTalk>
  </div>
</template>

<script setup lang="ts" name="App">
import Count from './components/Count.vue';
import LoveTalk from './components/JokeTalk.vue';
</script>


<style scoped>
.navigate {
  display: flex;

  justify-content: space-around;
  margin: 0 100px;
}

.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  background-color: skyblue;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}

.navigate a.active {
  background-color: aquamarine;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}

.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid skyblue;
}
</style>