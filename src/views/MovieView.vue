<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="即将上映" type="hasCover" :items="soonMovies"></scroller>
    <scroller title="Top250" type="hasCover" :items="topMovies"></scroller>
    <!--<scroller title="口碑榜" type="hasCover" :items="weeklyMovies"></scroller>-->
    <scroller title="北美票房榜" type="hasCover" :items="northMovies"></scroller>
    <!--<scroller title="新片榜" type="hasCover" :items="newMovies"></scroller>-->
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
    <types :items="movieTypes"></types>
    <down-load></down-load>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'

  import Scroller from '@/components/Scroller.vue'
  import Types from '@/components/Types.vue'
  import DownLoad from '@/components/DownloadApp.vue'
  export default{
    name: 'movie-view',
    components: {Scroller, Types, DownLoad},
    data(){
      return {
        movieTypes: [
          {
            title: '经典',
            href: 'movie/classic'
          },
          {
            title: '冷门佳片',
            href: 'movie/underrated'
          },
          {
            title: '豆瓣高分',
            href: 'movie/doubantop'
          },
          {
            title: '动作',
            href: 'movie/action'
          },
          {
            title: '喜剧',
            href: 'movie/comedy'
          },
          {
            title: '爱情',
            href: 'movie/love'
          },
          {
            title: '悬疑',
            href: 'movie/mystery'
          },
          {
            title: '恐怖',
            href: 'movie/horror'
          },
          {
            title: '科幻',
            href: 'movie/scifi'
          },
          {
            title: '治愈',
            href: 'movie/sweet'
          },
          {
            title: '文艺',
            href: 'movie/artfilm'
          },
          {
            title: '成长',
            href: 'movie/youth'
          },
          {
            title: '动画',
            href: 'movie/animation'
          },
          {
            title: '华语',
            href: 'movie/chinese'
          },
          {
            title: '欧美',
            href: 'movie/western'
          },
          {
            title: '韩国',
            href: 'movie/korean'
          },
          {
            title: '日本',
            href: 'movie/japanese'
          }
        ]
      }
    },
    computed: {
      // Getting Vuex State from store/modules/movie
      ...mapState({
        hotMovies: state => state.movie.hotMovies,
        soonMovies: state => state.movie.soonMovies,
        topMovies: state => state.movie.topMovies,
//        weeklyMovies: state => state.movie.weeklyMovies,
        northMovies: state => state.movie.northMovies,
//        newMovies: state => state.movie.newMovies,
        movieTags: state => state.movie.movieTags
      })
    },
    methods:{
      // Dispatching getMovie
      getMovie:function () {
        this.$store.dispatch('getMovie')
      }
    },
    created(){
    // Getting movies data on created
      this.getMovie()
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
