import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI' // подключение компонентов для подключения на все страници
import router from './router/router' // подключение роутера (переключение между страницами)
import directives from './directives' // подключение файлов с директивами
import store from './store' // подключение файла с состоянием

const app = createApp(App)
components.forEach(comp => {
    app.component(comp.name, comp)
})

directives.forEach(directive=>{
    app.directive(directive.name, directive)
})


app
    .use(router)
    .use(store)
    .mount('#app')
