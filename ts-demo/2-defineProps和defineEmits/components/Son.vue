<template>
    <div>
      我是 子组件
    </div>
    <div>
      这是父亲的关爱：{{ house }}
    </div>
    <button @click="hClick">回礼</button>
  </template>
  
  <script setup lang="ts">
  // 非 TS 语法
//   defineProps({
//     house: {
//       type: String,
//       required: true
//     }
//   })

  import { toRefs } from 'vue'
  // TS 的语法
  type PropsType = {
    // 设置可选项：属性后面加 ？
    house?: string
  }
  // 设置默认值：解构时设置
//   const { house = '草屋' } = toRefs(defineProps<PropsType>())
  const props = defineProps<PropsType>()
  const { house = '草屋' } = toRefs(props)

// ---------------------------------------------------

  // 非 TS 语法
  // const emit = defineEmits(['getGift'])

  // TS语法：既要对事件名做约束也要对参数做约束
  const emit = defineEmits<{
    // 泛型对象中有几个事件就写几个约束
    // ():中有 n 个参数，固定的是 e，其他就根据具体参数来决定
    // e 表示事件名 e: 事件名
    // 后面语法为 参数名：类型
    // 完整语法：(e: 事件名, 参数名：类型，参数名2: 类型):void
    (e: 'getGift', gift: string, msg:string): void
  }>()

  const hClick = () => {
    // 子传父给父组件传递参数
    emit('getGift', 'hhh', '?')
  }

  </script>
  
  <style scoped>
  
  </style>