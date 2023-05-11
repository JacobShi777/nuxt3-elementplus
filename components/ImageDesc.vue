<script lang="ts" setup>
interface Feed {
  title: string
  description: string
  image: string
}
interface Props {
  feed: Feed
  imagePosition: 'left' | 'right'
}
defineProps<Props>()

function splitParagraphs(text: string) {
  return text.split('\n')
}
</script>

<template>
  <div class="image-desc">
    <el-card>
      <div class="title">
        {{ feed.title }}
      </div>
      <div class="content">
        <div v-if="imagePosition === 'left'" class="image">
          <el-image
            style="width: 100%;height: 100%;"
            :src="feed.image"
            fit="cover"
          />
        </div>
        <div class="desc">
          <div class="description">
            <p
              v-for="paragraph in splitParagraphs(feed.description)"
              :key="paragraph"
              style="text-indent:2em;"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
        <div v-if="imagePosition === 'right'" class="image">
          <el-image
            style="width: 100%;height: 100%;"
            :src="feed.image"
            fit="cover"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.image-desc {
  width: 1000px;
  margin: 50px auto;

  .title {
    margin: 40px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: row;

    .image {
      width: 49%;
      padding: 0 30px;
    }

    .desc {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 49%;
      padding: 0 30px;
    }
  }

}
</style>
