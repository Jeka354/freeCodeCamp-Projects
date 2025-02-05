<template>
    <div class="cards">
    <div v-if="cards.length > 0" class="cards__list">
      <Card
        v-for="(card, index) in cards"
        :card="card"
        :imgSrc="imgSrc[index]"
        :key="card.id"
        class="cards__item"
      />
    </div>
     <!-- вывод данных из получаемых пропсов через цикл -->
    <h3 v-else class="cards__empty">Список карточек пуст</h3>
  </div>
   
</template>


<script>
import { defineComponent } from 'vue';
import Card from './Card.vue';
// Подключение компонента карточки
export default defineComponent({
  components: {
    Card,
  },
//  Ожидаемые параметры от родительского компонента
  props: {
    cards: {
      type: Array,
      required: true,
    },
    imgSrc: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style>
.cards {
  width: 100%;
}

.cards__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 35px; 
}

.cards__item {
  justify-items: center;
  transition: all 0.3s ease;
}

.cards__empty {
  color: red;
  font-size: 18px;
  margin-bottom: 15px;
}

.cards__list-move,
.cards__list-enter-active,
.cards__list-leave-active {
  transition: all 0.3s ease;
}

.cards__list-enter-from,
.cards__list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

@media (max-width: 1200px) {
  .cards__list {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  }
}

@media (max-width: 900px) {
  .cards__list {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  }
}

@media (max-width: 620px) {
  .cards__list {
    grid-template-columns: repeat(auto-fit, minmax(150, 1fr)); 
  }

  .cards__item {
  justify-items: center;
  margin: 0 auto;
} 


}
</style>