// 定义 pinia 模块: defineStore
import { defineStore } from 'pinia'
import axios from 'axios'
import { ChannelsList, ChannelsRes } from '../../types'

// type ChannelsList = {
//     id: number
//     name: string
//   }[]

// type ChannelsRes = {
//     data: {
//       channels: ChannelsList
//     },
//     message: string
//   }

//  defineStore 得到的结果是一个函数，命名规范一般是 useXXStore
export default defineStore('channels', {
  // state():{ channels: {id: number, name: string}[] } { 标准写法
  state() {
    return {
      // 类型断言： as 我说你是啥就是啥 
      list: [] as ChannelsList,
      active: -1
    }
  },
  actions: {
    async getChannels() {
      const res = await axios.get<ChannelsRes>('http://geek.itheima.net/v1_0/channels')
    //   console.log(res.data.data.channels)
      this.list = res.data.data.channels

      // 默认让第一个高亮，将 active 的值设置为 第一个元素的 id
      this.active = res.data?.data?.channels?.[0]?.id
    },
    changeActive (active: number) {
      this.active = active
    }
  },
  getters: {}
})