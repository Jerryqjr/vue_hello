import { defineStore } from "pinia"

export const useCountStore = defineStore("count", {
  //actions里面放置的是一个一个的方法,用于响应组件中的"动作"
  actions: {
    increment(value) {
      console.log("increment被调用了", value)
      this.sum += value
    },
  },

  //真正存储数据的地方
  state() {
    return {
      sum: 6,
      name: "Jerry",
      address: "杭州",
    }
  },
  //对数据的进一步计算
  getters: {
    bigSum: (state) => state.sum * 10,
    upperName(): string {
      return this.name.toUpperCase()
    },
  },
})
