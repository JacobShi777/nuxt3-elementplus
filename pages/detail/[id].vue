<script lang="ts" setup>
const { data: tableData } = await useFetch('/gateway/contactus/list')
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
    <div>{{ tableData }}</div>
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
