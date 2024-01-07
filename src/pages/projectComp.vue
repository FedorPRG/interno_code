<template>
  <div class="blogPages">
    <section class="banner center">
      <div class="banner__titleBack">
        <h1 class="banner__title">Our Project</h1>
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__ul">
            <li class="breadcrumbs__li">
              <router-link class="breadcrumbs__link" to="/">Home</router-link>
            </li>
            <li class="breadcrumbs__li">
              <router-link class="breadcrumbs__link" to="/project">Project</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="content center">
      <div class="wrapper">
        <button @click='selectProject(project, $event)' class="btn" v-for="(project, index) in projectsList"
          :key="index">{{ project }}</button>
      </div>
      <projectsContentCom :projects="filterListPage"  @favoriteOnOff="favoriteOnOff"/>
      <div class="paganation">
        <router-link class="paganation__wrapper" v-for="(page, index) in totalPages" :key="index" :to="`/project/${page}`" :data-page ="`${page}`">
          <!-- Если кнопка совпадает с текущей страницей, то кнопка активна -->
          <svg v-if="currentPage == page" xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5"  stroke="#f4f0ec" fill="#f4f0ec"/>
          </svg>
          <!-- Если кнопка не совпадает с текущей страницей, то кнопка не активна -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
          </svg>
          <!-- Для отображения 0 впереди -->
          <p v-if="page < 10" class="paganation__numberPage">0{{ page }}</p>
          <p v-else class="paganation__numberPage">{{ page }}</p>
        </router-link>
        <router-link v-if="currentPage < totalPages" :to="`/project/${+currentPage + 1}`" class="paganation__wrapper">
          <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </router-link>
        <router-link v-else :to="`/project/1`" class="paganation__wrapper">
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
import projectsContentCom from '@/components/projectsContentCom.vue'
import footerCom from '../components/footerCom.vue'

export default {
  name: 'projectComp',
  components: {
    projectsContentCom,
    footerCom
  },
  data () {
    return {
      currentProjectBtn: '',
      selectedProjectBtn: '',
      projectsList: [
        'Bathroom',
        'Bed Room',
        'Kitchan',
        'Living Area'],
      perPage: 8
    }
  },
  computed: {
    projectsProject () {
      return this.$store.state.projectsProject
    },
    filterList () {
      return this.selectedProjectBtn
        ? this.projectsProject.filter((el) => el.tag.includes(this.selectedProjectBtn))
        : this.projectsProject
    },
    totalPages () {
      return Math.ceil(this.filterList.length / this.perPage)
    },
    currentPage () {
      return this.$route.params.page || 1
    },
    filterListPage () {
      const pageNumber = this.currentPage
      const startIndex = (pageNumber - 1) * this.perPage
      const endIndex = startIndex + this.perPage
      if (!this.filterList.slice(startIndex, endIndex).length) {
        return this.filterList
      }
      return this.filterList.slice(startIndex, endIndex)
    }
  },
  methods: {
    favoriteOnOff (id) {
      this.$emit('favoriteOnOff', id)
    },
    selectProject (project, event) {
      // добавляем стили кликнутой кнопке проекта
      // если уже есть кликнутая-текущая кнопка проекта,
      if (this.currentProjectBtn) {
        // делаем её не активной
        this.currentProjectBtn.target.classList.remove('btn_activ')
      }
      // делаем активной кликнутую кнопку проекта
      event.target.classList.add('btn_activ')
      // делаем кликнутую кнопку проекта текущей
      this.currentProjectBtn = event
      // добавляем выбранный проект для фильтрации
      // если выбранный проект равен текущему - второй раз нажали на туже кнопку тега
      if (this.selectedProjectBtn === project) {
        // то отменяется фильтрация и показываются все статьи
        this.selectedProjectBtn = ''
        // и делаем не активной второй раз нажатую кнопку тега
        event.target.classList.remove('btn_activ')
      } else {
        // если выбранный тег не равен текущему, то происходит фильтрация по выбранному тегу
        this.selectedProjectBtn = project
      }
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
img {display: block;}

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
  background: url(../assets/project-banner.png) no-repeat center;
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
}
.content {
  margin-top: 200px;
}
.wrapper {
  margin-top: 46px;
  display: flex;
  justify-content: space-between;
  margin-left: 160px;
  margin-right: 160px;
  border-radius: 18px;
  border: 1px solid $indicatorColor;
}
.btn {
  padding: 26px 67px;
  border-style: none;
  border-radius: 18px;
  background: none;
  font-family: "Jost", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.36px;
  cursor: pointer;

  &_activ {
    background: $indicatorColor;
    color: #fff;
  }

  &:hover {
    background: $indicatorColor;
    color: #fff;
  }
}
.projects {
  &__content{
    max-height: 3230px;
  margin-top: 61px;
  column-count: 2;
  gap: 30px;
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
</style>
