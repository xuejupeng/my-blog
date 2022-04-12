<script setup>
import { ref} from "vue";
import listForm from "./listForm.vue";
import inputForm from "./inputForm.vue";
import { getComment } from "../../api/getComment";
import ShowMessage from '../ShowMessage/index.vue';

const comment = ref([]);
const total = ref(0);
const active = ref(false);
const commRef = ref(null);
const isLine = ref(false);

getComment().then((res) => {
  comment.value = res.data.data;
  total.value = res.data.total
});

const handleSubmit = (name, content) => {
  if (!name || !content) return;
  getComment().then((res) => {
    comment.value = res.data.data;
    total.value += 1;
  });
  active.value = true;
  setTimeout(() => {
    active.value = false;
  }, 2000)
};

const handleScroll = (e) => {
  if(comment.value.length >= total.value) {
    isLine.value = true;
    return;
  }
  if(e.target.children[0].offsetHeight - (e.target.scrollTop + e.target.offsetHeight) < 100){
     getComment().then((res) => {
        comment.value.push(...res.data.data)
        total.value = res.data.total;
  });
  }
}

</script>

<template>
  <div class='comm' @scroll="handleScroll">
    <div>
    <inputForm @submit="handleSubmit" />
    <listForm :comment="comment" :total="total" />
    </div>
    <div class='line' v-if='isLine'>我是有底线的</div>
  </div>
  <ShowMessage type='success' info='评论成功' ref='messageRef' :active='active'/>
</template>

<style scoped lang="less">
.comm{
  height: 100%;
  overflow-y: auto !important;
    box-sizing: border-box;
  div{
    padding: 30px 0;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .line{
    text-align:center;
    font-size: 14px;
    color: #777;
  }
}
</style>