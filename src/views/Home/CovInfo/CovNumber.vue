<template>
  <div class="num">
    <div class="content">
        <div class="title">截止{{time(covData.modifyTime)}}全国数据统计</div>
        <ul class="wrap">
            <li>
                <span>较昨日{{number(covData.currentConfirmedIncr)}}</span>
                <div class="bold">{{division(covData.currentConfirmedCount)}}</div>
                <strong>现存确诊</strong>
                
            </li>
            <li>
                <span>较昨日{{number(covData.suspectedIncr)}}</span>
                <div class="bold">{{division(covData.suspectedCount)}}</div>
                <strong>境外输入</strong>
            </li>
            <li>
                <span>较昨日{{number(covData.seriousIncr)}}</span>
                <div class="bold">{{division(covData.seriousCount)}}</div>
                <strong>现存无症状</strong>
            </li>
            <li>
                <span>较昨日{{number(covData.confirmedIncr)}}</span>
                <div class="bold">{{division(covData.confirmedCount)}}</div>
                <strong>累计确诊</strong>
            </li>
            <li>
                <span>较昨日{{number(covData.deadIncr)}}</span>
                <div class="bold">{{division(covData.deadCount)}}</div>
                <strong>累计死亡</strong>
            </li>
            <li>
                <span>较昨日{{number(covData.curedIncr)}}</span>
                <div class="bold">{{division(covData.curedCount)}}</div>
                <strong>累计治愈</strong>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>


export default {
    props:['covData'],
    //定义过滤器
    methods:{
        //数字>0 补+
        number(data){
            return  data > 0 ? '+' + data : data   
        },
        // 处理时间格式----js：年月日
        time(time){   
            time = new Date().toLocaleString("chinese",{hour12:false})
            return time
        },
        division(num){
            if(num == undefined) return "";
            return num.toLocaleString()
        }

    }
    
        

}
</script>

<style lang="less" scoped>
.num{
    background: #f5f5f5;
    padding-top: 0.2rem;
    .content{
        background: #fff;
        padding: 0.3rem;
        min-height: 2rem;
        border-radius: 0.2rem 0.2rem 0 0;
        .title{
            color: #666;
            margin-bottom: 0.2rem;
        }
    }
    .wrap{
        display: flex;
        flex-wrap: wrap;
        padding-top: 0.2rem;
        border-radius: 0.1rem;
        box-shadow: 0 0 3px 2px rgba(195, 192, 192, 0.2);
        li{
            width: 33.33%;
            text-align: center;
            margin-bottom: 0.2rem;
            color: #666;
            strong{
                color: #333;
            }
        }
        .bold{
            font-weight: bold;
        }
        li:nth-child(1) .bold{
            color: red;
        }
        li:nth-child(2) .bold{
            color: green;
        }
        li:nth-child(3) .bold{
            color: orange;
        }
        li:nth-child(4) .bold{
            color: rgb(30, 0, 255);
        }
        li:nth-child(5) .bold{
            color: rgb(221, 18, 96);
        }
         li:nth-child(6) .bold{
            color: rgb(239, 191, 96);
        }
    }
}

</style>