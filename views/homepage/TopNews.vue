<script lang="ts" setup>
import { type IGetNewsData } from '@/api/news/types'
import { getTopNewsDataApi } from '@/api/news'
import { formatDate } from '@/utils'

// const responseData = ref<IGetNewsData[]>([])
// const pending = ref<boolean>(false)
// const response = await getTopNewsDataApi()
// if (response.data.value !== null) {
//   responseData.value = response.data.value.data
//   pending.value = response.pending.value
// }

const responseData = ref<IGetNewsData[]>([
  {
    id: 1,
    title: '新闻1',
    category: '公司新闻',
    time: 1627660800000,
    showTop: true,
    picture: '/mimose-7910067_1280.webp',
    content: '新闻1内容',
    prev: [2, '上一条'],
    next: [3, '上一条'],
  },
  {
    id: 1,
    title: '新闻2',
    category: '公司新闻',
    time: 1627760800000,
    showTop: true,
    picture: '/sunset-679115_1280.jpeg',
    content: '新闻1内容',
    prev: [2, '上一条'],
    next: [3, '下一条'],
  },
])

// 为了页面美观，最多只展示10条
const topShowData = computed(() => {
  return responseData.value.slice(0, 10)
})

function goToNewsDetail(id: number) {
  navigateTo(`/news/detail/${id}`)
}
</script>

<template>
  <div class="top-news-page">
    <div class="title">
      <span>新闻中心</span>
    </div>
    <div class="thumbnail-card">
      <div class="thumbnail-card__image">
        <el-carousel :interval="3000" arrow="always">
          <el-carousel-item v-for="item in topShowData" :key="item.id" @click="goToNewsDetail(item.id)">
            <el-image :src="item.picture" fit="cover" />
            <div class="title">
              {{ item.title }}
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="thumbnail-card__content">
        <div class="thumbnail-card__content__title">
          <ul>
            <li v-for="item in topShowData" :key="item.id">
              <div class="title-list" @click="goToNewsDetail(item.id)">
                <div class="left">
                  {{ item.title }}
                </div>
                <div class="right">
                  {{ formatDate(item.time) }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable selector-class-pattern */

.top-news-page {
  width: 1400px;
  margin: 80px auto 100px;

  .title {
    width: 100%;
    margin: 50px 0;
    font-size: 30px;
    font-weight: 600;
    color: #333333;
    text-align: center;
  }

  :deep(.el-image) {
    width: 100%;
    height: 100%;
    // padding: 5px 15px;
    // margin: 5px 10px;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  }

  .thumbnail-card {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    transition: all 0.3s ease-in-out;

    :deep(.el-carousel) {
      height: 100%;
    }

    :deep(.el-carousel__container) {
      height: 100%;
      cursor: pointer;
    }

    :deep(.el-carousel__indicators) { // 长度不加长会换行
      max-width: 380px;
    }

    &:hover {
      box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);
    }

    &__image {
      width: 50%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .title {
        position: absolute;
        bottom: -25px;
        padding: 5px 0;
        font-size: 18px;
        color: aliceblue;
        background-color: transparent;
        background-color: rgb(5 55 64 / 45%);
      }
    }

    &__content {
      width: 43%;
      padding: 20px;

      &__title {
        margin-bottom: 10px;
        font-size: 18px;
        color: #333333;

          .title-list {
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;

            :hover {
              color: #1890ff;
              cursor: pointer;
            }

            .left {
              width: 75%;
              overflow:hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }

            .right {
              width: 25%;
              text-align: right;
            }
          }

      }
    }
  }
}
</style>
