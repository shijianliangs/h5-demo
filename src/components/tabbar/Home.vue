<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
        <img :src="item.img" alt="" style="height: 100%;width: 100%">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/menu-1.png" alt="">
        <div class="mui-media-body">新闻资讯</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/menu-2.png" alt="">
        <div class="mui-media-body">图片分享</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/menu-3.png" alt="">
        <div class="mui-media-body">商品购买</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/menu-4.png" alt="">
        <div class="mui-media-body">留言反馈</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/menu-5.png" alt="">
        <div class="mui-media-body">视频专区</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/menu-6.png" alt="">
        <div class="mui-media-body">联系我们</div>
      </a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bannerList: [
        {img: 'https://pic1.zhimg.com/v2-2e997da7722453fdac330dc7529abcae_r.jpg?source=172ae18b', url: '/#member'},
        {
          img: 'https://blog.shopline.tw/wp-content/uploads/2019/08/banner-6-skills-enhance-click-top-banner-n.png',
          url: '/#shopcar'
        },
        {img: 'https://images.shejidaren.com/wp-content/uploads/2017/06/banner-she-ji-hao-huai.jpg', url: '/#search'}
      ]
    }
  },
  created() {
  }
}
</script>

<style scoped>
.mint-swipe {
  height: 200px;
}

.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: none;
}

.mui-grid-view.mui-grid-9 img {
  width: 40px;
  height: 40px;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
</style>