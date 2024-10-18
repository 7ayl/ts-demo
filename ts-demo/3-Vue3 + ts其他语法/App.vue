<template>
  <div>
    App 组件
  </div>
  <!-- {{ msg }} -->
    <button @click="hClick">点我告诉你位置</button>
    <img ref="automan" src="https://img0.baidu.com/it/
    u=2634127891,55792807&fm=253&app=120&size=w931&n=0
    &f=JPEG&fmt=auto?sec=1723050000&t=def66cb1d979435c41fa02063d769b85" alt="">
    <button ref="hGetSky">点我获取天空</button>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

// 类型推论
// const msg1 = ref('你好世界')
// 通过泛型设置为 string
// const msg2 = ref<string>('你好世界')

// 设置一个引用数字类型的数据
type todo = {
    id: number;
    name: string;
    done: boolean;
}
const list = ref<todo[]>([
  { id:1, name: '小一' , done: false },
  { id:0, name: '汤圆' , done: false },
  { id:7, name: '狐狸' , done: false }
])

let obj:todo = list.value[0] 

// list.value[0].id

// list.value = []
// 开发中更建议使用 ref 来定义变量
// 如果使用 reactive 更新数据时需要注意丢失响应式的问题

// 计算属性 => 在绝大部分场景下都不需要手动指定类型，会类型推导
// const leftCount = computed<number>(() => {
//   return list.value.filter(item => !item.done).length
// })
// console.log(leftCount.value)

// 事件类型
const hClick = (e: MouseEvent) => {
  // console.log(e) // 查看事件对象的类型
  console.log(e.pageX, e.pageY)
}

// DOM 中的 ref
const img = document.createElement('img')
const automan = ref<HTMLImageElement | null>(null)
const hGetSky = () => {
  // 获取图片
  // console.log(automan.value)
  // 新增需求：点击后修改图片地址
  // if(automan.value){
  //   automan.value.src = ''
  // }
  // 新增需求：获得突图片地址
  // if(automan.value){
  //   console.log(automan.value.src)
  // }
  // 优雅
  console.log(automan.value && automan.value.src)
  // 更优雅
  // ?. 可选链操作符
  // ?. 可以让我们不需要确定每个属性是否真的有值，如果中间某一个环节没有值，整个表达式返回 undefined
  // console.log(automan.value?.src) // 保险措施，如果没有返回undefined

  // !. 非空断言 (慎用)，你百分百确定有值的时候才用
  console.log(automan.value!.src) // 撒娇，耍无赖，听我的，如果没有也强行用
}
</script>

<style scoped>

</style>