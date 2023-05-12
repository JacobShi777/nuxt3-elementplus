<script lang="ts" setup>
import { type IGetCooperationData } from '@/api/homepage/types'
import { getCooperationDataApi } from '@/api/homepage'

// const cooperationResponseData = ref<IGetCooperationData[]>([])
// const response = await getCooperationDataApi()
// if (response.data.value !== null) {
//   cooperationResponseData.value = response.data.value.data
// }
const cooperationResponseData = ref<IGetCooperationData[]>([
  {
    id: 1,
    name: '合作伙伴1',
    picture: '/mimose-7910067_1280.webp',
  },
  {
    id: 2,
    name: '合作伙伴2',
    picture: '/sunset-679115_1280.jpeg',
  },
  {
    id: 3,
    name: '合作伙伴3',
    picture: '/mimose-7910067_1280.webp',
  },
  {
    id: 4,
    name: '合作伙伴4',
    picture: '/sunset-679115_1280.jpeg',
  },
  {
    id: 5,
    name: '合作伙伴5',
    picture: '/mimose-7910067_1280.webp',
  },
  {
    id: 6,
    name: '合作伙伴6',
    picture: '/sunset-679115_1280.jpeg',
  },
  {
    id: 7,
    name: '合作伙伴7',
    picture: '/cat01.jpeg',
  },
])
</script>

<template>
  <div class="homepage-cooperation">
    <div class="cooperation-title">
      <span>展示</span>
    </div>
    <div class="cooperation-content">
      <el-image
        v-for="item in cooperationResponseData"
        :key="item.id"
        :src="item.picture"
        :alt="item.name"
        fit="contain"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homepage-cooperation {
  padding: 0 280px;
  margin-bottom: 200px;

  .cooperation-title {
    width: 100%;
    margin: 50px 0;
    font-size: 30px;
    font-weight: 600;
    color: #333333;
    text-align: center;
  }

  .cooperation-content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 15px 20px;
  }

  :deep(.el-image) {
    height: 180px;
    padding: 5px 15px;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  }
}
</style>
