<template>
    <h3 style="text-align: center;">Список карточек</h3>
    <div class="cards" v-if="cards.length > 0">
            <Card 
            v-for="(card, index) in cards"
            :card="card" 
            :imgSrc="imgSrc[index]"
            :key="card.id"
        />
    </div>
    <h3 v-else style="color: red; text-align: center; margin-bottom: 15px;">Список карточек пуст</h3>

    <!-- вывод данных из получаемых пропсов через цикл -->
</template>


<script>
import Card from './Card.vue';

export default {
    components:{
        Card
    },
    props:{
        cards: { // описание ожидаемых входных данных (пропсов) от родителя и дальнейшее использование. принимаем массив объектов
            type: Object,
            required: true
        },
        imgSrc: {
            type: Array,
            required: true
        }
        
    },
   
}
</script>

<style>
.cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}
 .post-list{
     min-width: 100%;
     margin-top: 15px;
 }
.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>