<template>
  <div id="app">
    <headerCom />
    <router-view @nextSlider="nextSlider" @favoriteOnOff="favoriteOnOff"/>
  </div>
</template>

<script>
import headerCom from './components/headerCom.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    headerCom
  },
  methods: {
    nextSlider (index) {
      this.NEXT_SLIDER(index)
    },
    favoriteOnOff (id) {
      this.FAVORITE_ON_OFF(id)
    },
    ...mapMutations(['NEXT_SLIDER', 'FAVORITE_ON_OFF'])
  },
  computed: {
    ...mapState(['title', 'text', 'currentSlider', 'slider', 'projects', 'indicators']),
    ...mapGetters(['getSlider'])
  }
}
</script>

<style lang="scss">
@import "./assets/style/vars";
img {
  vertical-align: bottom
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  a {
    text-decoration: none;
    color: $titleColor;
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
