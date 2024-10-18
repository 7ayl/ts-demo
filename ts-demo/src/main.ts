import { createApp } from "vue"
import App from './App.vue'
import './styles/index.css'

// 1. 引入 createPinia
import { createPinia } from 'pinia'

// 2. 调用方法创建 pinia 对象
const pinia = createPinia

// 3. 安装
createApp(App).use(pinia).mount('#app')

// 学习 Axios
// import axios from "axios"

// type ChannelsRes = {
//   data: {
//     channels: {
//       id: number
//       name:string
//     }[]
//   }
//   message: string
// }

// async function getChannels() {
//   // 让结果有提示
//   const res = await axios.get<ChannelsRes>('http://geek.itheima.net/v1_0/channels')
//   console.log(res.data.data.channels[0].name)
  
// }
// getChannels()
