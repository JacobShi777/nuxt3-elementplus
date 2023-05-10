<script lang="ts" setup>
import { footerNavOptions } from '@/constants/homepage'

const carouselData = ref<HomepageCarouselData[]>([
  {
    id: 1,
    title: '公司介绍',
    picture: '/mimose-7910067_1280.webp',
    link: 'introduction',
  },
  {
    id: 2,
    title: '新闻中心',
    picture: '/nature-7949073_1280.webp',
    link: 'news',
  },
  {
    id: 3,
    title: '关于我们',
    picture: '/sunset-679115_1280.jpeg',
    link: 'aboutUs',
  },
])

function filterLinkOptionsLabel(link: string) {
  let label
  footerNavOptions.some((item) => {
    if (item.value === link) {
      label = item.label
      return true
    }
    else {
      return false
    }
  })
  return label
}

function handleClick(link: string) {
  footerNavOptions.some((item) => {
    if (item.value === link) {
      navigateTo(item.route)
      return true
    }
    else {
      return false
    }
  })
}
</script>

<template>
  <div>
    <div class="home-images">
      <el-carousel :interval="3000" arrow="always">
        <el-carousel-item v-for="item in carouselData" :key="item.id">
          <el-image :src="item.picture" fit="cover" />
          <div class="content">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="link">
              {{ filterLinkOptionsLabel(item.link) }}
            </div>
            <div class="learn-more">
              <el-button type="primary" size="large" round @click="handleClick(item.link)">
                Learn More
              </el-button>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable selector-class-pattern */

  .home-images {

    :deep(.el-carousel) {
      height: calc(100vh - var(--navbar-height));
    }

    :deep(.el-carousel__container) {
      height: 100%;
    }

    :deep(.el-image) {
      width: 100%;
      height: 100%;
    }

    .content {
      position: absolute;
      top: 45%;
      left: 50%;
      font-weight: bold;
      color: white;
      text-align: center;
      transform: translate(-50%, -50%);

      .title {
        font-size: 60px;
      }

      .link {
        margin-top: 10px;
        font-size: 30px;
      }

      .learn-more {
        margin-top: 20px;

        :deep(.el-button) {
          background-color: transparent;
          border: 3px solid white;

          &:hover {
            color: black;
            background-color: white;
          }
        }
      }
    }
  }
</style>
