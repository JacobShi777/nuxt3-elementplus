<script lang="ts" setup>
import Footer from '@/layouts/components/Footer.vue'
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <div>
    <div>Index Page</div>
    <NuxtLink href="/detail/1">
      gotoDetailPage
    </NuxtLink>
    <MyElementPlus />
    <div class="test-stylelint" />
    <div>
      runtimeConfig: {{ runtimeConfig.public.VITE_BASE_API }}
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.test-stylelint {
  height: 100px;
  background-color: red;
}
</style>
