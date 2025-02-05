<template>
    <div class="cards-page">
      <h1 class="cards-page__title">Страница с карточками</h1>
      <div class="cards-page__search">
        <my-input
          v-model="searchQuery"
          @input="filterCards"
          @keydown.enter="navigateToUser"
          @keydown.up.prevent="moveHighlight(-1)"
          @keydown.down.prevent="moveHighlight(1)"
          placeholder="Поиск с подсказкой для выбора"
          class="cards-page__input"
        />
        <div v-if="filteredCards.length > 0" class="cards-page__suggestions">
          <ul class="cards-page__suggestions-list">
            <li
              v-for="(card, index) in filteredCards"
              :key="card.id"
              @click="openCard(card.id)"
              @mouseover="highlightIndex = index"
              :class="{ 'cards-page__suggestion--highlighted': highlightIndex === index }"
              class="cards-page__suggestion"
            >
              {{ card.name }}
            </li>
          </ul>
        </div>
      </div>
      <Cards :cards="cards" :imgSrc="imgSrc" class="cards-page__cards" />
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import Cards from '@/components/Cards.vue';
  
  export default {
    components: {
      Cards,
    },
    setup() {
      const router = useRouter();
      const searchQuery = ref('');
      const cards = ref([]);
      const filteredCards = ref([]);
      const highlightIndex = ref(-1);
      const imgSrc = ref([]);
  
      // Загрузка данных
      const fetchData = async () => {
        try {
          const cardsResponse = await fetch('https://jsonplaceholder.typicode.com/users');
          cards.value = await cardsResponse.json();
  
          const imgResponse = await fetch(
            'https://api.unsplash.com/photos/?client_id=F3Lq5bwhNJdj_SbtRdcoMWaU2uW0Qd3iqeTrp9kXQOI'
          );
          imgSrc.value = await imgResponse.json();
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
        }
      };
  
      // Фильтрация карточек
      const filterCards = () => {
        if (searchQuery.value.length > 2) {
          filteredCards.value = cards.value.filter((card) =>
            card.name.toLowerCase().includes(searchQuery.value.toLowerCase())
          );
          highlightIndex.value = -1;
        } else {
          filteredCards.value = [];
        }
      };
  
      // Навигация по подсказкам
      const moveHighlight = (direction) => {
        if (filteredCards.value.length > 0) {
          highlightIndex.value += direction;
          if (highlightIndex.value < 0) {
            highlightIndex.value = 0;
          } else if (highlightIndex.value >= filteredCards.value.length) {
            highlightIndex.value = filteredCards.value.length - 1;
          }
        }
      };
  
      // Открытие карточки
      const openCard = (cardId) => {
        router.push(`/cards/${cardId}`);
      };
  
      // Навигация по Enter
      const navigateToUser = () => {
        if (highlightIndex.value >= 0) {
          const selectedCard = filteredCards.value[highlightIndex.value];
          openCard(selectedCard.id);
        } else if (searchQuery.value) {
          const selectedCard = cards.value.find(
            (c) => c.name.toLowerCase() === searchQuery.value.toLowerCase()
          );
          if (selectedCard) {
            openCard(selectedCard.id);
          }
        }
      };
  
      // Загрузка данных при монтировании
      onMounted(() => {
        fetchData();
      });
  
      return {
        searchQuery,
        cards,
        filteredCards,
        highlightIndex,
        imgSrc,
        filterCards,
        moveHighlight,
        openCard,
        navigateToUser,
      };
    },
  };
  </script>
  
  <style scoped>
.cards-page {
  padding: 20px;
  text-align: center;
}

.cards-page__title {
  font-size: 24px;
  color: var(--main-text-green);
  margin-bottom: 20px;
}

.cards-page__search {
  width: 100%;
  margin-bottom: 20px;
  position: relative;
}

.cards-page__input {
  width: 100%;
  margin-bottom: 15px;
}

.cards-page__suggestions {
  position: absolute;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 1000;
}

.cards-page__suggestions-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.cards-page__suggestion {
  padding: 10px;
  cursor: pointer;
}

.cards-page__suggestion--highlighted {
  background-color: #42d392;
  color: white;
}

.cards-page__cards {
  width: 100%;
}
  </style>