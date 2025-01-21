<template>
    <button class="btn">
        <slot></slot><!--Контейнер для передаваемого в компонент-->
    </button>
</template>


<script>
export default {
    name: 'MyButton' // имя компонента для экспорта через index.js из UI. с помощью него создается компонент в коде родителя.
}
</script>


<style scoped>
/* Стили кнопки в режиме Scoped не распространяются на другие компоненты */
.btn{ 
    font-size: 10px;
    background: linear-gradient(45deg, #42d392, #647eff) border-box;
    padding: 10px 15px;
    border-radius: 25px;
    border: 3px solid rgb(0, 255, 0);
    color: var(--main-text-white);
    font-weight: 700;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    cursor: pointer;
}
    
</style>