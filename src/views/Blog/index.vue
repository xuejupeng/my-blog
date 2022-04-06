<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { getBlogData, getBlogClass } from "../../api/getBlogData";
import Layout from "../../components/Layout/index.vue";
import Pager from "../../components/Pager/index.vue";

const blogListRef = ref([]);
const blogClassRef = ref([]);
const classIndex = ref(0);
const blogTotal = ref(0);
const current = ref(0);

//关于文章
onBeforeMount(() => {
  getBlogData().then((res) => {
    blogListRef.value = res.data.data;
    blogTotal.value = res.data.total;
  });
  getBlogClass().then((res) => {
    blogClassRef.value = res.data.data;
  });
});

const blogTotalRef = computed(() => {
  return blogClassRef.value.reduce((prev, next) => {
    return prev + next.num;
  }, 0);
});

const blogClass = computed(() => {
  return [{ class: "全部", num: blogTotalRef.value }, ...blogClassRef.value];
});

const handleClass = (i) => {
  classIndex.value = i;
};

const handlePage = (page) => {
  current.value = page;
};

//关于页码
</script>

<template>
  <Layout>
    <template v-slot:center>
      <div class="blog-wrap">
        <div v-for="item in blogListRef" :key="item.id" class="blog">
          <div class="left">
            <img :src="item.img" alt="" />
          </div>
          <div class="right">
            <h4>{{ item.title }}</h4>
            <div class="info">
              <span>日期：{{ item.date }}</span>
              <span>浏览：{{ item.browse }}</span>
              <span>评论：{{ item.comment }}</span>
              <span>分类：{{ item.class }}</span>
            </div>
            <div class="content">
              {{ item.content }}
            </div>
          </div>
        </div>
        <Pager :total="blogTotal" :current="current" @changePage="handlePage" />
      </div>
    </template>
    <template v-slot:right>
      <div class="class-right">
        <h4>文章分类</h4>
        <ul>
          <li
            v-for="(item, i) in blogClass"
            :key="item.class"
            @click="handleClass(i)"
            :class="{ active: classIndex === i }"
          >
            <span>{{
              typeof item.class === "number" ? `分类${item.class}` : "全部"
            }}</span>
            <span>{{ item.num }}篇</span>
          </li>
        </ul>
      </div>
    </template>
  </Layout>
</template>

<style scoped lang='less'>
@import "../../assets/less/blog.less";
</style>