// 公共的请求接口

const base = {
    host:'http://api.tianapi.com', //天行数据 --疫情病毒
    baseUrl:'https://yupn.api.storeapi.net',//挖数据---国内疫情
    covInfo:'/ncov/index?key=b08be94fe645e11a4d526343b9919f07', //疫情病毒信息
    chinaData:'/api/94/219?format=json&appid=20576&sign=c33357ac3f3967705f2116c4b691a967',//国内疫情接口
    worldData:'/api/94/220?format=json&appid=20576&sign=c33357ac3f3967705f2116c4b691a967',
    city:'/api/94/221',//城市接口
    //format=json&appid=20576&city_name=城市名称&sign=md5加密字符串
    swiperBanner:'http://iwenwiki.com/wapicovid19/ncovimg.php',//轮播疫情图
    //travel:'http://apis.juhe.cn/springTravel/citys?key=6abf107dc48af5c2745ae63e8c125342'
    travel:'/api/springTravel/citys?key=e74f9829fe00e37c63fe7d2900505ee9',
    travelQuery:'/api/springTravel/query?key=e74f9829fe00e37c63fe7d2900505ee9',//城市疫情&from=10191&10349
    //360接口地址：https://bang.360.cn/aj/getcitycode
    getcity:'/foo/aj/getcitycode',
}
export default base;