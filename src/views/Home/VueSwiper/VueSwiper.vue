<template>
<div>
  <swiper
  ref="mySwiper"
    :autoplay="swiper_option.autoplay"
    :loop="swiper_option.loop"
    :speed="swiper_option.speed"
    :slides-per-view="1"
    :space-between="50"
  >
    <swiper-slide v-for="item in banner" 
    :key="item.title">
    <img :src="item.image" alt="" style="width:100%">
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper-slide>
  </swiper>
  <ul class="list" >
    <li v-for="(item,index) in banner" :key="item.title" 
    :class="{active:index==num}"
    @click="changeSwiper(index)"
    >
    {{item.title}}
    </li>
  </ul>
</div>
</template>

<script>
import api from '../../../api/inedx'
import {ref,reactive,onMounted, watch} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore,{Autoplay} from 'swiper'
import 'swiper/css';
SwiperCore.use([Autoplay])
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      
        let mySwiper= ref(null)
        let num = ref(0)
        let banner = ref([])
        const arr = ref([1,2,3,4,5])
        const swiper_option = reactive({
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
            stopOnLastSlide:false
        },
        //loop:true,
        speed:1000,
        on:{
          //回调函数，swiper从一个slide过渡到另一个slide结束时执行
          
          slideChangeTransitionEnd:function(){ 
            console.log('轮播') //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          } 
        }

      })
      
      function changeSwiper(index){
        num.value = index
        mySwiper.value.$el.swiper.slideTo(index,1000,false)
        
      }
      watch(banner,(newValue,oldValue)=>{
        console.log('sum',newValue,oldValue)
      })
      
    
        onMounted(()=>{
          api.getSwiperBanner().then(res=>{
            console.log('轮播图',res.data)
            banner.value = res.data.result
            console.log('轮播图1',banner)
          })
          //swiper_option.on.slideChangeTransitionEnd()
            // console.log(mySwiper.value.$el.swiper.slideTo)
            //mySwiper.value.$el.swiper.slideTo(3,1000,false)
        })
      return {
        arr,
        num,
        swiper_option,
        mySwiper,
        changeSwiper,
        banner
        

      };
    },
}
</script>

<style lang="less" scoped>
.list{
    display: flex;
    li{
        flex: 1;
        padding: 0.1rem;
        font-size: 0.24rem;
        line-height: 0.32rem;
        margin: 0.1rem;
        background: #eee;
        color: #666;
        text-align: center;
        display: flex;
        align-items: center;
    }
    .active{
        background: blue;
    }
    
}
</style>