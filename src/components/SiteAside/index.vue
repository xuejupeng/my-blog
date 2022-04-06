<script setup>
import Menu from "./Menu/index.vue";
import Concat from "./Concat/index.vue";
import Avatar from "../Avatar/index.vue";
</script>

<template>
  <div class="site-aside-wrap">
    <Avatar
      class="avatar"
      src="https://img2.baidu.com/it/u=2743606418,860531633&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
    />
    <Menu />
    <Concat />
    <p class="text">京ICP备17001719号</p>
  </div>
</template>

<style scoped lang='less'>
.site-aside-wrap {
  width: 200px;
  height: 100vh;
  background: #202020;
  padding: 20px 0;
  overflow: auto;
  box-sizing: border-box;
  .avatar {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
  .text {
    color: gray;
    font-size: 12px;
    text-align: center;
    margin-top: 40px;
  }
}
</style>