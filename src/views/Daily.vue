<script setup lang="ts">
import { reactive, ref } from "vue";
defineProps<{ msg: string }>()

const myNum = ref(0)
const selected = ref(0)
const checkeds = ref([])

const myClick = () => {
  myNum.value ++
}

</script>

<template>
  <div class="box">
    <select v-model="selected">
  <!-- 内联对象字面量 -->
  <option :value="{ number: 123 }">123</option>
</select>
    <div>{{checkeds}}</div>
    <input type="checkbox" id="checkbox1" value="abc" v-model="checkeds" />
    <label for="checkbox1">abc</label>
    <input type="checkbox" id="checkbox" value="def" v-model="checkeds" />
    <label for="checkbox2">def</label>
    <input type="checkbox" id="checkbox1" value="ghi" v-model="checkeds" />
    <label for="checkbox1">ghi</label>

    <div class="click" @click="myClick">Click</div>
    <div class="num">{{myNum}}</div>
  </div>
</template>

<style scoped lang="scss">
.box{

}
</style>
