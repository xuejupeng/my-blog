<script setup>
import Icon from "../Icon/index.vue";
</script>

<template>
  <div class="empty-wrap">
    <Icon type="empty" />
    <p>无数据</p>
  </div>
</template>

<style scoped lang='less'>
.empty-wrap {
  color: gray;
  text-align: center;
  .icon-wrap {
    font-size: 100px;
  }
}
</style>