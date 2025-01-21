<template >
    <div class="app"><!-- Корневой блок приложения-->
        <NavBar></NavBar><!--Навбар вынесен за элементы роутера для отображения на всех страницах-->
        <router-view></router-view> <!--Обязательный компонент для роутера-->
    </div>
</template>
<script>
import NavBar from './components/UI/NavBar.vue';
export default {
    components:{
        NavBar
    }
}

</script>

<style >
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --main-green: #00371e;
    --main-text-white: #fff;
    --main-text-green: #213547;
    --border-color-green: #42b883;
}

.app{
    min-width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.app__btns{
    display: flex;
    min-width: 30%;
    justify-content: space-between;
    margin-bottom: 15px;
}
</style>