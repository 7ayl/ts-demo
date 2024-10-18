<script lang="ts" setup>
import { watch } from 'vue';
import useStore from '../store'
const { newslist, channels } = useStore()

watch(() => channels.active, () => {
  // console.log('频道 id 变了:', channels.active)
  newslist.getNewsList(channels.active)
})
</script>

<template>
  <div className="list">
    <div className="article_item" v-for="item in newslist.list" :key="item.art_id">
      <h3 className="van-ellipsis">{{ item.title }}</h3>
      <div className="img_box">
        <img
          :src="item.cover?.images?.[0] || 'http://geek.itheima.net/resources/images/11.jpg'"
          className="w100"
          alt=""
        />
      </div>
      <div className="info_box">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }} 评论</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>

<style scoed lang="less"></style>
