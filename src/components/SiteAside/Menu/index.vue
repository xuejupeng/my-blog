<script setup>
import Icon from "../../Icon/index.vue";
const data = [
  { title: "首页", name: "Home", icon: "home" },
  { title: "文章", name: "Blog", icon: "blog" },
  { title: "关于我", name: "About", icon: "about" },
  { title: "项目&效果", name: "Project", icon: "code" },
  { title: "留言板", name: "Message", icon: "chat" },
];
</script>

<template>
  <ul class="menu-wrap">
    <li v-for="item in data" :key="item.title">
      <router-link :to="{ name: item.name }">
        <Icon :type="item.icon" /> <span>{{ item.title }}</span>
      </router-link>
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
    cursor: pointer;
    a {
      height: 100%;
      line-height: 40px;
      padding-left: 50px;
      display: flex;
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-size: 14px;
    }
    .router-link-active {
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
    }
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