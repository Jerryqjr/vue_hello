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
      talkList: [
        {
          id: "qwerabc001",
          title:
            "去开家长会，过道的表扬榜上贴着几份优秀作业。有个学生这样造句——妈妈一拿起鸡毛掸子，爸爸就抱头鼠窜。\n我当时就笑了，翻到作业本的封面想看看是哪个小朋友，结果看到我儿子的名字。。。",
        },
        {
          id: "qwerabc002",
          title:
            "昨天带儿子去公园玩，为了锻炼他，路上我就没让他坐他的儿童车，而是让他推着往公园走。\n没想到才几分钟他就坚持不住了：“爸爸，我推不动了，能让我上车吗？”\n我扭头说道：“再坚持一下，马上就到了。",
        },
        {
          id: "qwerabc003",
          title:
            "家里来了个亲戚，十七八岁的大男孩，文静的坐在那，听说已经上高中了。\n我上前问道：“高几？”\n他脸一红说：“不，不，不搞。",
        },
      ],
    }
  },
})
