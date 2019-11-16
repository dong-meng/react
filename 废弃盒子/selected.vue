<template>
  <div class="secle">
    <ul class="logo">
      <li v-for="(item,index) in arr" 
        :key="index"
        >
        <p><img v-lazy="item[0]" alt=""></p>
        <p>{{item[1]}}</p>
        <p>{{item[2]}}</p>
      </li>
    </ul>

    <ul class="sel">
      <li v-for=" (val,key,index) in obj" 
        :key="index"
        >
        <p> <img v-lazy="obj[key].url"  alt=""> </p>
        <span>{{obj[key].title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import num from 'static/num'
export default {
  data(){
    return{
      arr:[['https://www.starbucks.com.cn/assets/images/featured/2019autumn/banner-1-mobile.jpg',
        '遇见秋日灵感',
        '秋风渐起，落叶满地，你开始期待繁琐的日常中出现一些惊喜。于是，我们带来了万众星粉期待的南瓜丝绒拿铁，以及星级咖啡师秋日新作枫糖可芮奇诺。这个秋日，用全新的灵感，与你一起遇见别样的咖啡体验。'
        ],[
        'https://www.starbucks.com.cn/assets/images/featured/2019autumn/banner-2-mobile.jpg',
        '唤醒新一天',
        '有趣创意的DIY早餐，香酥吐司、浓郁抹酱、趣味调料的随心搭配，用每天不重样的选择唤醒繁忙的早晨，扫走初秋的倦意。'
        ],[
        'https://www.starbucks.com.cn/assets/images/featured/2019autumn/banner-3-mobile.jpg',
        '秋日下午茶，陪伴咖啡好时光',
        '初秋的下午茶新推荐，让外型萌趣的全新蛋糕，为枯燥的生活增添一份乐趣，给秋日慵懒的午后带来甜甜的幸福感。'
        ],[
        'https://www.starbucks.com.cn/assets/images/featured/2019autumn/banner-4-mobile.jpg',
        '童话与梦幻的珍藏',
        '几米绘本《月亮忘记了》联名会员星礼包，几米老师温暖而细腻的画风温暖无数人的内心，如秋季一杯咖啡添来的一份暖意。20周年纪念版人鱼系列星礼包最终款——流连辗转会员星礼包，四季人鱼与大海的故事璀璨而温暖。'
        ],[
        'https://www.starbucks.com.cn/assets/images/featured/2019autumn/banner-5-mobile.jpg',
        '咖啡星象与宇宙魔力杯',
        '小兔子带着期盼踏上宇宙，和你一起徜徉感受宇宙星空的星象幻化，一起碰撞咖啡宇宙的无限可能性，解锁咖啡星象的浪漫故事，带来更多的中秋惊喜。'
        ],[
        'https://www.starbucks.com.cn/assets/images/featured/2019autumn/banner-6-mobile.jpg',
        '告别夏季，品味秋日的醇香',
        '融合了来自于苏门答腊咖啡豆柔和的草本风味，与危地马拉安提瓜独特香料风味的秋日综合咖啡豆，让相聚在一起庆祝佳节的亲朋好友都一同沉醉在它美妙的风味中。'
        ],[
          'https://www.starbucks.com.cn/assets/images/featured/2019autumn/banner-7-mobile.jpg',
          '别样灵感，探索秋之臻选',
          '从非洲产区埃塞俄比亚启程，品尝富有薰衣草香气的比塔庄园咖啡豆；穿越大西洋来到拉丁美洲产区的哥伦比亚，在圣洛克蒙克斯咖啡豆中聆听修道院旁的咖啡故事；最后回到亚洲太平洋产区，在苏门答腊瓦哈纳庄园中捕捉浓郁的花香和草本香气。'
        ]
      ],
      obj:{},
      list:num.coffeeArr
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../style/index.less';
.secle{
.w(375);
.h(600);
 position: relative;
  .top(80);
.logo{
  font-size: @fs-m;
  width: 100%;
  >li{
    width: 100%;
    p{
      width: 100%;
      box-sizing: border-box;
      padding: 15px 25px;
      text-align: center;
      img{
        width: 100%;
      }
    }
  }
}

.sel{
  width: 100%;
  font-size: @fs-m;
  background:rgba(0, 0, 0, 0.07);
  overflow: hidden;
  >li{
    width: 40%;
    .h(175);
    background: white;
    float: left;
    box-sizing: border-box;
    margin: 18px;
    p{
      width:100%;
      box-sizing: border-box;
      padding: 20px 25px;
      img{
        width: 100%;
      }
    }
    span{
      width: 100%;
      display: inline-block;
      text-align: center;
    }
  }
}
}
</style>
