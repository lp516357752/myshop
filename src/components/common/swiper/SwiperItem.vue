<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;/*不让元素自动收缩 */
  }

  .slide img {
    width: 100%;
  }
</style>
