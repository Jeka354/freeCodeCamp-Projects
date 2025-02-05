<template>
    <div class="main-page">
      <transition name="fade">
        <h1 class="main-page__title">Добро пожаловать! На курс по VUE JS 3</h1>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    
  };
  </script>
  
  <style scoped>
  .main-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Занимает всю высоту экрана */
    background-color: var(--main-green);
    color: var(--main-text-white);
    text-align: center;
  }
  
  .main-page__title {
    font-size: 32px;
    font-weight: bold;
  }
/* Анимация появления */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
  </style>