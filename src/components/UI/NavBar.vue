<template>
    <div class="navbar">
        <h1 @click="$router.push('/')" style="cursor: pointer;">Vue 3</h1>
        <div class="nav__btns" :class="{ 'active': isMenuOpen }">
            <MyButton @click="$router.push('/cards')">Карточки</MyButton>
            <MyButton @click="$router.push('/generate')">Цитаты</MyButton>
            <MyButton @click="$router.push('/about')">Биография</MyButton>
            <MyButton @click="$router.push('/store')">Store</MyButton>
        </div>
        <div class="burger" @click="toggleMenu">
            <div class="line" :class="{ 'active': isMenuOpen }"></div>
            <div class="line" :class="{ 'active': isMenuOpen }"></div>
            <div class="line" :class="{ 'active': isMenuOpen }"></div>
        </div>
    </div>
    <div class="dropdown" v-if="isMenuOpen">
        <div class="dropdown-item" @click="$router.push('/cards')">Карточки</div>
        <div class="dropdown-item" @click="$router.push('/generate')">Цитаты</div>
        <div class="dropdown-item" @click="$router.push('/about')">Биография</div>
        <div class="dropdown-item" @click="$router.push('/store')">Store</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>

<style>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background: rgba(128, 128, 128, 0.73);
    box-shadow: 2px 2px 4px gray;
    padding: 25px 20px;
    border-radius: 25px;
    border: 3px solid rgb(0, 255, 0);
    color: var(--main-text-white);
    font-weight: 700;
    letter-spacing: 1.6px;
    text-transform: uppercase; 
    margin-bottom: 15px;
}

.nav__btns{
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
}

.burger {
    display: none; /* Скрываем бургер-меню по умолчанию */
    flex-direction: column;
    cursor: pointer;
}

.line {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: all 0.3s ease;
}

.dropdown {
    display: flex;
    flex-direction: column;
    align-items: stretch; /* Выровнять элементы по ширине */
    background: rgba(128, 128, 128, 0.9);
    padding: 10px 0; /* Отступы сверху и снизу */
    position: absolute; /* Позиционирование для выпадающего меню */
    top: 60px; /* Отступ от верхней границы экрана */
    width: 100%; /* Ширина на всю ширину экрана */
    z-index: 1000; /* Убедитесь, что меню поверх других элементов */
}

.dropdown-item {
    padding: 10px 20px; /* Отступы для элементов меню */
    color: white;
    text-align: center; /* Центрирование текста */
    cursor: pointer;
}

.dropdown-item:hover {
    background-color: rgba(0, 255, 0, 0.5); /* Эффект при наведении */
}

@media (max-width: 768px) {
    .burger {
        display: flex; /* Показываем бургер-меню на мобильных устройствах */
    }

    .nav__btns{
        display: none;
    }
}
</style>