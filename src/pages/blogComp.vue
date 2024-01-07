<template>
  <div class="blogPages">
    <section class="banner center">
      <div class="banner__titleBack">
        <h1 class="banner__title">Articles & News</h1>
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__ul">
            <li class="breadcrumbs__li">
              <router-link class="breadcrumbs__link" to="/">Home</router-link>
            </li>
            <li class="breadcrumbs__li">
              <router-link class="breadcrumbs__link" to="/blog">Blog</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <blogLatestPostCom :lastPost="lastPost" />
    <section class="articles center">
      <h1 class="articles__title">Articles & News</h1>
      <articlesContentCom :articles="articlesPage" />
      <div class="paganation">
        <router-link class="paganation__wrapper" v-for="(page, index) in totalPages" :key="index" :to="`/blog/${page}`" :data-page ="`${page}`">
          <!-- Если кнопка совпадает с текущей страницей, то кнопка активна -->
          <svg v-if="currentPage == page" xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5"  stroke="#f4f0ec" fill="#f4f0ec"/>
          </svg>
          <!-- Если кнопка не совпадает с текущей страницей, то кнопка не активна -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
          </svg>
          <!-- Для отображения 0 в переди -->
          <p v-if="page < 10" class="paganation__numberPage">0{{ page }}</p>
          <p v-else class="paganation__numberPage">{{ page }}</p>
        </router-link>
        <router-link v-if="currentPage < totalPages" :to="`/blog/${+currentPage + 1}`" class="paganation__wrapper">
          <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </router-link>
        <router-link v-else :to="`/blog/1`" class="paganation__wrapper">
          <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </router-link>
      </div>
    </section>
    <footerCom />
  </div>
</template>

<script>
import footerCom from '../components/footerCom.vue'
import articlesContentCom from '../components/articlesContentCom.vue'
import blogLatestPostCom from '@/components/blogLatestPostCom.vue'

export default {
  name: 'blogComp',
  data () {
    return {
      perPage: 6
    }
  },
  components: {
    footerCom,
    articlesContentCom,
    blogLatestPostCom
  },
  computed: {
    articles () {
      return this.$store.state.articles
    },
    lastPost () {
      return this.$store.state.articles.at(-1)
    },
    totalPages () {
      return Math.ceil(this.articles.length / this.perPage)
    },
    currentPage () {
      return this.$route.params.page || 1
    },
    articlesPage () {
      const pageNumber = this.currentPage
      const startIndex = (pageNumber - 1) * this.perPage
      const endIndex = startIndex + this.perPage
      return this.articles.slice(startIndex, endIndex)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap");
@import "../assets/style/vars";
@import "../assets/style/breadcrumbs";

h1 {
  margin: 0;
}

p {
  margin: 0;
}
.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}
.banner {
  margin-top: 45px;
  height: 356px;
  background: url(../assets/blog-banner.png) no-repeat center;
  padding-top: 178px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__titleBack {
    width: 503px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
    padding: 41px 78px 42px;
  }

  &__title {
    margin: 0;
    text-align: center;
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
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
    width: 124px;
    display: flex;
    gap: 10px;
    margin-top: 21px;
    margin-left: 52px;
    color: #fff;
    padding: 26px 48px;
    border-radius: 18px;
    background: #292f36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    align-items: center;
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-style: normal;
    line-height: 125%;
    letter-spacing: 0.36px;
  }
}
.articles {
  margin-top: 150px;

  &__title {
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }

  &__content {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 381px);
    row-gap: 30px;
    column-gap: 28px;
  }
}
.article {
  padding: 21px;
  width: 382px;
  height: 521px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  position: relative;
  transition: all 0.3s;

  &__tag {
    position: absolute;
    top: 249px;
    left: 41px;
  }

  &__name {
    width: 290px;
    margin-top: 11px;
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
  }

  &__data {
    color: $textColor;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
  }

  &__wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    background-color: $indicatorsBackColor;
  }

  &:hover circle {
    cursor: pointer;
    transition: fill 0.3s;
    fill: #fff;
  }
}
.paganation {
  margin-top: 51px;
  display: flex;
  gap: 20px;
  justify-content: center;

  &__wrapper {
    position: relative;

    &:hover circle {
      cursor: pointer;
      transition: all 0.3s;
      fill: $indicatorsBackColor;
      stroke: $indicatorsBackColor;
    }
  }

  &__numberPage {
    text-align: center;
    width: 18px;
    color: $titleColor;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
    position: absolute;
    top: 14px;
    left: 17px;

    &:hover {
      cursor: pointer;
    }
  }
}
.footer {
  margin-top: 200px;
  margin-bottom: 116px;
}
</style>
