<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址:{{ address }}</h2>
    <button @click="changName">修改名字</button>
    <button @click="changAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<!-- <script lang="ts">
export default {
  name: "Person",
}
</script> -->

<!-- 下面的写法是setup语法糖 -->
<script lang="ts" setup name="Person">
import { ref } from "vue"

// 数据
let name = ref("Jerry")
let age = ref(18)
let tel = "13888888888"
let address = "西湖区留下街道"

// 方法
function changName() {
  name.value = "Tom"
}
function changAge() {
  console.log(age)
  age.value += 1
}
function showTel() {
  alert(tel)
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
