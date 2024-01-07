<template>
  <section class="blog center">
    <h1 class="blog__heading">
      Latest Post
    </h1>
    <div class="blog__content">
      <img :src="lastPost.imgPost" alt="blog-img">
      <div class="blog__info">
        <router-link to="/blogDetails">
          <p class="blog__heading blog__title">{{ lastPost.name }}</p>
        </router-link>
        <p class="blog__text">{{ lastPost.discription }}</p>
        <div class="blog__wrapper">
          <div class="blog__data">26 December,2022</div>
          <router-link to="/blogDetails">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'blogLatestPostCom',
  props: ['lastPost']
}
</script>

<style lang="scss" scoped>
@import "../assets/style/vars";

.blog {
  margin-top: 200px;

  &__heading {
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
  }

  &__content {
    padding: 22px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    display: flex;
    gap: 65px;
    align-items: center;
  }

  &__info{
    height: 375px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }

  &__title {
    font-size: 25px;
    letter-spacing: 0.5px;
  }

  &__text {
    width: 469px;
    margin-top: 22px;
    color: $textColor;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__wrapper {
    margin-top: 30px;
    display: flex;
    gap: 300px;
    align-items: center;
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
}
</style>
