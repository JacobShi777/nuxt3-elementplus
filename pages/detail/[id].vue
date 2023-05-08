<script lang="ts" setup>
import { type IGetCooperationData } from '@/api/homepage/types'
import { getCooperationDataApi } from '@/api/homepage'

const runtimeConfig = useRuntimeConfig()

const cooperationResponse = ref<IGetCooperationData[]>([])
const { data } = await getCooperationDataApi(runtimeConfig.public.VITE_BASE_API)
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
