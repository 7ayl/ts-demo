<template>
  <div>
    App 组件
  </div>
  <Son v-for="item in list" :key="item.id" :todo="item"></Son>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Son from './components/Son.vue'

// 定义 Todo 类型
// type TodoItem = {
//   id: number
//   name: string
//   done: boolean
// }

import { TodoItem } from './types/todo'

const list = ref<TodoItem[]>([
  { id:1, name: '小一' , done: false },
  { id:0, name: '汤圆' , done: false },
  { id:7, name: '狐狸' , done: true }
])
</script>

<style scoped>

</style>