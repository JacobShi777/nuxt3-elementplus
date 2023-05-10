<script lang="ts" setup>
import { HomeFilled, Message, Phone } from '@element-plus/icons-vue'
import { footerNavOptions } from '@/constants/homepage'

function handleRoute(link: string) {
  footerNavOptions.some((item) => {
    if (item.value === link) {
      navigateTo(item.route)
      return true
    }
    else {
      return false
    }
  })
}
</script>

<template>
  <div class="footer">
    <div class="container">
      <div class="left">
        <div class="title">
          页面导航
        </div>
        <div v-for="item in footerNavOptions" :key="item.value" class="item">
          <div @click="handleRoute(item.value)">
            {{ item.label }}
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="title">
          联系我们
        </div>
        <div class="info-item">
          <el-avatar :icon="Message" />
          <span>abc@company.com</span>
        </div>
        <div class="info-item">
          <el-avatar :icon="HomeFilled" />
          <span>江苏省苏州市吴中区</span>
        </div>
        <div class="info-item">
          <el-avatar :icon="Phone" />
          <div class="double-row">
            <div>公司总机：0000000000</div>
            <div>
              联系人：苏先生
              12333333333
            </div>
          </div>
          <br>
        </div>
      </div>
      <div class="right">
        <div class="title">
          关注我们
        </div>
        <div class="item">
          <div style="margin-bottom: 5px;">
            微信公众号
          </div>
          <el-image src="/wechat.jpg" style="width: 128px;" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <span class="left">Copyright © 公司名称 | </span>
      <span class="right">
        <a href="https://beian.miit.gov.cn/">京ICP备00000000号-0</a>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ebebeb;
  background-color: #282828;

  .container {
    display: flex;
    justify-content: space-between;
    width: 900px;
    height: 307px;
    padding: 48px 0;

    .left {
      width: 160px;
      padding-top: 24px;

      .item {
        height: 24px;
        margin: 8px 0;
        line-height: 24px;

        &:hover {
          color: var(--color-hover-blue);
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    .middle {
      width: 350px;
      padding-top: 24px;

      .info-item {
        height: 36px;
        margin: 16px 0;
        font-weight: 200;
        line-height: 36px;
        color: #ebebeb;

        &:last-child {
          display: flex;
          flex-direction: row;
          height: 56px;
        }

        :deep(.el-avatar) {
          position: relative;
          top: 2px;
          margin-right: 7px;
          color: #598fc2;
          background-color: #ffffff;
          transform: scale(0.9);
        }
      }

      .double-row {
        height: 24px;
        line-height: 24px;
      }
    }

    .right {
      width: 160px;
      padding-top: 24px;
    }

    .left, .right, .middle {

      .title {
        height: 50px;
        padding-bottom: 16px;
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: bold;
        line-height: 50px;
        border-bottom: 1px solid #c5c5c5;
      }
    }
  }

  .bottom {
    width: 100%;
    height: 24px;
    padding: 20px 0;
    text-align: center;
    background-color: #181b1d;

    .left {
      color: #c5c5c5;
    }

    .right {

      a {
        color: #5b8ec5;
        text-decoration: none;

        &:hover {
          color: #ffffff;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
