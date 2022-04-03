<script setup>
import Icon from "../../Icon/index.vue";
const data = [
  { title: "xuejp", icon: "github" },
  { title: "xuejpll@gmail.com", icon: "mail" },
  { title: "1663699296", icon: "qq" },
  { title: "光亮", icon: "weixin" },
];
</script>

<template>
  <ul class="concat-wrap">
    <li v-for="item in data" :key="item.title">
      <Icon :type="item.icon" />
      <span>{{ item.title }}</span>
    </li>
  </ul>
</template>

<style scoped lang='less'>
.concat-wrap {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    height: 40px;
    line-height: 40px;
    display: flex;
    font-size: 14px;
    padding: 0 20px;
    color: #fff;
    cursor: pointer;
    span {
      margin: 0 10px;
    }
    &:hover {
      color: rgb(78, 229, 234);
    }
  }
}
</style>