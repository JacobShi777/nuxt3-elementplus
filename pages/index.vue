<script lang="ts" setup>
import Carousel from '@/views/homepage/Carousel.vue'
import TopNews from '@/views/homepage/TopNews.vue'
import Cooperation from '@/views/homepage/Cooperation.vue'
import Footer from '@/layouts/components/Footer.vue'
import { formatDate } from '@/utils'

useHead({
  title: '我的网站',
})

const imageDesc = ref({
  title: '展示模块',
  description: '公司创立于2021年，是一家专业的网站开发公司，我们的宗旨是为客户提供最好的服务，我们的目标是成为世界一流的网站开发公司。',
  image: 'mimose-7910067_1280.webp',
})

const thumbnailCard = ref({
  title: '公司新闻',
  time: 1627776000000,
  picture: 'sunset-679115_1280.jpeg',
})
</script>

<template>
  <div>
    <Carousel />
    <ImageDesc
      :feed="imageDesc"
      image-position="left"
    />
    <ThumbnailCard
      style=" width: 1000px; margin: 0 auto;"
      :title="thumbnailCard.title"
      :description="formatDate(thumbnailCard.time)"
      :image="thumbnailCard.picture"
    />
    <TopNews />
    <Cooperation />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
</style>
