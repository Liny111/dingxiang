import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入初始化css
import './assets/css/base.css'
import { Tabs, Tab} from 'vant'
import install from './plugins/echarts'




// import echarts from './plugins/echarts'
const app = createApp(App)




app.config.globalProperties.$install = install

app.use(store).use(router).use(Tabs).use(Tab).mount('#app')
