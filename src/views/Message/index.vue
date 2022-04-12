<script setup>
import Comment from "../../components/Comment/index.vue";


const handleScroll = (e) => {
  console.log(e.target.children[0].offsetHeight);
  console.log(e.target.scrollTop);
  console.log(e.target.offsetHeight + e.target.scrollTop);

}
</script>

<template>
  <div class="comment-wrap" @scroll="handleScroll">
    <Comment/>
  </div>
</template>

<style scoped>
.comment-wrap {
  height: 100%;
}
</style>