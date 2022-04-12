<script setup>
import { ref, defineProps } from "vue";

defineProps({
  comment: {
    type: Array,
    default: [],
  },
  total: {
    type: Number,
    default: 0,
  },
});

</script>

<template>
  <div class="comment" ref='commentRef'>
    <div class="msg">留言板（{{ total }}）</div>
    <div class="box" v-for="(item, i) in comment" :key="i">
      <div class="img">
        <img :src="item.avatar" />
      </div>
      <div class="context">
        <div class="name-time">
          <span class="name">{{ item.name }}</span>
          <span class="time">{{ item.date }}</span>
        </div>
        <div class="content">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.comment {
  margin: 10px auto;
  width: 60%;
  height: 100%;
  .msg {
    font-weight: bold;
    font-size: 16px;
    margin: 20px 0;
  }
  .box {
    width: 100%;
    margin: 10px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    .img {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .context {
      margin-left: 10px;
    }
    .name-time {
      display: flex;
      justify-content: space-between;
      .name {
        font-weight: 800;
        color: #7ebf50;
        font-size: 16px;
      }
      .time {
        font-size: 14px;
        color: #888;
      }
    }
    .content {
      font-size: 14px;
      color: #999;
      margin: 10px 0 20px 0;
    }
  }
}
</style>