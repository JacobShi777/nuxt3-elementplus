<script lang="ts" setup>
import Carousel from '@/views/homepage/Carousel.vue'
import TopNews from '@/views/homepage/TopNews.vue'
import Cooperation from '@/views/homepage/Cooperation.vue'
import Footer from '@/layouts/components/Footer.vue'

useHead({
  title: '我的网站',
})
</script>

<template>
  <div>
    <Carousel />
    <TopNews />
    <Cooperation />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
</style>
