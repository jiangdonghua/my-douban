<template>
  <div class="detail-view has-header">
    <banner title="每天看点好内容"></banner>

    <template v-if="!showLoading">
      <div class="info">
        <h2>
          {{eventItem.title}}
          <span class="badge">
            {{eventItem.loc_name}}
          </span>
        </h2>
        <div class="poster">
          <img :src="eventItem.image_hlarge" alt="">
        </div>
        <div class="detail">
          <span>时间：&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.begin_time}}</li>
            <li>{{eventItem.end_time}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>地点：&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.address}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>费用：&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.fee_str}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>类型：&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.category_name}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>起始时间：&nbsp;&nbsp;</span>
          <ul>
            <li v-if="eventItem.owner">
              {{eventItem.owner.name}}
            </li>
          </ul>
        </div>
        <!--tag占位-->
        <tags v-if="eventItem.tags" :items="eventItem.tags | toArray"></tags>
        <div class="describe">
          <h2>活动详情</h2>
          <!--<div class="content" v-if="eventItem.content" v-html="eventItem.content"></div>-->
          <div class="content" v-if="eventItem.content" v-html="content"></div>
        </div>
      </div>
  <download-app></download-app>
    </template>
    <loading v-show="showLoading"></loading>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Loading from '@/components/loading.vue'
  import Banner from '@/components/Banner.vue'
  import DownloadApp from '@/components/DownloadApp.vue'
  import Tags from '@/components/Tags.vue'
  export default{
    name: 'detail-view',
    components: {
      Loading,Banner,DownloadApp,Tags
    },
    data(){
      return {
        showLoading: true
      }
    },
    computed: {
      content: function () {
        // Careful XSS
        // Remove copyright imgs
        return this.eventItem.content.replace(/<img.+?>/ig, '')
      },
      // Getting Vuex State from store/modules/activities
      ...mapState({
        eventItem: state => state.activities.eventItem
      })
    },
    filters:{
        toArray(value) {
         return value.split(',')
        }
    },
    created(){
      const id = this.$route.params.id
      console.log(id)
      console.log(this.eventItem)
      this.$store.dispatch({
        type: 'getSingleEvent',
        id: id
      }).then(res => {
        //success handle

        this.showLoading = false
      })
    }

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .info {
    margin: 1rem;

    h2 {
      margin: 2rem 0;
      font-weight: bold;
      color: #494949;
    }

    .badge {
      display: inline-block;
      padding: 0.1rem 0.5rem;
      margin-bottom: 0.3rem;
      vertical-align: middle;
      line-height: 1.8rem;
      font-size: 1.2rem;
      color: #fff;
      background-color: #FF8263;
      border-radius: 0.2rem;
    }

    .poster {
      margin: 2rem auto;
      text-align: center;

      img {
        width: 100%;
        max-width: 22rem;
        height: auto;
      }
    }
  }

  .detail {
    margin-left: 3.3rem;
    margin-bottom: 1rem;
    min-height: 1.5em;
    font-size: 1.4rem;
    clear: left;

    span {
      float: left;
      margin-left: -3.3rem;
      line-height: 150%;
      color: #666666;
    }

    ul {
      list-style-position: outside;
      margin-left: 0;
    }
  }

  .describe {
    h2 {
      color: #072;
    }

    .content {
      overflow: hidden;
      font-size: 1.4rem;
    }
  }
</style>
