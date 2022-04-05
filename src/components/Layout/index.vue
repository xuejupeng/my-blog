<script setup>
</script>

<template>
  <div class="layout-wrap">
    <div class="menu">
      <slot name="menu"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped lang='less'>
.layout-wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  .menu {
    flex: 0 0 200px;
  }
  .center {
    flex: 1 1 100%;
    overflow-y: hidden;
  }
  .right {
    flex: 1 1 auto;
  }
}
</style>