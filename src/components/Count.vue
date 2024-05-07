<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="count">
        <h2>当前求和为{{ sum }},放大十倍后:{{ bigSum }}</h2>
        <h3>我是{{ name }},在{{ address }}读书,大写:{{ upperName }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>
<script setup lang="ts" name="Count">
import { ref } from 'vue';
//引入useCountStore
import { useCountStore } from '@/store/count'
import { storeToRefs } from 'pinia';
//使用useCountStore,得到一专门保存count相关的store
const countStore = useCountStore()
const { sum, name, address, bigSum, upperName } = storeToRefs(countStore)

//以下两种数据都可以拿到数据
// console.log(countStore.sum)
// console.log(countStore.$state.sum)

//数据
let n = ref(1)      //用户选择的数字

//方法
function add() {
    //第一种修改方式
    /*   countStore.sum += 1
      countStore.name = 'Tom'
      countStore.address = '宁波' */


    //第二种修改方式
    /* countStore.$patch({
        sum: 888,
        name: 'Tom',
        address: '宁波'
    })
  */
    //第三种修改方式
    countStore.increment(n.value)
}

function minus() {
    countStore.sum -= n.value
}

</script>
<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>