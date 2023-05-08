<script lang="ts" setup>
</script>

<template>
  <div>
    <div>Index Page</div>
    <NuxtLink href="/detail/1">
      gotoDetailPage
    </NuxtLink>
    <MyElementPlus />
    <div class="test-stylelint" />
  </div>
</template>

<style lang="scss" scoped>
.test-stylelint {
  height: 100px;
  background-color: red;
}
</style>
