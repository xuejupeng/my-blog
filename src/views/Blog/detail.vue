<script setup>
import { getBlogDetail } from "../../api/getBlogData";
import { ref, computed, watch } from "vue";
import Layout from "../../components/Layout/index.vue";
import "highlight.js/styles/github.css";
import "../../assets/less/mackdown.less";

const dataRef = ref([]);
const hashRef = ref("");
const flagRef = ref(false);
let timer = ref(null);

getBlogDetail(1).then((res) => {
  dataRef.value = res.data.data;
});

const handleScroll = (item) => {
  clearTimeout(timer.value);
  location.hash = item.anchor;
  hashRef.value = item.anchor;
  flagRef.value = true;
  timer.value = setTimeout(() => {
    flagRef.value = false;
  }, 1000);
};

const handleChange = (e) => {
  if (flagRef.value) {
    return;
  }

  let title = "";
  dataRef.value.toc.forEach((item, index) => {
    const dom = document.getElementById(item.anchor);
    if (dom.getBoundingClientRect().top < 50) {
      title = item.anchor;
      return;
    }
    if (item.children) {
      return item.children.forEach((it) => {
        const dom = document.getElementById(it.anchor);
        if (dom.getBoundingClientRect().top < 50) {
          title = it.anchor;
          return;
        }
      });
    }
  });
  location.hash = title;
  hashRef.value = title;
};
</script>

<template>
  <Layout>
    <template v-slot:center>
      <div class="detail-wrap" ref="wrapRef" @scroll="handleChange">
        <h2>{{ dataRef.title }}</h2>
        <div class="info">
          <span> 日期：{{ dataRef.createDate }} </span>
          <span> 浏览：{{ dataRef.scanNumber }} </span>
          <span> 评论：{{ dataRef.commentNumber }} </span>
          <span> 分类：{{ dataRef.id }} </span>
        </div>
        <div v-html="dataRef.htmlContent" class="markdown-body"></div>
      </div>
    </template>
    <template v-slot:right>
      <div class="class-wrap">
        <h4>目录</h4>
        <ul>
          <li
            v-for="item in dataRef.toc"
            :key="item.anchor"
            @click="handleScroll(item)"
            :class="{
              active: item.anchor === hashRef,
            }"
          >
            {{ item.name }}
            <template v-if="item.children">
              <li
                v-for="i in item.children"
                :key="i.anchor"
                class="child"
                :class="{
                  active: i.anchor === hashRef,
                }"
              >
                {{ i.name }}
              </li>
            </template>
          </li>
        </ul>
      </div>
    </template>
  </Layout>
</template>

<style scoped lang="less">
.class-wrap {
  width: 250px;
  height: 100%;
  background: rgba(255, 248, 0, 0.05);
  h4 {
    margin: 0;
    padding: 20px;
  }
  ul {
    list-style: none;
    margin: 0 30px;
    padding: 0;
    li {
      font-size: 14px;
      color: #999;
      line-height: 40px;
      cursor: pointer;
      &.active {
        color: #f40;
        font-weight: bold;
      }
      .child {
        margin: 0 20px;
      }
    }
  }
}
.detail-wrap {
  height: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
  padding: 20px 50px;
  background: rgba(56, 54, 55, 0.05);
  .markdown-body {
    margin: 20px;
  }
  .info {
    span {
      margin: 0 5px;
      color: gray;
      font-size: 14px;
    }
  }
}
</style>