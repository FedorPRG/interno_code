<template>
  <header class="header center">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="Logo">
      </router-link>
      <router-link to="/">Interno
      </router-link>
    </div>
    <nav class="header__right">
      <router-link to="/">Home</router-link>
      <router-link to="/project">Project</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerCom'
}
</script>

<style scoped lang="scss">
@import "../assets/style/vars";

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "DM Serif Display", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;

  & img {
    vertical-align: baseline;
    width: 34px;
  }
}
.header {
  padding-top: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__right {
    display: flex;
    justify-content: space-between;
    width: 243px;
    font-family: "Jost", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
}
</style>
