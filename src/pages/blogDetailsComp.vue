<template>
  <div class="blogPages">
    <section class="banner center">
    </section>
    <section class="content center">
<div>
      <div>
            <div @click='viewDescription()' class="title blog__title"  v-for="(article,index) in filterList" :key="index">{{article.title}}
              <p class="text ">{{article.description}}</p>
            </div>
          </div>
      <div class="article">
        <h1 class="title article__title">Let’s Get Solution for Building Construction Work</h1>
        <img src="../assets/blogDetails-img1.png" alt="blogDetails-img1">
        <div class="wrapper">
          <div class="article__data">26 December,2022</div>
          <nav class="breadcrumbs">
            <ul class="breadcrumbs__ul">
              <li class="breadcrumbs__li">
                <router-link class="breadcrumbs__link" to="/*">Interior</router-link>
              </li>
              <li class="breadcrumbs__li">
                <router-link class="breadcrumbs__link" to="/">Home</router-link>
              </li>
              <li class="breadcrumbs__li">
                <router-link class="breadcrumbs__link" to="/blogDetails">Decore</router-link>
                </li>
            </ul>
          </nav>
        </div>
        <div class="text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere
          in.Contrary to
          popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly
          believable. <br><br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
          Internet
          tend to repeat predefined chunks as necessary.</div>
        <img class="article__img2" src="../assets/blogDetails-img2.png" alt="blogDetails-img2">
        <h1 class="title article__title">Design sprints are great</h1>
        <p class="text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
          to popular
          belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
        </p>
        <ol class="article__list text">
          <li class="article__listElement">Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum
            available, but the
            majority have suffered.</li>
          <li class="article__listElement">Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the
            majority have suffered.</li>
          <li class="article__listElement">Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the
            majority have suffered.</li>
        </ol>
        <img class="article__img3" src="../assets/blogDetails-img3.png" alt="">
        <p class="text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
          to popular
          belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
        </p>
      </div>
    </div>
      <div>
    <h1 class="title tags__title">Tags</h1>
            <div class="tags__wrapper">
                <button @click='selectTag(tag,$event)' class="tags__btn" v-for="(tag,index) in tagsList" :key="index">{{tag}}</button>
            </div>
  </div>
    </section>
    <footerCom />
  </div>
</template>

<script>
import footerCom from '../components/footerCom.vue'

export default {
  name: 'blogDetailsComp',
  components: {
    footerCom
  },
  data () {
    return {
      currentTagBtn: '',
      selectedTag: '',
      tagsList: [
        'Kitchen',
        'Bedroom',
        'Building',
        'Architecture',
        'Kitchen Planning',
        'Bedroom'
      ],
      articlesList: [
        {
          tag: 'Kitchen',
          title: 'Kitchen 1',
          description: 'brief description of the article'
        },
        {
          tag: 'Kitchen',
          title: 'Kitchen 2',
          description: 'brief description of the article'
        },
        {
          tag: 'Bedroom',
          title: 'Bedroom 1',
          description: 'brief description of the article'
        },
        {
          tag: 'Bedroom',
          title: 'Bedroom 2',
          description: 'brief description of the article'
        },
        {
          tag: 'Building',
          title: 'Building 1',
          description: 'brief description of the article'
        },
        {
          tag: 'Building',
          title: 'Building 2',
          description: 'brief description of the article'
        },
        {
          tag: 'Architecture',
          title: 'Architecture 1',
          description: 'brief description of the article'
        },
        {
          tag: 'Architecture',
          title: 'Architecture 2',
          description: 'brief description of the article'
        },
        {
          tag: 'Kitchen Planning',
          title: 'Kitchen Planning 1',
          description: 'brief description of the article'
        },
        {
          tag: 'Kitchen Planning',
          title: 'Kitchen Planning 2',
          description: 'brief description of the article'
        }
      ]
    }
  },
  computed: {
    filterList () {
      return this.selectedTag
        ? this.articlesList.filter((el) => el.tag.includes(this.selectedTag))
        : this.articlesList
    }
  },
  methods: {
    selectTag (tag) {
      // добавляем стили кликнутой кнопке тега
      // если уже есть кликнутая-текущая кнопка тега,
      if (this.currentTagBtn) {
        // делаем её не активной
        this.currentTagBtn.target.classList.remove('tags__btn_activ')
        // делаем активной кликнутую кнопку тега
        event.target.classList.add('tags__btn_activ')
        // делаем кликнутую кнопку тега текущей
        this.currentTagBtn = event
      } else {
        // если нет кликнутой-текущей кнопки тега
        // делаем активной кликнутую кнопку тега
        event.target.classList.add('tags__btn_activ')
        // делаем кликнутую кнопку тега текущей
        this.currentTagBtn = event
      }
      // добавляем выбранный тег для фильтрации
      // если выбранный тег равен текущему - второй раз нажали на туже кнопку тега
      if (this.selectedTag === tag) {
        // то отменяется фильтрация и показываются все статьи
        this.selectedTag = ''
        // и делаем не активной второй раз нажатую кнопку тега
        event.target.classList.remove('tags__btn_activ')
      } else {
        // если выбранный тег не равен текущему, то происходит фильтрация по выбранному тегу
        this.selectedTag = tag
      }
    },
    viewDescription () {
      const elem = event.target.children;
      [...elem][0].classList.toggle('hidden')
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
.title {
  color: $titleColor;
  font-family: "DM Serif Display", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
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
.hidden {
  display: none;
}
.banner {
  margin-top: 45px;
  height: 351px;
  background: url(../assets/blogDetails-banner.png) no-repeat center;
  padding-top: 178px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  margin-top: 200px;
  display: flex;
  gap: 52px;
}
.article {
  width: 800px;

  &__title {
    margin-bottom: 21px;
  }

  &__title2 {
    margin-bottom: 21px;
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

  &__img2 {
    margin-top: 35px;
    margin-bottom: 27px;
  }

  &__img3 {
    margin-top: 44px;
    margin-bottom: 35px;
  }

  & ol {
    margin-top: 24px;
    padding-left: 20px;
  }

  &__list {
    list-style-position: inside;
    list-style-type: none;
    /* Убираем исходные маркеры */
    counter-reset: my-counter;

    /* Задаём имя счетчика */
    &Element {
      position: relative;
      margin-bottom: 32px;
    }

    & li::before {
      position: absolute;
      left: -20px;
      top: 3px;
      content: counter(my-counter);
      /* Выводим число */
      counter-increment: my-counter;
      /* Увеличиваем значение счётчика */
      color: $indicatorColor;
      font-family: "DM Serif Display", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      /* 25px */
      letter-spacing: 0.4px;
      margin-right: 14px;
      /* Расстояние от цифры до текста */
    }
  }
}
.wrapper {
  margin-top: 46px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
}
.breadcrumbs {
  &__li:not(:last-child) ::after {
    padding: 0 5px;
  }

  &__link {
    font-size: 16px;
    letter-spacing: 0.16px;

    &:hover {
      color: $indicatorColor;
    }
  }

  &__li:last-child>a {
    color: $indicatorColor;
  }
}
.tags {
  &__title {
    font-size: 25px;
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    row-gap: 11px;
    column-gap: 10px;
  }

  &__btn {
    padding: 9px 30px;
    border-style: none;
    border-radius: 10px;
    background: $indicatorsBackColor;
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.36px;
    cursor: pointer;

    &_activ {
      background: $titleColor;
      color: #fff;
    }
  }
}
.blog {
  &__title {
    margin-top: 20px;
    font-size: 30px;
    cursor: pointer;
  }
}</style>
