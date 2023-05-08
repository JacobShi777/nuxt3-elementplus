<script lang="ts" setup>
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
  </div>
</template>

<style lang="scss" scoped>
.test-stylelint {
  height: 100px;
  background-color: red;
}
</style>
