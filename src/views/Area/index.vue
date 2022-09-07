<template>
  <div>
    <h2>风险地区</h2>
    <div class="content">
        <template v-if="high.length>0">
            <div class="title">高风险区{{high.length}}个</div>
            <ul>
                <li v-for="(item,index) in high" :key="index">
                    {{item}}
                </li>
            </ul>
        </template>
        <template v-if="mid.length>0">
            <div class="title">中风险区{{mid.length}}个</div>
            <ul>
                <li v-for="(item,index) in mid" :key="index">
                    {{item}}
                </li>
            </ul>
        </template>
   
    </div>
  </div>
</template>

<script>
import api from '../../api/inedx'
export default {
    data(){
        return {
            high:[],//高风险区数据
            mid:[],//中风险区数据
        }
    },
    created(){
        api.getCovInfo()
        .then(res=>{
            console.log(res.data.newslist[0]);
            let riskarea = res.data.newslist[0].riskarea;
            this.high = riskarea.high;
            this.mid = riskarea.mid
        })
    }
}
</script>

<style>

</style>