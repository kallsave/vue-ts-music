<template>
  <div :class="$style['home']">
    <m-header></m-header>
    <recommend></recommend>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import MHeader from './components/m-header.vue'
import Recommend from './components/recommend.vue'

@Component({
  components: {
    MHeader,
    Recommend
  }
})
export default class Home extends Vue {
  mounted() {
    console.log('mounted')
  }
}
</script>

<style lang="scss" module>
.home {
}
</style>
