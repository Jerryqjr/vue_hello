<template>
  <div class="person">
    <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
    <button @click="changeCarPrice">修改汽车价格</button>
    <button @click="changeCarBrand">修改汽车品牌</button>
    <button @click="changeCar">修改汽车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from "vue"

// 数据
//1.let car = reative({ brand: "奔驰", price: 100 })
let car = ref({ brand: "奔驰", price: 100 })
let sum = ref(0)

//方法
function changeCarPrice() {
  car.value.price += 10
}

function changeCarBrand() {
  car.value.brand = "宝马"
}

function changeCar() {
  // car = { brand: "特斯拉", price: 20 } //这样写页面不更新
  // car = reactive({ brand: "特斯拉", price: 20 }) //这样写页面也不更新

  //下面这个写法页面可以更新
  //Object.assign(car,{ brand: "特斯拉", price: 20 })

  //使用ref定义car可以直接改value
  car.value = { brand: "特斯拉", price: 20 }
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
