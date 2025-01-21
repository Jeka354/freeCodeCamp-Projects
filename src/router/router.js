// Шаблон роутера для передачи страниц в качестве компонентов.
import { createRouter, createWebHistory } from "vue-router";
import About from "@/page/About.vue";
import GeneratorQuote from "@/page/GeneratorQuote.vue";
import Main from "@/page/Main.vue";
import PostPageID from "@/page/PostPageID.vue";
import PostPageWithStore from "@/page/PostPageWithStore.vue";
import CardsPage from "@/page/CardsPage.vue";
import CardPageWithID from "@/page/CardPageWithID.vue";

const routes = [
    {
        path: '/', // обязательный параметр, корень сайта// 
        component: Main // Стартовая страница//
    },
    {
        path: '/cards', // обязательный ссылка страници//
        component: CardsPage // страница по адресу posts из компонента PostPage//
    },
    {
        path: '/generate',
        component: GeneratorQuote // страница с генератором цитат//
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostPageID
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/cards/:id',
        component: CardPageWithID
    }
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)

export default router;