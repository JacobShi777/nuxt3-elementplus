<script lang="ts" setup>
</script>

<template>
  <div>
    <div class="detail-child">detail child</div>
    <div>id: {{ $route.params.id }}</div>
    <div>
      <img class="cat" src="/cat01.jpeg" alt="">
    </div>
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
