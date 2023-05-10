<script lang="ts" setup>
import { type IGetQualificationData } from '@/api/introduction/types'
import { getQualificationDataApi } from '@/api/introduction'

// const responseData = ref<IGetQualificationData[]>([])
// const { data } = await getQualificationDataApi()
// if (data.value !== null) { responseData.value = data.value.data }
const responseData = ref<IGetQualificationData[]>([
  {
    id: 1,
    title: '证书1',
    time: 1627660800000,
    picture: '/mimose-7910067_1280.webp',
  },
  {
    id: 2,
    title: '证书2',
    time: 1627660800000,
    picture: '/nature-7949073_1280.webp',
  },
  {
    id: 3,
    title: '证书3',
    time: 1627660800000,
    picture: '/sunset-679115_1280.jpeg',
  },
])
</script>

<template>
  <div class="intro-qualification">
    <el-card>
      <div class="qualification-title">
        <span>证书</span>
      </div>
      <div class="qualification-content">
        <el-image
          v-for="item in responseData"
          :key="item.id"
          :src="item.picture"
          :alt="item.title"
          fit="contain"
        />
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.intro-qualification {
  width: 1060px;
  margin: 0 auto;
  margin-top: 50px;

  .qualification-title {
    width: 100%;
    margin: 50px 0;
    font-size: 30px;
    font-weight: 600;
    color: #333333;
    text-align: center;
  }

  .qualification-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  :deep(.el-image) {
    flex: 0 0 45%;
    height: 300px;
    padding: 25px 15px;
    margin: 5px 10px;
  }
}
</style>
