import { createStore } from "vuex";
import { postModule } from "./postModule";
// Шаблон типичного модуля состояния VUEX
// Регистрация модуля состояния менеджера состояния страницы постов POSTMODULE
export default createStore({
    modules: {
        post: postModule 
    }
})
