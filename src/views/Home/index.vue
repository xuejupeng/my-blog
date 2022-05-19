<script setup>
import homeSwitch from "../../composition/useHomeSwitch.js";

const data = [
  { img: 'https://pic.rmb.bdstatic.com/bjh/07e924164fc44ff219328c4ad78b032e.jpeg', title: "凛冬将至", desc: "人唯有恐惧的时候方能勇敢" },
  { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-11-08%2F5dc528500579f.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655473678&t=13704eae83cab748cc754c57098f6a23', title: "血火同源", desc: "如果我回头，一切都完了" },
  { img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-06-12%2F5ee34f1807833.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655473602&t=69b91f7f6b9b40bb1325cd3b195722a7', title: "听我怒吼", desc: "兰尼斯特有债必偿" },
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