<script setup>
import { getBlogDetail } from "../../api/getBlogData";
import { ref } from "vue";

const htmlRef = ref(null);

getBlogDetail(1).then((res) => (htmlRef.value = res.data.data.htmlContent));
</script>

<template>
  <div v-html="htmlRef" class="detail-wrap"></div>
</template>

<style scoped>
.detail-wrap {
  height: 100%;
  overflow: scroll;
  padding: 20px 50px;
}
</style>