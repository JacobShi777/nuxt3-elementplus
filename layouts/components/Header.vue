<script lang="ts" setup>
import { ArrowDown, Sunrise } from '@element-plus/icons-vue'

// #region 首页
function goHome() {
  navigateTo('/')
}
// #endregion

// #region 公司介绍
function handleIntroductionCommand() {
  navigateTo('/introduction')
}
// #endregion

// #region 新闻中心
const newsOptions = ref([
  {
    label: '公司新闻',
    value: 'company',
    callback: () => {
      navigateTo('/news/company')
    },
  },
  {
    label: '产业新闻',
    value: 'industry',
    callback: () => {
      navigateTo('/news/industry')
    },
  },
])
const handleNewsCommand = (command: string | number | object) => {
  newsOptions.value.forEach((item) => {
    if (item.value === command) { item.callback() }
  })
}
// #endregion

// #region 关于我们
const aboutUsOptions = ref([
  {
    label: '联系我们',
    value: 'contact',
    callback: () => {
      navigateTo('/aboutUs/contact')
    },
  },
  {
    label: '商务合作',
    value: 'cooperation',
    callback: () => {
      navigateTo('/aboutUs/cooperation')
    },
  },
])
const handleAboutUsCommand = (command: string | number | object) => {
  aboutUsOptions.value.forEach((item) => {
    if (item.value === command) { item.callback() }
  })
}
// #endregion
</script>

<template>
  <div>
    <!-- create a navbar, with a logo and company name at left, and menu button on the right while these buttons are flatten in row -->
    <div class="navbar">
      <div class="logo" @click="goHome">
        <!-- <el-image src="/header-logo.png" alt="logo" /> -->
        <el-icon><Sunrise /></el-icon>
        <span>公司名称</span>
      </div>
      <div class="menu">
        <el-button text size="large" @click="goHome">
          首页
        </el-button>

        <el-button text size="large" @click="handleIntroductionCommand">
          公司介绍
        </el-button>

        <el-dropdown @command="handleNewsCommand">
          <el-button text size="large">
            新闻中心<el-icon><ArrowDown /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="item in newsOptions"
                :key="item.value"
                :command="item.value"
              >
                {{ item.label }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown @command="handleAboutUsCommand">
          <el-button text size="large">
            关于我们<el-icon><ArrowDown /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="item in aboutUsOptions"
                :key="item.value"
                :command="item.value"
              >
                {{ item.label }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--navbar-height);
    padding: 0 20px;
    background-color: var(--color-deep-blue);

    .logo {
      font-size: 23px;
      color: #ffffff;

      :hover {
        cursor: pointer;
      }

      :deep(.el-image) {
        height: 53px;
        padding-top: 5px;
      }

      span {
        margin-left: 10px;
      }
    }

    .menu {
      display: flex;

      a {
        margin-left: 10px;
      }

      :deep(.el-button) {
        color: white;

        &:hover {
          color: var(--color-deep-blue);
        }

        &:focus {
          color: var(--color-deep-blue);
        }
      }
    }
  }
</style>
