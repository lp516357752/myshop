<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-reconmends :recommends="recommends"></home-reconmends>

  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'//导航栏组件
import HomeSwiper from './childrenComps/HomeSwiper'
import {getHomeMultidata} from 'network/home'//网络请求模块
import HomeReconmends from './childrenComps/HomeRecmmends'

export default {
  name:"Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeReconmends
  },
  props: {},
  data() {
    return {
      results: null,
      banners: [],
      recommends: [],
    }
  },
  methods: {
    
  },
  computed: {

  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  },
};
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
