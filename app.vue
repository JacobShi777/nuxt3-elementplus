<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

/** 将 Element Plus 的语言设置为中文 */
const locale = zhCn
</script>

<template>
  <div>
    <ElConfigProvider :locale="locale">
      <NuxtLayout>
        <div class="webpage-content">
          <NuxtPage />
        </div>
      </NuxtLayout>
    </ElConfigProvider>
  </div>
</template>

<style lang="scss" scoped>
.webpage-content {
  height: calc(100vh - var(--navbar-height));
  overflow: auto;
}
</style>

<style>
body {
  margin: 0;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
}

.page-enter-active {
  transition: all 0.2s ease;
}

.page-leave-active {
  transition: all 0.2s ease;
}
</style>
