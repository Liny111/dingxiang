<template>
  <div class="info">
    <div class="hot">
        <div class="title">
            <img class="title1" src="../../../assets/images/hot.png" style="width:60px" alt="">
            <a href="##">查看更多<img src="../../../assets/images/more.png" alt=""></a>
        </div>
        <ul class="list">
            <li v-for="item in news" :key="item.id">
                <span>最新</span>{{item.title}}
                <img src="../../../assets/images/right.png" alt="">
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        news:{
            type:Array,
            default:function(){
                return []
            }
        }
    }

}
</script>

<style lang="less" scoped>
.info{
    padding: 0.2rem;
    .title{
        margin-bottom: 0.2rem;
        font-size: 0.3rem;
        font-weight: bold;
        color: #666;
        a {
            float:right;
            font-size: 0.26rem;
            font-weight: normal;
            color: #4169e2;
            img {
                width: 00.26rem;
            }
        }
    }
    .title1 {
        content: "";
        border-left: 0.1rem solid rgb(9, 60, 202);

        padding-left: 0.2rem;
        padding-bottom: 0rem;
        
   }
    p{
        line-height: 0.5rem;
        color: #666;
    }
    .hot {
        padding-top: 0.2rem;
        border-bottom: 1px solid #eee;
        .icon{
            width: 1.2rem;
            vertical-align: top;
        }
        .list{
            li{
                line-height: 0.44rem;
                margin-bottom: 0.2rem;
                letter-spacing: 0.03rem;
                color: #666;
                
            }
            span{
                background: #ff5555;
                color: #fff;
                font-size: 0.26rem;
                padding: 0.02rem 0.06rem;
                border-radius: 0.06rem;
            }
            img{
                float: right;
                width: 0.24rem;
                padding-right: 0.2rem;
            }
            
        }
    }
    
}



</style>