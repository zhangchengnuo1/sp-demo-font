<template>
  <div id="app" class="appBackGround">
    <!-- <vue-particles
    color="#409EFF"
    :particleOpacity="0.7"
    :particlesNumber="80"
    shapeType="circle"
    :particleSize="4"
    linesColor="#409EFF"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
    >  </vue-particles>-->
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
// import { pageApi } from '@/api/page.js'
export default {
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true //控制视图是否显示的变量
    };
  },
  methods: {
    ...mapMutations(["SET_SYS_CONTENT_HEIGHT_WIDTH"]),
    setHeightWidth() {
      this.SET_SYS_CONTENT_HEIGHT_WIDTH({
        height: window.innerHeight - 85,
        width: window.innerWidth
      });
    },
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function() {
        this.isRouterAlive = true; //再打开
      });
    }
  },
  mounted() {
    this.setHeightWidth();
    window.onresize = () => {
      return (() => {
        this.setHeightWidth();
      })();
    };
  },
  created() {
    // pageApi.login({ account: 'admin', password: 'admin' }).then(res => {
    //   localStorage.setItem('userInfo', JSON.stringify(res.data.user))
    //   localStorage.setItem('resources', JSON.stringify(res.data.resources))
    // })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(./assets/bg4.jpg); /* margin-top: 60px; */
  color: #909399;
  /*如果想做背景图片 可以给标签一个class 直接添加背景图*/
  position: relative;
}
/* #particles-js{
   width: 100%;
   height: calc(100% - 100px);
    position: absolute;
    z-index: 0;  
 } */
</style>
