<template>
  <div class="person">
    姓：<input type="text" v-model="firstName" /> <br />
    名：<input type="text" v-model="lastName" /> <br />
    全名：<span>{{ fullName }}</span> <br />
    <button @click="changeFullName">全名改为：Chris-Paul</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, computed } from "vue"

let firstName = ref("Jerry")
let lastName = ref("Qiu")

// 计算属性——只读取，不修改
/* let fullName = computed(() => {
  console.log(1)
  return
  firstName.value.slice(0, 1).toUpperCase() +
    firstName.slice(1) +
    "-" +
    lastName.value
}) */

// 计算属性——既读取又修改
let fullName = computed({
  // 读取
  get() {
    return firstName.value + "-" + lastName.value
  },
  // 修改
  set(val) {
    console.log("有人修改了fullName", val)
    firstName.value = val.split("-")[0]
    lastName.value = val.split("-")[1]
  },
})

function changeFullName() {
  fullName.value = "Chris-Paul"
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
