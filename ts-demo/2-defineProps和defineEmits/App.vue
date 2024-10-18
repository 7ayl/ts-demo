<template>
  <div>
    我是 App 组件
  </div>
  <Son :house="house" @getGift="receiveGift"/>
  <!-- <Son /> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Son from "./components/Son.vue"

const house = ref('大别墅')

const receiveGift = (gift: string, msg: string) => {
  console.log('收到了'+ gift + msg)
  
}

</script>

<style scoped>

</style>