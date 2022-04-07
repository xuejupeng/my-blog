<script setup>
import { ref, onBeforeMount, computed, watch } from "vue";
import { getBlogData, getBlogClass } from "../../api/getBlogData";
import Layout from "../../components/Layout/index.vue";
import Pager from "../../components/Pager/index.vue";
import { useRouter, useRoute } from "vue-router";

const blogListRef = ref([]);
const blogClassRef = ref([]);
const classIndex = ref(0);
const blogTotal = ref(0);
let current = ref(1);
const blogRef = ref(null);
let limitRef = ref(10);

const router = useRouter();

const route = useRoute();

//关于文章
const setData = onBeforeMount(() => {
  getBlogData(route.query.page || 1, route.query.limit || 10).then((res) => {
    current.value = +route.query.page || 1;
    limitRef.value = +route.query.limit || 10;
    blogListRef.value = res.data.data;
    blogTotal.value = res.data.total;
  });
});

const setBlogClass = onBeforeMount(() => {
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
  setData();
  router.push({ query: { id: i } });
};

//关于页面
const handlePage = (page) => {
  current.value = page;
  setData();
  blogRef.value.scrollTop = 0;
  router.push({ query: { page: current.value, limit: limitRef.value } });
};

//跳转文章详情页面
const handleDetail = (id) => {
  router.push({ name: "BlogDetail", query: { id } });
  console.log(id);
};
</script>

<template>
  <Layout>
    <template v-slot:center>
      <div class="blog-wrap" ref="blogRef">
        <div v-for="item in blogListRef" :key="item.id" class="blog">
          <div class="left">
            <img :src="item.img" alt="" />
          </div>
          <div class="right">
            <h4 @click="handleDetail(item.id)">{{ item.title }}</h4>
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
        <Pager
          :total="blogTotal"
          :current="current"
          :limit="limitRef"
          @changePage="handlePage"
        />
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