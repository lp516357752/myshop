<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'//轮播图组件(导入index.js)


export default {
  name:"HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {//接收home中的banners数据(父传子)
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {},
};
</script>

<style scoped>

</style>
