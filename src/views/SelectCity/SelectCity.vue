<template>
  <div calss="selectcity">
    <h2>城市选择</h2>
    <van-index-bar :index-list="indexList">
        <!-- index-list	索引字符列表	string[] | number[]	A-Z -->
        <div v-for="(item,name) in citylist" :key='name'>
            <van-index-anchor :index="name"  />
            <van-cell :title="ele.name" v-for="ele in item" :key="ele.id" @click="tiao" />
            <!-- <van-cell title="文本" />
            <van-cell title="文本" /> -->
        </div>
    </van-index-bar>
  </div>
</template>

<script>
import api from '../../api/inedx'
export default {
    data(){
        return {
            citylist:{},//城市列表
            indexList:[],//自定义索引
        }
    },
    methods:{
        //跳转页面
        tiao(event){
            console.log(event.target.innerText)
        }
    },
    created(){
        api.getCity()
        .then(res=>{
            console.log('--城市列表--',res.data.result.citylist)
            this.citylist = res.data.result.citylist
            //Object.keys(obj) 获取所有的键名
            this.indexList = Object.keys(res.data.result.citylist)
        }) 
    }
}
</script>

<style lang="less" scoped>

.selectcity{
    background: #f5f5f5;
    .title{
        padding: 0.2rem;
    }
}
</style>