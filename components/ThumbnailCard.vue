<script lang="ts" setup>
interface Props {
  image: string
  title: string
  description: string
}
defineProps<Props>()
</script>

<template>
  <div>
    <div class="thumbnail-card">
      <div class="thumbnail-card__image">
        <img :src="image" alt="thumbnail">
      </div>
      <div class="thumbnail-card__content">
        <div class="thumbnail-card__content__title">
          {{ title }}
        </div>
        <div class="thumbnail-card__content__description">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.thumbnail-card {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);
  }

  &__image {
    width: 200px;
    height: 120px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: 20px;

    &__title {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 600;
      color: #333333;
    }

    &__description {
      font-size: 14px;
      color: #666666;
    }
  }
}
</style>
