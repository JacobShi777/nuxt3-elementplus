<script lang="ts" setup>
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'

defineProps<Props>()

const emit = defineEmits<{
  (e: 'callback', sideBarInfo: SideBarInfo): void
}>()

interface SideBarInfo {
  label: string
  value: string
}
interface Props {
  sideBarInfo: SideBarInfo[]
  activeName: string | undefined
}
const sideBarShow = ref(false)
function toggle() {
  sideBarShow.value = !sideBarShow.value
}
const classObj = computed(() => {
  return {
    'side-bar-show': sideBarShow.value,
  }
})

function handleClick(item: SideBarInfo) {
  emit('callback', item)
}
</script>

<template>
  <div class="sidebar">
    <div class="content" :class="classObj">
      <el-menu
        :default-active="activeName"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          v-for="item in sideBarInfo"
          :key="item.value"
          :index="item.value"
          @click="handleClick(item)"
        >
          {{ item.label }}
        </el-menu-item>
      </el-menu>
    </div>
    <div class="my-icon" :class="classObj" @click="toggle">
      <el-icon v-if="!sideBarShow">
        <ArrowLeftBold />
      </el-icon>
      <el-icon v-else>
        <ArrowRightBold />
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {

  .content {
    position: fixed;
    top: var(--navbar-height);
    bottom: 0;
    left: 0;
    width: 170px;
    padding: 80px 30px;
    background-color: transparent;
    background-color: rgb(5 55 64 / 75%);
    transition: margin-left 0.5s;

    :deep(.el-menu) {
      background-color: transparent;
      border: 0;

    }

    :deep(.el-menu-item) {
      justify-content: center;
      font-size: 18px;
      font-weight: normal;

      &:hover {
        background-color: transparent;
        border-bottom: 2px rgb(2 171 2) solid;
      }
    }

    &.side-bar-show {
      margin-left: -230px;
    }
  }

  .my-icon {
    position: fixed;
    top: var(--navbar-height);
    left: 190px;
    width: 40px;
    height: 40px;
    font-size: 25px;
    line-height: 40px;
    color: #ffffff;
    text-align: center;
    background-color: transparent;
    transition: margin-left 0.5s;

    &:hover {
      color: var(--color-hover-blue);
      cursor: pointer;
      background-color: rgb(5 55 64 / 95%);
      border-radius: 5%;
    }

    &.side-bar-show {
      margin-left: -190px;
      background-color: rgb(5 55 64 / 75%);

      &:hover {
        background-color: rgb(5 55 64 / 95%);
      }
    }
  }
}
</style>
