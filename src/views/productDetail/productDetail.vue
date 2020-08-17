<template>
  <el-container>
    <el-aside width="1500px"><Detail></Detail></el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>
<script>
import Detail from "@/components/detail";
export default {
  name: "ProductDetail",
  components: {
    Detail
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>