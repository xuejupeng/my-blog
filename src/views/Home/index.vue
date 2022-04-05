<script setup>
import img1 from "../../assets/img/1.jpeg";
import img2 from "../../assets/img/2.jpeg";
import img3 from "../../assets/img/3.jpeg";
import Icon from "../../components/Icon/index.vue";
import homeSwitch from "../../composition/useHomeSwitch.js";

const data = [
  { img: img1, title: "凛冬将至", desc: "人唯有恐惧的时候方能勇敢" },
  { img: img2, title: "血火同源", desc: "如果我回头，一切都完了" },
  { img: img3, title: "听我怒吼", desc: "兰尼斯特有债必偿" },
];

const {
  indexRef,
  boxRef,
  isWheelRef,
  marginRef,
  handleClick,
  handleWheel,
  handleEnd,
} = homeSwitch();
</script>

<template>
  <div
    class="home-wrap"
    :style="{ marginTop: marginRef + 'px' }"
    ref="boxRef"
    @mousewheel="handleWheel"
    @transitionend="handleEnd"
  >
    <Icon type="arrowUp" class="up" v-if="indexRef !== 0" @click="indexRef--" />
    <Icon
      type="arrowDown"
      class="down"
      v-if="indexRef !== 2"
      @click="indexRef++"
    />
    <div class="box" v-for="item in data" :key="item.title">
      <img :src="item.img" alt="" />
      <div class="text">
        <h2>{{ item.title }}</h2>
        <h4>{{ item.desc }}</h4>
      </div>
    </div>
    <ul>
      <li
        v-for="(item, i) in data"
        :class="{ active: i === indexRef }"
        @click="handleClick(i)"
      ></li>
    </ul>
  </div>
</template>

<style scoped lang="less">
@import "../../assets/less/home.less";
</style>