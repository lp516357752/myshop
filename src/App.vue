<template>
  <div id="app">
    <router-view></router-view>
    <my-tab-bar/>
  </div>
</template>

<script>
import myTabBar from 'components/content/myTabbar/MyTabBar'

export default {
  name: 'App',
  components: {
    myTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";


</style>
