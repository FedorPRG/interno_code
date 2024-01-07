import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Minimal Look Bedrooms',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
    currentSlider: 0,
    slider: [
      require('../assets/projectDetailsSlider1.png'),
      require('../assets/projectDetailsSlider2.png'),
      require('../assets/projectDetailsSlider3.png')],
    projectsIndex: [{
      img: require('../assets/index-item1.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      img: require('../assets/index-item2.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      img: require('../assets/index-item3.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      img: require('../assets/index-item4.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }],
    projectsProject: [{
      id: 0,
      favorite: false,
      tag: 'Bathroom',
      img: require('../assets/project1.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 1,
      favorite: false,
      tag: 'Bathroom',
      img: require('../assets/project3.png'),
      name: 'Classic Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 2,
      favorite: false,
      tag: 'Bed Room',
      img: require('../assets/project5.png'),
      name: 'Minimal Bedroom table',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 3,
      favorite: false,
      tag: 'Bed Room',
      img: require('../assets/project7.png'),
      name: 'Modern Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 4,
      favorite: false,
      tag: 'Kitchan',
      img: require('../assets/project2.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 5,
      favorite: false,
      tag: 'Kitchan',
      img: require('../assets/project4.png'),
      name: 'Modern Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 6,
      favorite: false,
      tag: 'Living Area',
      img: require('../assets/project6.png'),
      name: 'System Table',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 7,
      favorite: false,
      tag: 'Living Area',
      img: require('../assets/project8.png'),
      name: 'Modern Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 8,
      favorite: false,
      tag: 'Bathroom',
      img: require('../assets/project9.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 9,
      favorite: false,
      tag: 'Bathroom',
      img: require('../assets/project11.png'),
      name: 'Classic Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 10,
      favorite: false,
      tag: 'Bed Room',
      img: require('../assets/project13.png'),
      name: 'Minimal Bedroom table',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 11,
      favorite: false,
      tag: 'Bed Room',
      img: require('../assets/project15.png'),
      name: 'Modern Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 12,
      favorite: false,
      tag: 'Kitchan',
      img: require('../assets/project10.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 13,
      favorite: false,
      tag: 'Kitchan',
      img: require('../assets/project12.png'),
      name: 'Modern Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 14,
      favorite: false,
      tag: 'Living Area',
      img: require('../assets/project14.png'),
      name: 'System Table',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 15,
      favorite: false,
      tag: 'Living Area',
      img: require('../assets/project16.png'),
      name: 'Modern Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 16,
      favorite: false,
      tag: 'Kitchan',
      img: require('../assets/project2.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 17,
      favorite: false,
      tag: 'Kitchan',
      img: require('../assets/project4.png'),
      name: 'Modern Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 18,
      favorite: false,
      tag: 'Living Area',
      img: require('../assets/project6.png'),
      name: 'System Table',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 19,
      favorite: false,
      tag: 'Living Area',
      img: require('../assets/project8.png'),
      name: 'Modern Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 20,
      favorite: false,
      tag: 'Bathroom',
      img: require('../assets/project9.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 21,
      favorite: false,
      tag: 'Bathroom',
      img: require('../assets/project11.png'),
      name: 'Classic Minimal Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 22,
      favorite: false,
      tag: 'Bed Room',
      img: require('../assets/project13.png'),
      name: 'Minimal Bedroom table',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }, {
      id: 23,
      favorite: false,
      tag: 'Bed Room',
      img: require('../assets/project15.png'),
      name: 'Modern Bedroom',
      discription: 'Decor / Artchitecture',
      path: '/projectDetails'
    }],
    indicators: [{
      quantity: '12',
      name: 'Years Of Experiance'
    }, {
      quantity: '85',
      name: 'Success Project'
    }, {
      quantity: '15',
      name: 'Active Project'
    }, {
      quantity: '95',
      name: 'Happy CUstomers'
    }],
    articles: [{
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article1.png'),
      imgTag: require('../assets/tag1.png'),
      name: 'Let’s Get Solution For Building Construction Work',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '26 December,2022',
      path: '/blogDetails'
    }, {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article2.png'),
      imgTag: require('../assets/tag2.png'),
      name: 'Low Cost Latest Invented Interior Designing Ideas.',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '22 December,2022',
      path: '/blogDetails'
    }, {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article3.png'),
      imgTag: require('../assets/tag3.png'),
      name: 'Best For Any Office & Business Interior Solution',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '25 December,2022',
      path: '/blogDetails'
    },
    {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article4.png'),
      tag: require('../assets/tag1.png'),
      name: 'Let’s Get Solution For Building Construction Work',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '26 December,2022',
      path: '/blogDetails'
    },
    {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article5.png'),
      tag: require('../assets/tag1.png'),
      name: 'Low Cost Latest Invented Interior Designing Ideas.',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '22 December,2022',
      path: '/blogDetails'
    },
    {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article6.png'),
      tag: require('../assets/tag1.png'),
      name: 'Best For Any Office & Business Interior Solution',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '25 December,2022',
      path: '/blogDetails'
    }, {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article7.png'),
      imgTag: require('../assets/tag1.png'),
      name: 'Let’s Get Solution For Building Construction Work',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '26 December,2022',
      path: '/blogDetails'
    }, {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article8.png'),
      imgTag: require('../assets/tag2.png'),
      name: 'Low Cost Latest Invented Interior Designing Ideas.',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '22 December,2022',
      path: '/blogDetails'
    }, {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article9.png'),
      imgTag: require('../assets/tag3.png'),
      name: 'Best For Any Office & Business Interior Solution',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '25 December,2022',
      path: '/blogDetails'
    },
    {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article10.png'),
      tag: require('../assets/tag1.png'),
      name: 'Let’s Get Solution For Building Construction Work',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '26 December,2022',
      path: '/blogDetails'
    },
    {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article11.png'),
      tag: require('../assets/tag1.png'),
      name: 'Low Cost Latest Invented Interior Designing Ideas.',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '22 December,2022',
      path: '/blogDetails'
    },
    {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article12.png'),
      tag: require('../assets/tag1.png'),
      name: 'Best For Any Office & Business Interior Solution',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '25 December,2022',
      path: '/blogDetails'
    },
    {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article4.png'),
      tag: require('../assets/tag1.png'),
      name: 'Let’s Get Solution For Building Construction Work',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '26 December,2022',
      path: '/blogDetails'
    },
    {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article5.png'),
      tag: require('../assets/tag1.png'),
      name: 'Low Cost Latest Invented Interior Designing Ideas.',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '22 December,2022',
      path: '/blogDetails'
    },
    {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article6.png'),
      tag: require('../assets/tag1.png'),
      name: 'Best For Any Office & Business Interior Solution',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '25 December,2022',
      path: '/blogDetails'
    }, {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article7.png'),
      imgTag: require('../assets/tag1.png'),
      name: 'Let’s Get Solution For Building Construction Work',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '26 December,2022',
      path: '/blogDetails'
    }, {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article8.png'),
      imgTag: require('../assets/tag2.png'),
      name: 'Low Cost Latest Invented Interior Designing Ideas.',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '22 December,2022',
      path: '/blogDetails'
    }, {
      imgPost: require('../assets/blog-img.png'),
      img: require('../assets/blog-article9.png'),
      imgTag: require('../assets/tag3.png'),
      name: 'Best For Any Office & Business Interior Solution',
      discription: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.  Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
      data: '25 December,2022',
      path: '/blogDetails'
    }]
  },
  mutations: {
    NEXT_SLIDER (state, index) {
      state.currentSlider = index
    },
    FAVORITE_ON_OFF (state, id) {
      state.projectsProject.forEach((item) => {
        if (item.id === id) {
          item.favorite = !item.favorite
        }
      })
    }
  },
  getters: {
    getSlider: (state) => {
      return state.slider[state.currentSlider]
    }
  }
})
