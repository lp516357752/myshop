<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"HomeRecmmends",
  components: {},
  props: {
    recommends: {
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
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;

  padding: 10px 0 20px;
  border-bottom: 8px solid #eeeeee;
}

.recommend-item {
  flex: 1;
}

.recommend img {
  width: 80%;
  height: 75%;
  margin-bottom: 7px;
}
</style>
