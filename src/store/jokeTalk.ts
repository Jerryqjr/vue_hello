import { defineStore } from "pinia"
import axios from "axios"
import { nanoid } from "nanoid"

export const useTalkStore = defineStore("talk", {
  actions: {
    async getATalk() {
      //发请求
      // eslint-disable-next-line prefer-const
      let result = await axios.get("https://api-vue-base.itheima.net/api/joke")
      //把请求回来的字符串,包装成一个对象
      // eslint-disable-next-line prefer-const
      let obj = { id: nanoid(), title: result.data }
      //放在数组中
      this.talkList.unshift(obj)
    },
  },
  //真正存储数据的地方
  state() {
    return {
      talkList: JSON.parse(localStorage.getItem("talkList")) || [],
    }
  },
})
