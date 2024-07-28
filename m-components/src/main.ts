import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'
import './style.css'

const app = createApp(App)

// 全局注册图标 牺牲一点性能
// el-icon-xxx
for (let i in Icons) {
    // 注册全部组件
    app.component(`el-icon-${toLine(i)}`, (Icons as any) [i])
}

app.use(router)
app.use(ElementPlus)
app.mount('#app')
