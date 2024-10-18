import { createApp } from "vue"
import App from "./App.vue"
// import $ from 'jquery'

// $.ajx

import _ from 'lodash'
console.log( _.shuffle([1, 2, 3, 4]))// 洗牌


// 第三方库可能没有提供类型声明文件，那我们无法正常在 ts 中使用，就需要自行下载第三方提供的类型声明文件
// @types/xxx 这里来找
 
// 由于第三方包最终都会打包成 js 文件，就会丧失 ts 的类型特性
// 所以这些第三方库都会提供一个 .d.ts 结尾的类型声明文件，来告诉开发者这个库所拥有的所有类型

// const arr: string[] = ['a', 'b', 'c']
// arr.push(123)

createApp(App).mount('#app')
