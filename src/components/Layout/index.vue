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
    border: 1px solid;
  }
  .center {
    flex: 1 1 auto;
    border: 1px solid;
  }
  .right {
    flex: 0 0 250px;
    border: 1px solid;
  }
}
</style>