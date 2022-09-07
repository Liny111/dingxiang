/*
请求的接口的方法
*/
import axios from "axios";
//接口地址
import base from './base'
//引入md5
import md5 from 'md5-js'


//请求方法
const api = {
    /**
     * 病毒信息获取
     */
    getCovInfo(){
        return axios.get(base.host+base.covInfo)
    },
    /**
     * 获取国内疫情
     */
    getChinaData(){
        return axios.get(base.baseUrl+base.chinaData)
    },
    // 获取世界疫情
    getworldData(){
        return axios.get(base.baseUrl+base.worldData)
    },
    /**
     * 获取城市接口
     */
    getCity(city_name){
        
        let sign = md5('appid20576city_name'+city_name+'formatjson16f836926a29f7c081d7373da1ad5155')
        let canshu = 'format=json&appid=20576&city_name='+city_name+'&sign='+sign
        return axios.get(base.baseUrl+base.city+'?'+canshu)
    },
    /**
     * 轮播数据接口
     */
    getSwiperBanner(){
        return axios.get(base.swiperBanner)
    },
    /**
     * 出行城市接口
     */
    getTravel(){
        return axios.get(base.travel)
    },
    /**
     * 城市出行政策疫情
     * &from=10191&10349
     * axios.get('url?xx=xx&xx=xx')
     * axios.get('url',{
     * params:{
     *          参数:xx,
     *          ...
     * }
     * })
     */
    getTravelQuery(params){//params={from:'',to:''}
        return axios.get(base.travelQuery,{
            params
        }
           )
    },
    getCity(){
        return axios.get(base.getcity)
    }
}

export default api