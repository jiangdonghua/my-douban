<template>
  <div class="types">
    <h2>分类浏览</h2>
    <div class="content">
      <ul class="type-list">
        <li v-for="item in items">
          <a :href="baseUrl+item.href">{{item.title}} <span></span> </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'types',
    props:{
        items:{
            type:Array
        }
    },
    data(){
      return {
        baseUrl: 'https://m.douban.com/'
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .types {
    margin-top: 1rem;

    h2 {
      height: 2.6rem;
      line-height: 2.6rem;
      padding: 0 1.6rem;
      display: inline-block;
    }
  }

  .type-list {
    margin: 1.6rem 0 0 1.6rem;
    overflow: hidden;

    li {
      float: left;
      box-sizing: border-box;
      width: 50%;
      padding-right: 1.8rem;
      height: 4.2rem;
      line-height: 4.2rem;
      font-size: 1.6rem;
      border-top: solid 0.1rem #eee;
      border-right: solid 0.1rem #eee;

      a {
        color: #42bd56;
      }
    }

    li:nth-child(2n) {
      padding-left: 1.8rem;
    }

    span {
      color: #ccc;
      float: right;
      font-weight: bold;
      display: inline-block;
      border-right: solid 0.1rem #ccc;
      border-bottom: solid 0.1rem #ccc;
      width: 0.8rem;
      height: 0.8rem;
      transform: rotate(-45deg);
      margin-top: 1rem;
    }
  }
  .type-list li:last-child, .type-list li:nth-last-child(2) {
    border-bottom: solid 1px #eee;
  }
</style>
