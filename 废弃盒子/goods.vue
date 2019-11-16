<template>
  <div class="drink">
    <ul>
      <li v-for="(item,index) in list" 
        :key="index"
        @touchstart='jump(item,list)'
        >
        <p class="img-box"> <img v-lazy="item.url" alt=""> </p>
        <p>{{item.title}}</p>
      </li>
    </ul>
    

  </div>
</template>

<script>
import num from 'static/num'
export default {
  data(){
    return{
      list:num.merchArr
    }
  },
    methods:{
    jump(item,list){
        this.$store.state.Detail.item=item
        this.$store.state.Detail.list=list
        this.$store.state.Detail.flag= true
        // this.$router.push(item.preview)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../style/index.less';
.drink{
  font-size: @fs-m;
  .w(375);
  .h(550);
  position: relative;
  .top(80);
  >ul{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    .background(rgba(0,0,0,0.08));
    >li{
      .w(150);
      .margin(18,18);
      float: left;
      p{
        width: 100%;
        text-align: center;
        img{
          width: 100%;
        }
      }
      .img-box{
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
}

</style>
