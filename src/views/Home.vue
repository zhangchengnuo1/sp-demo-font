<template>
  <div class="home">
    <Top @routerGo="routerGo"></Top>
    <div :style="`height:${contentHeight}px;width:100%;font-size:14px;display: flex;`">
      <Main></Main>
    </div>
  </div>
</template>
<script>
import Top from "@/components/top";
import Main from "@/components/main";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Top,
    Main
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      contentHeight: state => state.sysContenHeight
    })
  },
  methods: {
    routerGo(name) {
      this.$router.push({ path: "/home" + name });
      if(name==='/login'){
        this.$router.push({ path: name });
      }
    },
  }
};
</script>

<style scoped>

</style>