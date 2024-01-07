<template>
  <div class="index">
    <section class="banner center">
      <h1 class="banner__title">Let Your Home <br> Be Unique</h1>
      <p class="banner__text">There are many variations of the passages of lorem Ipsum fromavailable,
        majority.</p>
        <router-link  class="banner__button" to="/project"><div>
          Get Started</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"
            stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
        </svg></router-link>
    </section>
    <section class="projects center">
      <h1 class="projects__title">
        Follow Our Projects
      </h1>
      <p class="projects__text">It is a long established fact that a reader will be distracted by the of readable <br>
        content of page lookings at
        its layouts points.</p>
        <div class="projects__container">
      <projectsContentCom :projects="projectsIndex" /></div>
    </section>
    <indexIndicatorsCom />
    <section class="articles center">
    <h1 class="articles__title">Articles & News</h1>
    <p class="articles__text">It is a long established fact that a reader will be distracted by the of readable
      content <br> of a page when
      lookings at its layouts the points of using.</p>
    <articlesContentCom :articles="articles"/>
  </section>
    <footerCom />
  </div>
</template>

<script>
import footerCom from '../components/footerCom.vue'
import projectsContentCom from '@/components/projectsContentCom.vue'
import indexIndicatorsCom from '@/components/indexIndicatorsCom.vue'
import articlesContentCom from '@/components/articlesContentCom.vue'

export default {
  name: 'indexComp',
  components: {
    footerCom,
    projectsContentCom,
    indexIndicatorsCom,
    articlesContentCom
  },
  computed: {
    projectsIndex () {
      return this.$store.state.projectsIndex
    },
    articles () {
      return this.$store.state.articles.slice(0, 3)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap");
@import "../assets/style/vars";

img {
  display: block;
}

a {
  text-decoration: none;
  color: $titleColor;
}

svg:hover {
  cursor: pointer;
}
.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}
.banner {
  margin-top: 57px;
  height: 758px;
  background: url(../assets/index-banner.png) no-repeat center;

  &__title {
    padding-top: 208px;
    padding-left: 52px;
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  &__text {
    width: 433px;
    padding-top: 18px;
    padding-left: 52px;
    color: $textColor;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__button {
    width: 214px;
    display: flex;
    gap: 10px;
    margin-top: 21px;
    margin-left: 52px;
    color: #fff !important;
    padding: 26px 48px;
    border-radius: 18px;
    background: $titleColor;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    align-items: center;
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-style: normal;
    line-height: 125%;
    letter-spacing: 0.36px;
  }
}
.projects {
  margin-top: 96px;

  &__title {
    color: $titleColor;
    text-align: center;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }

  &__text {
    margin-top: 8px;
    color: $textColor;
    text-align: center;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
  &__content{
    margin-top: 93px;
    display: grid;
    grid-template-columns: repeat(2, 548px);
    column-gap: 104px;
  }
}
.articles {
  margin-top: 96px;
  &__content {
    margin-top: 52px;
    display: flex;
    justify-content: space-between;
  }
  &__title {
    color: $titleColor;
    text-align: center;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }

  &__text {
    margin-top: 12px;
    color: $textColor;
    text-align: center;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }}
</style>
