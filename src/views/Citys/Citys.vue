<template>
  <div>
    <h2>{{cityname}}</h2>
    <div id="main" style="width:9rem;height: 9rem;"></div>
  </div>
</template>

<script>
import api from '../../api/inedx'
export default {
    props:['cityname'],
    mounted(){
        //this.$install.cityMap('main',this.cityname,[])
        //获取城市接口数据-----------
        api.getCity(this.cityname)
        .then(res=>{
          console.log('城市数据',res.data)
          let arr = res.data.retdata.subList;
          let newArr = []
          arr.forEach(ele => {
            let obj = {}
            obj.name = ele.city+'市';
            //名称处理 -- 和地图数据对应起来
            //处理当前的ele.city的名称的最后一个标识： 盟 州 区 旗 -- 否则补字段'市' 
            obj.value = ele.confirm;
            newArr.push(obj)
          })
          console.log('城市处理完的数据',newArr)
          this.$install.cityMap('main',this.cityname,newArr)

        })
    }
}
</script>

<style>

</style>