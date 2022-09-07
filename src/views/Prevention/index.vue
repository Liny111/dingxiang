<template>
    <div class="wuzi">
        <!-- 顶部logo -->
        <img src="../../assets/images/wuzi.png" style="width:100%" alt="">
        <!-- 物资内容 -->
        <div class="wrapper">
            <van-tabs :active="active" animated>
                <van-tab v-for="item in arr" :title="item.title" :key="item.title">
                    <img style="width:100%" :src="item.img" alt="" />
                </van-tab>
            </van-tabs>
        </div>
    </div>
  
</template>

<script>
import img1 from '../../assets/images/jiujing.png'
import img2 from '../../assets/images/kouzhao.png'
import img3 from '../../assets/images/xishouye.png'
import img4 from '../../assets/images/wenduji.png'

export default {
  data() {
    return {
      active: 0,
      arr:[
          {
              img:img1,
              title:'消毒剂'
          },
          {
              img:img2,
              title:'口罩'
          },
          {
            img:img3,
            title:'洗手液'
          },
          {
            img:img4,
            title:'温度计'
          }
      ]
    };
  },
};
</script>

<style lang='less' scoped>
.wuzi {
  background: #3343ff;
}
.wrapper {
  background: #3343ff;
  padding: 0.2rem;
}
</style>