<script setup>
import { ref } from "vue";
import listForm from "./listForm.vue";
import inputForm from "./inputForm.vue";
import { getComment } from "../../api/getComment";
import showMessage from "../../utils/showMessage";

const comment = ref([]);
const total = ref(0);

getComment().then((res) => {
  comment.value = res.data.data;
  total.value = res.data.data.length;
});

const handleSubmit = (name, content) => {
  if (!name || !content) return;
  getComment().then((res) => {
    comment.value = res.data.data;
    total.value += 1;
  });
  showMessage({ type: "success", info: "评论成功" });
};
</script>

<template>
  <div>
    <inputForm @submit="handleSubmit" />
    <listForm :comment="comment" :total="total" />
  </div>
</template>

<style scoped>
</style>