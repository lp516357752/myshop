<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    
    <scroll class="content" ref="homeScroll" 
    :probe-type="3"
    :pull-up-load="true" 
    @scroll="contentScroll"
    @pullingUp="loadMoreDatas"
    >
      <home-swiper :banners="banners"/>
      <home-reconmends :recommends="recommends"></home-reconmends>
      <features></features>
      <tab-control class="tab-control" 
      :titles="['流行', '精款', '优选']" @tabClick="tabClick"/>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="ifBackTopShow"/>
    
  </div>
</template>
<script>
import HomeSwiper from './childrenComps/HomeSwiper'//主页轮播图
import HomeReconmends from './childrenComps/HomeRecmmends'//主页推荐
import Features from './childrenComps/Features'//主页直播推荐

import NavBar from 'components/common/navbar/NavBar'//导航栏组件
import TabControl from 'components/content/tabControl/TabControl'//商品导航
import GoodsList from 'components/content/goods/GoodsList'//商品
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata,
        getHomeGoods,
        getHomePicSwiper} from 'network/home'//网络请求模块
import throttle from 'common/tools/throttle'

export default {
  name:"Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeReconmends,
    Features,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

  },
  props: {},
  data() {
    return {
      results: null,
      banners: [],//轮播图数据
      recommends: [],//推荐栏数据
      goods: {
        'pop': {page:0, list:[]},
        'news': {page:0, list:[]},
        'sell': {page:0, list:[]},
      },
      currentType: 'pop',
      ifBackTopShow: false,
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomePicSwiper();

    this.getHomeGoods('pop');
    this.getHomeGoods('news');
    this.getHomeGoods('sell');

  },
  mounted() {
    //监听图片加载完毕
    const refresh = throttle(this.$refs.homeScroll.refresh, 500);//返回了方法，可传入参数
    this.$bus.$on('imageLoaded', () => {
      refresh()
    })
  },

  methods: {
    /*
    事件监听方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'news';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    backClick() {
      this.$refs.homeScroll.scrollTO(0, 0, 500)
    },
    contentScroll(position) {
      this.ifBackTopShow = -position.y>500? true:false;
    },
    loadMoreDatas() {
      this.getHomeGoods(this.currentType)
    },
    /*
    网络请求方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.results = res.data;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page+1;
      getHomeGoods(page).then(res => {
        res.sort(function(){ return 0.5 - Math.random() })
        this.goods[type].list.push(...res); 
        this.goods[type].page++;

        this.$refs.homeScroll.finishPullUp()
    })
    },
    getHomePicSwiper() {
      getHomePicSwiper().then(res => {
        this.results = res;
        this.banners = res.data;
      })
    },
    
  },
  computed: {

  },
  
};
</script>

<style scoped>
  #home {
    padding-top: 44px;
    
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content {
    overflow: hidden;
    
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0 ;
  }
</style>
