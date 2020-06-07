<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key="goods.title"
    :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name:"GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
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
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

      
    
  }

  
</style>
