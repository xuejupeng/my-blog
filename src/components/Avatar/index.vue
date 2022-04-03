<script setup>
import { ref } from "vue";
defineProps({
  src: String,
  size: {
    type: Number,
    default: 150,
  },
});
const numRef = ref(0);
const increase = () => {
  numRef.value++;
};
</script>

<template>
  <div>
    <img :src="src" :style="{ height: size + 'px', width: size + 'px' }" />
    <button @click="increase">{{ numRef }}</button>
  </div>
</template>

<style scoped lang="less">
img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>