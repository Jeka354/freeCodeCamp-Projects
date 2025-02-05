<template>
    <div class="card-page">
      <div v-if="cardData" class="card-page__details">
        <h2 class="card-page__title">Имя пользователя: {{ cardData.name }}</h2>
        <h3 class="card-page__username">Ник пользователя: {{ cardData.username }}</h3>
        <p class="card-page__email">Email: {{ cardData.email }}</p>
        <p class="card-page__phone">Телефон: {{ cardData.phone }}</p>
        <p class="card-page__website">
          Вебсайт: <a :href="'http://' + cardData.website" target="_blank">{{ cardData.website }}</a>
        </p>
        <h4 class="card-page__subtitle">Компания:</h4>
        <p class="card-page__company">Название: {{ cardData.company.name }}</p>
        <p class="card-page__slogan">Слоган: {{ cardData.company.catchPhrase }}</p>
        <p class="card-page__bs">Бизнес: {{ cardData.company.bs }}</p>
        <h4 class="card-page__subtitle">Адрес:</h4>
        <p class="card-page__address">
          {{ cardData.address.street }}, {{ cardData.address.suite }}, {{ cardData.address.city }}, {{ cardData.address.zipcode }}
        </p>
        <h4 class="card-page__subtitle">Геолокация:</h4>
        <p class="card-page__geo">
          Широта: {{ cardData.address.geo.lat }}, Долгота: {{ cardData.address.geo.lng }}
        </p>
        <div class="card-page__image">
          <img :src="imgSrcData?.[$route.params.id - 1]?.urls?.regular" alt="Picture-of-card" />
        </div>
      </div>
      <div v-else class="card-page__loading">
        <p>Загрузка данных...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const cardData = ref(null);
      const imgSrcData = ref(null);
  
      // Загрузка данных карточки
      const fetchCardData = async () => {
        const cardId = route.params.id;
        try {
          const cardResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${cardId}`);
          cardData.value = await cardResponse.json();
  
          const imgResponse = await fetch(
            'https://api.unsplash.com/photos/?client_id=F3Lq5bwhNJdj_SbtRdcoMWaU2uW0Qd3iqeTrp9kXQOI'
          );
          imgSrcData.value = await imgResponse.json();
        } catch (error) {
          console.error('Ошибка:', error);
        }
      };
  
      // Загрузка данных после монтирования компонента
      onMounted(() => {
        fetchCardData();
      });
  
      return {
        cardData,
        imgSrcData,
      };
    },
  };
  </script>
  
  <style scoped>
  .card-page {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .card-page__details {
    background-color: #efefef;
    border-radius: 5px;
    padding: 15px;
    margin-top: 20px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  }
  
  .card-page__title {
    font-size: 1.8em;
    color: #333;
    margin-bottom: 10px;
  }
  
  .card-page__username,
  .card-page__email,
  .card-page__phone,
  .card-page__website,
  .card-page__address,
  .card-page__company,
  .card-page__slogan,
  .card-page__bs,
  .card-page__geo {
    color: #666;
    line-height: 1.5;
    margin: 5px 0;
  }
  
  .card-page__website a {
    color: #007bff;
    text-decoration: none;
  }
  
  .card-page__website a:hover {
    text-decoration: underline;
  }
  
  .card-page__subtitle {
    font-size: 1.2em;
    color: #333;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  
  .card-page__image {
    margin-top: 25px;
    width: 100%;
  }
  
  .card-page__image img {
    width: 100%;
    border-radius: 5px;
  }
  
  .card-page__loading {
    font-size: 18px;
    color: var(--main-text-green);
    text-align: center;
  }
  
  @media (max-width: 900px) {
    .card-page__title {
      font-size: 1.5em;
    }
  
    .card-page__details {
      padding: 10px;
    }
  
    .card-page__username,
    .card-page__email,
    .card-page__phone,
    .card-page__website,
    .card-page__address,
    .card-page__company,
    .card-page__slogan,
    .card-page__bs,
    .card-page__geo {
      font-size: 0.9em;
    }
  
    .card-page__image img {
      max-width: 100%;
      height: auto;
    }
  }
  </style>