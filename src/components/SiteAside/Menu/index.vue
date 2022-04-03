<script setup>
import Icon from "../../Icon/index.vue";
const data = [
  { title: "首页", link: "/", icon: "home" },
  { title: "文章", link: "/blog", icon: "blog" },
  { title: "关于我", link: "/about", icon: "about" },
  { title: "项目&效果", link: "/project", icon: "code" },
  { title: "留言板", link: "/message", icon: "chat" },
];
</script>

<template>
  <ul class="menu-wrap">
    <li v-for="item in data" :key="item.title">
      <Icon :type="item.icon" /> <span>{{ item.title }}</span>
    </li>
  </ul>
</template>

<style scoped lang='less'>
.menu-wrap {
  padding: 0;
  list-style: none;
  width: 100%;
  margin: 5px 0 10px 0;
  li {
    height: 40px;
    line-height: 40px;
    color: rgba(255, 255, 255, 0.9);
    padding-left: 50px;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    span {
      margin: 0 10px;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
    }
  }
}
</style>