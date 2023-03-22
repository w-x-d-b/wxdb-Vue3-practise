<script setup>
import { reactive, ref } from "vue";

function zhCss2(num,l) {
  const a_l = 140;
  const a_t = 251;
  const left = a_l * num - 0
  const top = a_t * num -500
  return `left: ${a_l}px;top:${top}px`
}
// const zhCss = (number:num) => {
//   const a_l = 200;
//   const a_t = 200;
//   const left = a_l * num
//   const top = a_t * num
//   return `left: ${left}px;top:${top}px`
// }


</script>
<template>
    <div class="box">
      <div class="box1">
        <span class="zh" :style="zhCss2(1)">55839929.zh</span>
        <span class="zh" :style="zhCss2(2)">55839929.zh</span>
        <span class="zh" :style="zhCss2(3)">55839929.zh</span>
        <span class="zh" :style="zhCss2(4)">55839929.zh</span>
        <span class="zh" :style="zhCss2(5)">55839929.zh</span>
      </div>
     <div class="box2">
      <span class="zh" :style="zhCss2(1)">55839929.zh</span>
      <span class="zh" :style="zhCss2(2)">55839929.zh</span>
      <span class="zh" :style="zhCss2(3)">55839929.zh</span>
      <span class="zh" :style="zhCss2(4)">55839929.zh</span>
      <span class="zh" :style="zhCss2(5)">55839929.zh</span>
     </div>
     <div class="box3">
      <span class="zh" :style="zhCss2(1)">55839929.zh</span>
      <span class="zh" :style="zhCss2(2)">55839929.zh</span>
      <span class="zh" :style="zhCss2(3)">55839929.zh</span>
      <span class="zh" :style="zhCss2(4)">55839929.zh</span>
      <span class="zh" :style="zhCss2(5)">55839929.zh</span>
     </div>
     <div class="box4">
      <span class="zh" :style="zhCss2(1)">55839929.zh</span>
      <span class="zh" :style="zhCss2(2)">55839929.zh</span>
      <span class="zh" :style="zhCss2(3)">55839929.zh</span>
      <span class="zh" :style="zhCss2(4)">55839929.zh</span>
      <span class="zh" :style="zhCss2(5)">55839929.zh</span>
     </div>
     <div class="box5">
      <span class="zh" :style="zhCss2(1)">55839929.zh</span>
      <span class="zh" :style="zhCss2(2)">55839929.zh</span>
      <span class="zh" :style="zhCss2(3)">55839929.zh</span>
      <span class="zh" :style="zhCss2(4)">55839929.zh</span>
      <span class="zh" :style="zhCss2(5)">55839929.zh</span>
     </div>
     <div class="box6">
      <span class="zh" :style="zhCss2(1)">55839929.zh</span>
      <span class="zh" :style="zhCss2(2)">55839929.zh</span>
      <span class="zh" :style="zhCss2(3)">55839929.zh</span>
      <span class="zh" :style="zhCss2(4)">55839929.zh</span>
      <span class="zh" :style="zhCss2(5)">55839929.zh</span>
     </div>
      
    </div>
</template>

<style scoped lang="scss">
$zh-top: 200px;
$zh-left: 200px;
.box{
  position: relative;
  height: 700px;
  width: 700px;
  background: url('../assets/sy1.png') no-repeat;
  background-size: 130%;
}
.zh{
  position: absolute;
  transform: rotate(-45deg);
}
.box1{
  position: relative;
  left: 28px;
    top: 25px;
}
.box6{
  position: relative;
  left: -124px;
    top: -90px;
}
.box2{
  position: relative;
  left: 181px;
    top: -114px;
}
.box3{
  position: relative;
  left: 318px;
    top: 9px;
}
.box4{
  position: relative;
  left: 442px;
    top: -114px;
}
.box5{
  position: relative;
  left: 566px;
    top: -235px;
}
</style>
