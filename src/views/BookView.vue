<template>
  <div class="book-view has-header" ref="scrollViewWrapper">
    <scroller title="最受欢迎图书 | 虚构类" type="hasCover" :items="novel"></scroller>
    <scroller title="最受欢迎图书 | 非虚构类" type="hasCover" :items="reality"></scroller>
    <scroller title="豆瓣纸书" type="hasCover" :items="travel">
      <div class="promItem" slot="promItem">
        <img src="../assets/book_zw.jpg" alt="" class="corver">
        <div class="content1">
          <span class="price">¥ 68</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </scroller>
    <scroller title="发现好书" type="onlyString" :items="bookTags"></scroller>
    <types :items="bookTypes"></types>
    <down-load></down-load>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Scroller from '@/components/Scroller.vue'
  import DownLoad from '@/components/DownloadApp.vue'
  import Types from '@/components/Types.vue'
  export default{
    name: 'book-view',
    components: {Scroller,DownLoad,Types},
    data(){
      return {
        bookTypes: [
          {
            title: '小说',
            href: 'book/novel'
          },
          {
            title: '爱情',
            href: 'book/love'
          },
          {
            title: '历史',
            href: 'book/history'
          },
          {
            title: '外国文学',
            href: 'book/foreign'
          },
          {
            title: '青春',
            href: 'book/youth'
          },
          {
            title: '励志',
            href: 'book/motivation'
          },
          {
            title: '随笔',
            href: 'book/essay'
          },
          {
            title: '传记',
            href: 'book/bio'
          },
          {
            title: '推理',
            href: 'book/detective'
          },
          {
            title: '旅行',
            href: 'book/travel'
          },
          {
            title: '奇幻',
            href: 'book/fantasy'
          },
          {
            title: '经营',
            href: 'book/business'
          }
        ]
      }
    },
    computed: {
      // Getting Vuex State from store/modules/book
      ...mapState({
        novel: state => state.book.novel,
        reality: state => state.book.reality,
        travel: state => state.book.travel,
        bookTags: state => state.book.bookTags


      })
    },
    methods: {
      // Dispatching getBook
      getBook: function () {
        this.$store.dispatch('getBook')
      }
    },
    created: function () {
      // Getting books data on created
      this.getBook();
    },

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .promItem {
    overflow: hidden;
    margin: 1.6rem 1.8rem 0.8rem 1.6rem;
  }

  .corver {
    float: left;
    width: 10rem;
    margin-right: 1.5rem;
  }

  .content1 {
    margin-right: 1rem;
  }

  .name {
    font-size: 2rem;
    color: #494949;
    margin: 1rem;
    max-width: 100%;
    line-height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .price {
    float: right;
    color: #E76648;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  .info {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.5;
    color: #9B9B9B;
  }
</style>
