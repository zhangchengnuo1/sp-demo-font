<template>
  <Menu mode="horizontal" theme="dark" :active-name="0" @on-select="jump" class="sp-top">
    <MenuItem name="/video">
      <Icon type="ios-paper" />首页
    </MenuItem>
    <MenuItem name="/index">
      <Icon type="ios-people" />产品
    </MenuItem>
    <Submenu name>
      <template slot="title">
        <Icon type="ios-stats" />统计分析
      </template>
      <MenuGroup title="使用">
        <MenuItem name="/comment">评论</MenuItem>
        <MenuItem name="/video">活跃分析</MenuItem>
        <MenuItem name="/login">时段分析</MenuItem>
      </MenuGroup>
    </Submenu>
    <MenuItem name="/detail">
      <Icon type="ios-construct" />详情
    </MenuItem>
    <div style="float:right;position:relative;right:20px;">
      <div v-if="!loginState">
        <el-button class="sp-top" size="small" @click="login" type="text">请登录！</el-button>
      </div>
      <div v-else>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
         <el-button class="sp-top" size="small" type="text">{{userName}}</el-button>
         <Divider type="vertical" />
        <el-button class="sp-top" size="small" @click="outLogin" type="text">退出登录</el-button>
      </div>
    </div>
  </Menu>
</template>
<script>
import { actionRoutes } from "@/router/router.js";
import {mapGetters} from "vuex"
export default {
  inject:['reload'],
  name: "Top",
  data() {
    return {
      loginState:this.$store.getters.isLogin,
      userName:'admin'
    };
  },
  methods: {
    jump(name) {
      this.$emit("routerGo", name);
    },
    login(){
      this.$router.push({path:'/login'})
    },
    outLogin(){
      this.$store.dispatch('setUser',false);
      this.reload();
    }
  }
};
</script>

<style lang="less" scoped>
.sp-top {
  background: transparent;
}
</style>