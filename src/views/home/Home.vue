<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-reconmends :recommends="recommends"></home-reconmends>
    <features></features>
    <tab-control class="tab-control" :titles="['流行', '精款', '优选']"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
    <ul>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
      <li>测试</li>
    </ul>
    
  </div>
</template>
<script>
import HomeSwiper from './childrenComps/HomeSwiper'//主页轮播图
import HomeReconmends from './childrenComps/HomeRecmmends'//主页推荐
import Features from './childrenComps/Features'//主页直播推荐

import NavBar from 'components/common/navbar/NavBar'//导航栏组件
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata,
        getHomeGoods,
        getHomePicSwiper} from 'network/home'//网络请求模块

export default {
  name:"Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeReconmends,
    Features,
    TabControl,
    GoodsList,
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
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods();
    this.getHomePicSwiper();
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.results = res.data;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods() {
      const page = this.goods['pop'].page+1;
      getHomeGoods(page).then(res => {
        this.goods['pop'].list.push(...res);
        this.goods['sell'].list.push(...res);
        this.goods['news'].list.push(...res);
        this.goods['news'].page++;
        this.goods['sell'].page++;
        this.goods['pop'].page++;
    })
    },
    getHomePicSwiper() {
      getHomePicSwiper().then(res => {
        this.results = res;
        this.banners = res.data;
      })
    }
     
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
</style>
