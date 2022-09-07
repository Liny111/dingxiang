<template>
    <div>
        <div class="title">疫情期间出行防疫政策</div>
        <!-- v-model	当前输入的值	
            label	输入框左侧文本
            is-link	是否展示右侧箭头并开启点击反馈
            readonly	是否为只读状态，只读状态下无法输入内容
         -->
        <van-field
        v-model="goCity"
        is-link
        readonly
        label="出发城市"
        placeholder="请选择所在地区"
        @click="show = true"
        />
        <van-popup :show="show" round position="bottom">
            <!-- title	顶部标题
            options	可选项数据源
            active-color	选中状态的高亮颜色
            事件：
            finish	全部选项选择完成后触发
            close	点击关闭图标时触发

        -->
        <van-cascader
            v-model="cascaderValue"
            title="请选择出发城市"
            :options="options.value"
            @close="show = false"
            @finish="onFinish"
        />
        </van-popup>

        <van-field
        v-model="toCity"
        is-link
        readonly
        label="到达城市"
        placeholder2="请选择所在地区"
        @click="show2 = true"
        />
        <van-popup :show="show2" round position="bottom">
            <!-- title	顶部标题
            options	可选项数据源
            active-color	选中状态的高亮颜色
            事件：
            finish	全部选项选择完成后触发
            close	点击关闭图标时触发

        -->
        <van-cascader
            v-model="cascaderValue2"
            title="请选择到达城市"
            :options="options.value"
            @close="show2 = false"
            @finish="toFinish"
        />
        </van-popup>

        <!-- 查询按钮 -->
        <div class="search">
            <van-button type="primary" size="large" @click="search()">查询疫情防疫</van-button>
        </div>

        <!-- 政策查询结果 -->
    </div>
</template>

<script>
import { ref , onMounted} from 'vue';
import api from '../../api/inedx'

export default {
  setup() {
    const show = ref(false);
    const show2 = ref(false);
    const goCity = ref('');//输入的值
    const toCity = ref('');//输入的值
    let from = ref('')
    let to = ref('')
    const cascaderValue = ref('');
    const cascaderValue2 = ref('');
    // 选项列表，children 代表子选项，支持多级嵌套
    let options = [
    //   {
    //     text: '浙江省',
    //     value: '330000',
    //     children: [{ text: '杭州市', value: '330100' }],
    //   },
    //   {
    //     text: '江苏省',
    //     value: '320000',
    //     children: [{ text: '南京市', value: '320100' }],
    //   },
    ];
    // 全部选项选择完毕后，会触发 finish 事件
    const onFinish = ({ value,selectedOptions,tabIndex }) => {
        from.value = value
        show.value = false;
        goCity.value = selectedOptions.map((option) => option.text).join('/');
    };
    const toFinish = ({ value,selectedOptions,tabIndex }) => {
        to.value = value
        show2.value = false;
        toCity.value = selectedOptions.map((option) => option.text).join('/');
    };
    const search =() => {
        console.log('111',from.value,to.value)
        
        api.getTravelQuery({
            from:from.value,
            to:to.value
        })
        .then(res=>{
            console.log('---',res.data)
        })
        console.log('1111',)
    }
    onMounted(()=>{
        api.getTravel()
        .then(res=>{
            console.log(res.data.result)
            let result = res.data.result
            //处理数据结构：[{text:'',value:'',children:[{}]},{}]
            let arr= []
            result.forEach(item => {
                let obj = {}
                obj.text = item.province;//省份名称
                obj.value = item.province_id//省份的标识id
                obj.children=[]//二级域名
                item.citys.forEach(ele=>{
                    let child = {}
                    child.text = ele.city;
                    child.value = ele.city_id;
                    //追加给obj.children=[]
                    obj.children.push(child)
                })
                arr.push(obj)
            })
            //打印处理后的数据
            options.value = arr
        })
    })

    return {
      show,
      show2,
      from,
      to,
      options,
      onFinish,
      toFinish,
      goCity,
      toCity,
      cascaderValue,
      cascaderValue2,
      search,
    };
  },
};
</script>

<style lange="less" scoped>
.title{
    padding:0.2rem
}
.search{
    margin:0.2rem
}
</style>