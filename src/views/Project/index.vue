<script setup>
import {ref} from 'vue';
import getProject from '../../api/getProject';
import Icon from '../../components/Icon/index.vue';

const dataRef = ref([]);

getProject().then(res => dataRef.value = res.data.data);

</script>

<template>
  <div class='project'>
    <div class="project-item" v-for='item in dataRef' :key='item.title'>
      <div class="img">
        <img :src="item.img" alt="">
      </div>
      <div class="info">
        <div class="title">
          {{item.title}}
        </div>
        <div class="content">
          {{item.content}}
        </div>
        <div class="git" v-if='item.isGithub'>
            <Icon type='github'/>
            <span>github</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.project{
  height: 100%;
  overflow: scroll;
  width: 80%;
  padding: 20px;
  margin: 0 auto;
  .project-item{
    padding: 20px 10px;
    display: flex;
    cursor:pointer;
    &:hover{
      transform: translate(3px, 3px);
      box-shadow: 2px 2px 8px #000, -2px -2px 8px #000;
      color:cadetblue;
    }
    .img{
      img{
        border-radius: 5px;
      }
    }
    .info{
      position: relative;
      .git{
        box-shadow: 1px 1px 4px #000;
        position: absolute;
        right: 10px;
        top: 0;
        display: flex;
        span{
          margin: 0 5px;
        }
        padding: 5px;
        background: #000;
        color: #fff;
        font-size: 12px;
        border-radius: 8px;
        cursor:pointer;
        &:hover{
          color:cadetblue;
        }
      }
      margin: 0 20px;
      .title{
        font-weight: bold;
        font-size: 16px;
      }
      .content{
        font-size: 14px;
        color: #888;
        margin: 20px 0;
      }
    }
  }
}
</style>