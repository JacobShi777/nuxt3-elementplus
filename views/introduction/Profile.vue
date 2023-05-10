<script lang="ts" setup>
import { type IGetProfileData } from '@/api/introduction/types'
import { getProfileDataApi } from '@/api/introduction'

// const responseData = ref<IGetProfileData[]>([])
// const { data } = await getProfileDataApi()
// if (data.value !== null) { responseData.value = data.value.data }
const responseData = ref<IGetProfileData[]>([
  {
    id: 1,
    profile: '这是公司的简介\n公司的简介',
  },
])

function splitParagraphs(text: string) {
  return text.split('\n')
}
</script>

<template>
  <div class="intro-profile">
    <el-card>
      <div class="title">
        简介
      </div>
      <p
        v-for="paragraph in splitParagraphs(responseData[0].profile)"
        :key="paragraph"
        style="text-indent:2em;"
      >
        {{ paragraph }}
      </p>
      <div class="inner-card">
        <div class="sub-title">
          专业技术
        </div>
        <div class="content">
          <div>
            <p>项目一</p>
            <p>内容1</p>
            <p>内容2</p>
          </div>
          <div>
            <p>项目一</p>
            <p>内容1</p>
            <p>内容2</p>
          </div>
        </div>
        <div class="tail">
          <div>
            <p>
              <span class="number">30</span>
              个AAA
            </p>
          </div>
          <div>
            <p>
              <span class="number">80</span>
              位BBB
            </p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.intro-profile {
  width: 1060px;
  margin: 0 auto;

  :deep(.el-card) {
    padding: 30px;
  }

  .title {
    padding: 40px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }

  .inner-card {
    padding-bottom: 40px;
    color: #ffffff;
    background: url("/sunset-679115_1280.jpeg") fixed;
    background-size: cover;

    .sub-title {
      padding: 120px 0 60px;
      font-size: 46px;
      font-weight: bold;
      text-align: center;
    }

    .content, .tail {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      text-align: center;
    }

    .content {

      p {
        font-size: 16px;

        &:first-child {
          font-size: 30px;
        }
      }
    }

    .tail {
      font-size: 26px;
      font-weight: bold;
      background-color: rgb(255 255 255 / 15%);

      .number {
        font-size: 40px;
        color: #f8ac39;
      }
    }
  }
}
</style>
