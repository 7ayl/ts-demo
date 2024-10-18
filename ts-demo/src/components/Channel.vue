<script lang="ts" setup>
// 导入 pinia 模块
import useStore from '../store'
const { channels } = useStore()
// 发请求获取频道数据
channels.getChannels()
// 渲染数据
</script>

<template>
  <ul class="catagtory">
    <li 
    :class="{ select: channels.active === item.id }" 
    v-for="item in channels.list" 
    :key="item.id"
    @click="channels.changeActive(item.id)">{{ item.name }}</li>
  </ul>
</template>

<style scoed lang="less"></style>
