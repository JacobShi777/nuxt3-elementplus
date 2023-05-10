<script lang="ts" setup>
import Profile from '@/views/introduction/Profile.vue'
import Qualification from '@/views/introduction/Qualification.vue'
import History from '@/views/introduction/History.vue'
import Footer from '@/layouts/components/Footer.vue'
import { type IGetColumnImagesData } from '@/api/compound/types'
import { getColumnImagesDataApi } from '@/api/compound'

useHead({
  title: '我的网站 - 公司介绍',
})

// #region 栏目头图
// const columnImagesResponseData = ref<IGetColumnImagesData[]>([])
// const columnImagesPending = ref(true)
// const { pending, data } = await getColumnImagesDataApi()
// if (data.value !== null) {
//   columnImagesPending.value = pending.value
//   columnImagesResponseData.value = data.value.data
// }
const columnImagesResponseData = ref<IGetColumnImagesData[]>([
  {
    id: 1,
    title: '公司介绍',
    picture: 'mimose-7910067_1280.webp',
  },
])
const columnImagesPending = ref(false)
// #endregion

// #region 导航
const profileRef = ref()
function scrollToProfile() {
  if (profileRef.value) { profileRef.value.scrollIntoView({ behavior: 'smooth' }) }
}
const qualificationRef = ref()
function scrollToQualification() {
  if (qualificationRef.value) { qualificationRef.value.scrollIntoView({ behavior: 'smooth' }) }
}
const historyRef = ref()
function scrollToHistory() {
  if (historyRef.value) { historyRef.value.scrollIntoView({ behavior: 'smooth' }) }
}
// #endregion
</script>

<template>
  <div class="introduction">
    <div class="top-image">
      <el-image
        v-if="!columnImagesPending"
        style=" width: 100%;height: 500px;"
        :src="columnImagesResponseData[0].picture"
        fit="cover"
      />
      <div v-else style="height: 500px; " />
      <span class="image-title">公司介绍</span>
    </div>

    <div class="nav">
      <span class="item" @click="scrollToProfile">简介</span>&nbsp;|
      <span class="item" @click="scrollToQualification">证书</span>&nbsp;|
      <span class="item" @click="scrollToHistory">时间轴</span>
    </div>

    <div ref="profileRef">
      <Profile />
    </div>
    <div ref="qualificationRef">
      <Qualification />
    </div>
    <div ref="historyRef">
      <History />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.introduction {

  .top-image {
    position: relative;
    height: 500px;
  }

  .image-title {
    position: absolute;
    top: 45%;
    left: 50%;
    font-size: 50px;
    font-weight: 700;
    color: white;
    letter-spacing: 20px;
    transform: translate(-50%, -50%);
  }

  .nav {
    width: 1160px;
    min-height: 50px;
    margin: 0 auto;
    margin-bottom: 70px;
    font-size: 20px;
    font-weight: 600;
    font-weight: normal;
    line-height: 50px;
    color: #333333;
    text-align: center;
    border-bottom: 1px solid #c5c5c5;

    .item {

      &:hover {
        color: var(--color-hover-blue);
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
