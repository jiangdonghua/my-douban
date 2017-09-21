<template>
  <div class="status-view has-header">
    <banner title="打开App,回复广播"></banner>
    <user-bar></user-bar>
    <div class="content-list">
      <card mold="quote" v-for="item in items" ></card>
      <a href="#" class="list-link">显示更多广播</a>
    </div>
    <download-app></download-app>
  </div>
</template>

<script type="text/ecmascript-6">
  import Banner from '../components/Banner.vue'
  import DownloadApp from '../components/DownloadApp'
  import UserBar from '../components/UserBar.vue'
  import Card from '../components/Card.vue'
  export default{
    name: 'status-view',
    components: {Banner, DownloadApp,UserBar,Card},
    data(){
        return{
          items:new Array(10)
        }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .list-link {
    display: block;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    color: #42bd56;
  }
</style>
