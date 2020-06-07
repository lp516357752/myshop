<template>
  <div class="wapper" ref="wapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:"Scroll",
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },

  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wapper, {
      probeType: this.probeType,//点击滚动时可以监听
      click: true,//允许监听浏览器的默认点击事件(如div),默认会禁止原生点击事件,button标签除外
      pullUpLoad: this.pullUpLoad,//到达底部上拉时发出事件pullingUp，用于上拉加载更多
    }),
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position);
      
    }),
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp');
    })
  },
  methods: {
    scrollTO(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
    },
  computed: {},
};
</script>

<style scoped>

</style>
