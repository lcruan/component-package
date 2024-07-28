<template>
 <div class="header">
    <span @click="toggle">
    <el-icon-expand v-if="collapse" style="margin-right: 10px"></el-icon-expand>
    <el-icon-fold v-else></el-icon-fold
  ></span>
 </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
    collapse: {
        type: Boolean
    }
})

let emits = defineEmits(['update:collapse'])
let toggle = () => {
    // 需要父组件的数据
    emits('update:collapse', !props.collapse)
}
</script>
<style scoped lang="scss">
.header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
}
</style>
