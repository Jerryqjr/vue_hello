<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
  setup(props, ctx) {
    //console.log("@@", this) //setup函数中的this是undefined,vue3中已经弱化this了
    //数据,原来是写在data()中的,此时的name,age,tel不是响应式的数据
    let name = "Jerry"
    let age = 18
    let tel = "1388888888"

    //方法
    function changeName() {
      name = "Tom"
    }

    function changeAge() {
      age += 1
    }

    function showTel() {
      alert(tel)
    }

    //将方法、数据交出去,模版中才能使用
    return { name, age, changeName, changeAge, showTel }

    //return值也可以是一个函数
    //return () => "哈哈"
  },
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
