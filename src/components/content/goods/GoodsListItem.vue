<template>
  <div class="goods_item">
    <img :src="goodsItem.image" alt="">
    <div class="goods_info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}￥</span>
      <span class="collect">{{goodsItem.collect}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodsListItem",
  components: {},
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
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
  .goods_item {
    padding-bottom: 20px;
    position: relative;

    width: 49%;
  }

  .goods_item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods_info {
    font-size: 12px;
    position: relative;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  
  .goods_info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 5px;
    margin-bottom: 3px;
  }
  
  .goods_info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods_info .collect {
    position: relative;
  }

  .goods_info .collect::before {
    content: '';
    position: absolute;
    left: -14px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
  }

</style>
