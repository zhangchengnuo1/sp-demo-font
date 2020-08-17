<template>
  <el-row>
    <el-col :span="4" v-for="(product, index) in productList" :key="index" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }" shadow="hover" class="sp-card">
        <img
          :src="product.imgSrc"
          class="image"
        />
        <div style="padding: 14px;">
          <span>{{product.name}}</span>
          <div class="bottom clearfix">
            <el-rate
              v-model="product.value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
            <br>
            <el-badge :value="product.commentCount" class="item">
              <el-button  @click="openComment">评论</el-button>
            </el-badge>
            <el-divider direction="vertical"></el-divider>
            <el-button type="danger"  @click="openDetail">立即购买</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "productCard",
  data() {
    return {
      value: 3.7,
      productList:[
        {
          id:'0',
         name:'奴隶狗肥',
         imgSrc:require('../../assets/gf.jpg'),
         value: 1.5,
         commentCount:12,
        },
        {
          id:'1',
         name:'程序员野狗',
         imgSrc:require('../../assets/yg.png'),
         value: 4.2,
         commentCount:25,
        },
        {
          id:'2',
         name:'油屎天使',
         imgSrc:require('../../assets/ysz.jpg'),
         value: 3.5,
         commentCount:13,
        },
        {
          id:'3',
         name:'美味甜桃',
         imgSrc:require('../../assets/tz1.png'),
         value: 5,
         commentCount:'hot',
        },
      ]
    };
  },
  methods: {
    openComment(value) {
      this.$emit("openComment", value);
    },
    openDetail(id) {
      this.$emit("openDetail",id);
    }
  }
};
</script>

<style>
.sp-card{
  background: url('../../assets/bg1.jpg') ;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>