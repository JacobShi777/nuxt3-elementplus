<script lang="ts" setup>
import { View } from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const timeValue = ref()
</script>

<template>
  <div>
    <el-button :icon="View">
      Hello
    </el-button>
    <el-icon><View /></el-icon>
    {{ timeValue }}
    <el-config-provider :locale="zhCn">
      <el-date-picker
        v-model="timeValue"
        type="date"
        placeholder="请选择日期"
      />
    </el-config-provider>
  </div>
</template>

<style lang="scss" scoped>
</style>
