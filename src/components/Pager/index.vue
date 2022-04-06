<script setup>
import { computed, defineEmits } from "vue";
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  current: {
    type: Number,
    default: 1,
  },
  visibleNum: {
    type: Number,
    default: 10,
  },
  limit: {
    type: Number,
    default: 10,
  },
});

//计算出页面的总页数
const pageTotal = computed(() => {
  return Math.ceil(props.total / props.limit);
});

//计算显示的最小页码
const minPage = computed(() => {
  let min = props.current - props.visibleNum / 2;
  if (min <= 1) {
    min = 1;
  }
  return min;
});

//计算显示的最大页码
const maxPage = computed(() => {
  let max = minPage.value + props.visibleNum;
  if (max >= pageTotal.value) {
    max = pageTotal.value;
  }
  return max;
});

//计算页面显示的页面
const page = computed(() => {
  let arr = [];
  for (let i = minPage.value; i < maxPage.value; i++) {
    arr.push(i);
  }
  return arr;
});

//抛出页面的点击事件
const emit = defineEmits(["changePage"]);
const handleClick = (page) => {
  emit("changePage", page);
};
</script>

<template>
  <div class="pager-wrap">
    <span @click="handleClick(1)">|&lt;&lt;</span>
    <span @click="handleClick(current - 1)">&lt;&lt;</span>
    <span
      :class="{ active: current === item }"
      v-for="(item, i) in page"
      :key="item"
      @click="handleClick(item)"
      >{{ item }}</span
    >
    <span @click="handleClick(current + 1)">&gt;&gt;</span>
    <span @click="handleClick(pageTotal)">&gt;&gt;|</span>
  </div>
</template>

<style scoped lang="less">
.pager-wrap {
  text-align: center;
  margin: 10px 0;
  span {
    margin: 0 5px;
    color: darkcyan;
    cursor: pointer;
    &:hover {
      color: #f40;
    }
    &.active {
      color: #f40;
    }
  }
}
</style>