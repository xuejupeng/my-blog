<script setup>
defineProps({
  src: String,
  size: {
    type: Number,
    default: 150,
  },
});
</script>

<template>
  <div>
    <img :src="src" :style="{ height: size + 'px', width: size + 'px' }" />
    <p>薛巨鹏的小窝窝</p>
  </div>
</template>

<style scoped lang="less">
img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>