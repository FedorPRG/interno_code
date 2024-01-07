<template>
  <div class="blogPages">
    <section class="banner ">
    </section>
    <section class="content centerProjectDetails">
      <h1 class="title">{{ title }}</h1>
      <div class="text">{{ text }}</div>
    </section>
    <div class="wrapper">
      <div hidden class="overlay"></div>
      <img @click="bigImgOff($event)" hidden class="bigImg" :src= "getSlider" alt="">
      <img @click="bigImgOn($event)" class="wrapper__img" :src= "getSlider" alt="">
      <img @click="bigImgOn($event)" class="zoom" src="../assets/Zoom-Icon.png" alt="">
      <div class="pagination">
        <div v-for="(_, index) in sliders" :key="index">
      <i v-if="currentSlider == index" @click="nextSlider(index)" class="fa-solid fa-circle"></i>
      <i v-else @click="nextSlider(index)" class="fa-regular fa-circle"></i>
    </div>
    </div>
    </div>
    <footerCom />
  </div>
</template>

<script>

import footerCom from '../components/footerCom.vue'

export default {
  name: 'projectDetailsComp',
  components: {
    footerCom
  },
  methods: {
    bigImgOn (event) {
      event.target.parentElement.closest('.wrapper').querySelector('.bigImg').hidden = 0
      event.target.parentElement.closest('.wrapper').querySelector('.overlay').hidden = 0
    },
    bigImgOff (event) {
      event.target.hidden = 1
      event.target.parentElement.closest('.wrapper').querySelector('.overlay').hidden = 1
    },
    nextSlider (index) {
      this.$emit('nextSlider', index)
    }
  },
  computed: {
    currentSlider () { return this.$store.state.currentSlider },
    sliders () { return this.$store.state.slider },
    title () { return this.$store.state.title },
    text () { return this.$store.state.text },
    getSlider () { return this.$store.getters.getSlider }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap");
@import "../assets/style/vars";

h1 {
  margin: 0;
}

p {
  margin: 0;
}

.centerProjectDetails {
  padding-left: calc(50% - 658px / 2);
  padding-right: calc(50% - 658px / 2);
}
.title {
  color: $titleColor;
  font-family: "DM Serif Display", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
  margin-bottom: 11px;
}
.text {
  color: $textColor;
  font-family: "Jost", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}
.banner {
  margin-top: 45px;
  height: 351px;
  background: url(../assets/projectDetails-banner.png) no-repeat center;
}
.content {
  margin-top: 200px;
}
.overlay {
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  z-index: 1;
}
.wrapper {
  position: relative;
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  &__img{
    width: 800px;
  }
}
.bigImg{
  position: fixed;
  top: 5vh;
  height: 90vh;
  // width: 60vw;
  z-index: 2;
}
.zoom{
  position: absolute;
  top: 220px;
  cursor: pointer;
  width: 134px;
}
.pagination {
  display: flex;
  gap: 20px;
  & i{
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
