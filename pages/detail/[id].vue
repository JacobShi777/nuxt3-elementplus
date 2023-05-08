<script lang="ts" setup>
import { type IGetCooperationData } from '@/api/homepage/types'
import { useHomepageApi } from '@/api/homepage'

const homepageApi = useHomepageApi()

const cooperationResponse = ref<IGetCooperationData[]>([])
const { data } = await homepageApi.getCooperationDataApi()
if (data.value !== null) {
  cooperationResponse.value = data.value.data
}
</script>

<template>
  <div>
    <div class="detail-child">
      detail child
    </div>
    <div>id: {{ $route.params.id }}</div>
    <div>
      <img class="cat" src="/cat01.jpeg" alt="">
    </div>
    <div>{{ cooperationResponse }}</div>
  </div>
</template>

<style lang="scss" scoped>
.detail-child {
  color: $linkColor;
}

.cat {
  width: 100px;
}
</style>
