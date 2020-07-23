<template>
  <div :class="$style['m-header']">
    <h1 class="text">Music</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
@import '@/common/scss/var/color.scss';

.m-header {
  position: relative;
  height: 44px;
  text-align: center;
  color: $color-theme;
  font-size: 0;
  background: $color-background;
  :global {
    .text {
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: 16px;
    }
  }
}
</style>
