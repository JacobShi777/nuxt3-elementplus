<script lang="ts" setup>
</script>

<template>
  <div class="intro-history">
    <el-card>
      <div class="history-title">
        <span>时间轴</span>
      </div>
      <div class="content">
        <el-steps direction="vertical">
          <el-step>
            <template #icon>
              <div class="my-avatar">
                <el-avatar size="large">
                  2022
                </el-avatar>
              </div>
            </template>
            <template #title>
              <div class="text oppisite">
                <el-card>
                  <p>事件1</p>
                  <p>事件2</p>
                  <p>事件3</p>
                </el-card>
                <div class="right-pointer" />
              </div>
            </template>
          </el-step>

          <el-step>
            <template #icon>
              <div class="my-avatar ava-2021">
                <el-avatar size="large">
                  2021
                </el-avatar>
              </div>
            </template>
            <template #title>
              <div class="text no-oppisite">
                <el-card>
                  <p>事件1</p>
                  <p>事件2</p>
                  <p>事件3</p>
                  <p>事件4</p>
                  <p>事件5</p>
                  <p>事件6</p>
                  <p>事件7</p>
                </el-card>
                <div class="left-pointer" />
              </div>
            </template>
          </el-step>

          <el-step>
            <template #icon>
              <div class="my-avatar ava-2020">
                <el-avatar size="large">
                  2020
                </el-avatar>
              </div>
            </template>
            <template #title>
              <div class="text oppisite">
                <el-card>
                  <p>事件1</p>
                  <p>事件2</p>
                  <p>事件3</p>
                </el-card>
                <div class="right-pointer" />
              </div>
            </template>
          </el-step>

          <el-step>
            <template #icon>
              <div class="my-avatar ava-2019">
                <el-avatar size="large">
                  2019
                </el-avatar>
              </div>
            </template>
            <template #title>
              <div class="text no-oppisite">
                <el-card>
                  <p>事件1</p>
                </el-card>
                <div class="left-pointer" />
              </div>
            </template>
          </el-step>

          <el-step>
            <template #icon>
              <div class="my-avatar ava-2018">
                <el-avatar size="large">
                  2018
                </el-avatar>
              </div>
            </template>
            <template #title>
              <div class="text oppisite">
                <el-card>
                  <p>事件1</p>
                  <p>事件2</p>
                  <p>事件3</p>
                </el-card>
                <div class="right-pointer" />
              </div>
            </template>
          </el-step>

          <el-step>
            <template #icon>
              <div class="my-avatar ava-2017">
                <el-avatar size="large">
                  2017
                </el-avatar>
              </div>
            </template>
            <template #title>
              <div class="text no-oppisite">
                <el-card>
                  <p>事件1</p>
                  <p>事件2</p>
                  <p>事件3</p>
                  <p>事件4</p>
                  <p>事件5</p>
                </el-card>
                <div class="left-pointer" />
              </div>
            </template>
          </el-step>

          <el-step>
            <template #icon>
              <div class="my-avatar ava-2016">
                <el-avatar size="large">
                  2016
                </el-avatar>
              </div>
            </template>
            <template #title>
              <div class="text oppisite">
                <el-card>
                  <p>事件1</p>
                  <p>事件2</p>
                  <p>事件3</p>
                </el-card>
                <div class="right-pointer" />
              </div>
            </template>
          </el-step>
        </el-steps>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.intro-history {
  width: 1060px;
  margin: 50px auto;

  .history-title {
    width: 100%;
    margin: 50px 0;
    font-size: 30px;
    font-weight: 600;
    color: #333333;
    text-align: center;
  }

  .content {
    width: 50%;
    padding: 70px 0;
    padding-top: 100px;
    padding-left: 47%;
    margin: 0 20px;
    background-color: #e7eef0;

    :deep(.el-avatar) {
      background-color: #26b8be;
      border: 3px solid #ffffff;
      transform: scale(1.5);
    }

    .text {
      position: relative;
      width: 380px;
      padding: 30px;
      font-weight: normal;
    }

    .oppisite {
      margin-top: -60px;
      margin-left: -500px;
    }

    .no-oppisite {
      margin-top: -60px;
      margin-left: 20px;
    }

    .right-pointer {
      position: absolute;
      top: 50px;
      right: 18px;
      width: 0;
      height: 0;
      border-top: 14px solid transparent;
      border-bottom: 14px solid transparent;
      border-left: 14px solid #ffffff;
    }

    .left-pointer {
      position: absolute;
      top: 50px;
      left: 18px;
      width: 0;
      height: 0;
      border-top: 14px solid transparent;
      border-right: 14px solid #ffffff;
      border-bottom: 14px solid transparent;
    }

    .ava-2021 {

      :deep(.el-avatar) {
        background-color: #29323f;
      }
    }

    .ava-2020 {

      :deep(.el-avatar) {
        background-color: #e0612e;
      }
    }

    .ava-2019 {

      :deep(.el-avatar) {
        background-color: #3249a8;
      }
    }

    .ava-2018 {

      :deep(.el-avatar) {
        background-color: #8f27a2;
      }
    }

    .ava-2017 {

      :deep(.el-avatar) {
        background-color: #728298;
      }
    }

    .ava-2016 {

      :deep(.el-avatar) {
        background-color: #0f8dec;
      }
    }
  }
}
</style>
