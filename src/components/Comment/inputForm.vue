<script setup>
import { ref, defineEmits } from "vue";

const nameRef = ref("");
const contentRef = ref("");
const nameInfo = ref("");
const contentInfo = ref("");

const emit = defineEmits();
const handleSubmit = () => {
  if (nameRef.value === "") {
    nameInfo.value = "请输入用户名";
    return;
  }
  if (contentRef.value === "") {
    contentInfo.value = "请输入评论内容";
    return;
  }
  emit("submit", nameRef.value, contentRef.value);
  nameRef.value = "";
  contentRef.value = "";
};
</script>

<template>
  <div class="input-wrap">
    <form @submit.prevent="handleSubmit">
      <div class="input">
        <input type="text" placeholder="请输入用户名" v-model="nameRef" />
        <p v-if="!nameRef" class="info">{{ nameInfo }}</p>
      </div>
      <div class="content">
        <textarea
          id=""
          cols="90"
          rows="15"
          placeholder="请输入内容"
          v-model="contentRef"
        ></textarea>
        <p v-if="!contentRef" class="info">{{ contentInfo }}</p>
      </div>
      <div class="btn">
        <button>提交</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang='less'>
.input-wrap {
  width: 60%;
  height: 100%;
  margin: 30px auto;
  .content {
    height: 270px;
  }
  .info {
    font-size: 14px;
    color: #f00;
    margin: 2px 0;
  }
  .input {
    width: 100%;
    height: 60px;
    input {
      width: 70%;
      height: 35px;
      box-sizing: border-box;
      padding: 0 10px;
      border-radius: 5px;
      border: 1px solid #000;
    }
  }
  .btn {
    button {
      height: 30px;
      width: 90px;
      background: #3d80e9;
      border: none;
      color: #fff;
      font-size: 14px;
      border-radius: 6px;
    }
  }
}
</style>