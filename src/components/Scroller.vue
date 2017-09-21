<template>
  <div class="scroller">
    <div class="header">
      <h2>{{title}}</h2>
      <a href="#">更多</a>
    </div>
    <div class="content" ref="contentWrapper">

      <ul class="hasCover pic-list" v-if="type==='hasCover'" ref="picList">
        <li  v-for="item in items" class="pic-item">
          <router-link :to="'subject/'+item.id" append>
            <img v-if="item.images" :src="item.images.large" alt="">
            <span class="title">{{item.title}}</span>
            <rating v-if="item.rating" :rating="item.rating" class="a"></rating>
          </router-link>
          <div v-if="item.subject">
            <router-link :to="'item.subject/'+item.subject.id" append>
              <img v-if="item.subject.images" :src="item.subject.images.large" alt="">
              <span class="title">{{item.subject.title}}</span>
              <rating v-if="item.subject.rating" :rating="item.subject.rating" class="a"></rating>
            </router-link>
          </div>
        </li>
      </ul>
      <slot name="promItem"></slot>
      <ul class="onlyString" v-if="type==='onlyString'" ref="picList">
        <li v-for="item in items" style="border-color: #FFAC2D;">
          <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Rating from './Rating.vue'
  import BScroll from 'better-scroll'
  export default{
    name: 'scroller',
    props: ['title', 'type', 'items'],
    components: {Rating},
    data(){
      return {}
    },
    methods:{
        _initScroll(){
          if (this.items) {
            let picWidth = 11
            let margin = 1
            let AllWidth = (picWidth + margin) * this.items.length - margin;
            this.$refs.picList.style.width = AllWidth + 'rem';
            if(!this.picScroll){
              this.picScroll = new BScroll(this.$refs.contentWrapper, {
                scrollX: true,
                eventPassthrough: 'vertical'
              })
            }else{
              this.picScroll.refresh();
            }
          }
        }
    },
    mounted(){
      this._initScroll()
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .scroller {
    padding-top: 1rem;
  }

  .header {
    height: 2.6rem;
    line-height: 2.6rem;
    padding: 0 1.6rem;
    a {
      float: right;
      font-size: 1.44rem;
      &:last-child {
        color: #42bd56;
      }
    }
    h2 {
      display: inline-block;
    }
  }

  .content {
    width: 100%;
    box-sizing: content-box;
    white-space: nowrap;
    overflow: hidden;
    ul {
      padding: 0.8rem 0;
    }
  }

  .pic-list {
    font-size: 0;
    text-align: center;
    .pic-item {
      display: inline-block;
      margin-right: 1rem;
      width: 11rem;
      height: 15rem;
      font-size: 1.6rem;
      .a {
        color: #888;
      }
      .title {
        display: block;
        max-width: 100%;
        margin-top: 1rem;
        line-height: 1.6rem;
        font-size: 1.6rem;
        color: #111;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
      img {
        height: 15rem;
      }
      &:last-child {
        margin: 0;
      }
    }
  }
  .onlyString {
    /*overflow-x: auto;*/
    /*white-space: nowrap;*/

    li {
      display: inline-block;
      margin: 0 0 0.8rem 1.6rem;
      font-size: 1.6rem;
      border: solid 0.1rem;
      border-radius: 0.4rem;
      vertical-align: middle;
    }

    a {
      height: 5rem;
      line-height: 5rem;
      padding: 0 2.4rem;
      letter-spacing: 0.16rem;
      overflow: auto;
      display: block;
      text-align: center;
    }

    li:empty {
      width: 100%;
      display: block;
      height: 0.1rem;
      border: 0;
      margin: 0;
    }
  }
</style>
