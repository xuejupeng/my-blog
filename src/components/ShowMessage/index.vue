<script setup>
import Icon from '../Icon/index.vue';
import {ref, Transition} from 'vue';
const props = defineProps({
  type: {
    type: String,
  },
  info: {
    type: String,
  },
  active: {
    type: Boolean,
  }
})

</script>

<template>
 <transition name='fade'>
  <div class='massage-wrap' v-if='active'>
      <div :class='{success: type==="success", error: type === "error", warn: type === "warn"}' class='box'>
        <Icon :type='type'/>
        <span>{{info}}</span>
      </div>
  </div>
 </transition>

</template>

<style scoped lang="less">
.fade-enter-active{
    opacity: 0;
    transition:all .5s;
    transform: translateY(200px);
}
.fade-leave-active{
    opacity: 0;
    transition:all .5s;
    transform: translateY(-200px);
}
.fade-enter-to{
    opacity: 1;
    transform: translateY(0px);
}
.massage-wrap{
  position: fixed;
  top: 50%;
  left: 50%;
  color: #fff;
  border-radius: 6px;
  box-shadow: 3px 3px 6px #000;
  .box{
    width: 100%;
    height: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
    border-radius: 6px;
   span{
       margin: 0 5px;
   }
  }
  .success{
    background-color:rgba(29, 47, 182, 0.695);
  }
  .error{
    background-color:#f40;
  }
  .warn{
    background-color:tan;
  }
}
</style>