<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <Loading slot="spinner">...</Loading>
    </infinite-loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapActions} from 'Vuex'

  import InfiniteLoading from 'vue-infinite-loading'
  import SubNav from '@/components/SubNav.vue'
  import List from '@/components/List.vue'
  import Loading from '@/components/Loading.vue'

  export default{
    name: 'home-view',
    components: {
      SubNav,
      List,
      InfiniteLoading,
      Loading
    },
    data(){
      return {}
    },
    computed: {
      // Getting Vuex State from store/modules/activities
      ...mapState({
        events: state => state.activities.events
      })
    },
    methods: {
      // Using vue-infinite-loading
      onInfinite(){
          setTimeout(()=>{
              this.loadMore();
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          },1000)
      },
      // Dispatching Actions
      ...mapActions([
        'loadMore'
      ])
    }

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .sub-nav {
    overflow: hidden;
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
</style>
