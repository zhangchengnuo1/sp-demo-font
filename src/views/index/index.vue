<template>
  <div class="index-div">
    <el-carousel :interval="2500" type="card" height="250px">
      <el-carousel-item v-for="(item,index) in itemList" :key="index">
        <img
          :src="item.itemSrc"
          class="image image2"
        />
      </el-carousel-item>
    </el-carousel>
    <ProductCard @openComment="openComment"></ProductCard>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <el-scrollbar style="height:100%;">
        <ProductComment></ProductComment>
      </el-scrollbar>
    </el-drawer>
    <el-dialog title="提示" :visible.sync="diaLog" width="30%" center>
      <VideoPlay :videoSrc='videoSrc'></VideoPlay>
      <span slot="footer" class="dialog-footer">
        <el-button @click="diaLog= false">取 消</el-button>
        <el-button type="primary" @click="diaLog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import ProductCard from "@/components/productCard";
import ProductComment from "@/components/comment";
import VideoPlay from "@/components/video"
export default {
  name: "Index",
  components: {
    ProductCard,
    ProductComment,
    VideoPlay
  },
  data() {
    return {
      drawer: false,
      diaLog: false,
      videoSrc:require('../../assets/big_buck_bunny.mp4'),
      itemList:[
        {
          itemSrc:require('../../assets/backgroundgreentree.jpg')
        },
        {
          itemSrc:require('../../assets/bg1.jpg')
        },
        {
          itemSrc:require('../../assets/bg2.jpg')
        },
        {
          itemSrc:require('../../assets/bg3.jpg')
        },
        {
          itemSrc:require('../../assets/bg4.jpg')
        },
      ]
    };
  },
  methods: {
    openComment() {
      this.drawer = true;
      this.diaLog = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>
<style>
.image2{
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>