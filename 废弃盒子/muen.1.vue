<template>
  <div>

    <div class="muen">
      <h5>菜单</h5>
      <ul>
      <router-link to='/muen/selected' tag="li" active-class='active'>季度精选</router-link>
      <router-link to='/muen/drink' tag="li" active-class='active'>精品饮料</router-link>
      <router-link to='/muen/food' tag="li" active-class='active'>精品食物</router-link>
      <router-link to='/muen/coffee' tag="li" active-class='active'>金品咖啡</router-link>
      <router-link to='/muen/goods' tag="li" active-class='active'>其他物品</router-link>
      </ul>
    </div>
    
      <Dedail></Dedail>

      <router-view></router-view>
    

  </div>
</template>

<script>
import Dedail from './detail/detail'
export default {
  components:{Dedail},
  data(){
    return{
      obj:{}
    }
  },
  methods:{},
  created(){}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../style/index.less';
.muen{
  .w(375);
  .h(80);
  .background(white);
  position: fixed;
  .top(0);
  z-index: 100;
  h3{
    width: 100%;
    .h(30);
  }
  >ul{
    width: 100%;
    font-size: @fs-m;
    display: flex;
    li{
      flex: 1;
    }
    .active{
      border-bottom: 3px solid orange;
    }
  }

}
</style>
