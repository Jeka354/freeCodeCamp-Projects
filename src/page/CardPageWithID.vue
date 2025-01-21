<template>
    <div class="card-page">
        <h1>Это страница карточки с ID = {{ $route.params.id }}</h1>
        <div class="card-details" v-if="cardData">
            <h2 class="card-title">Имя пользователя: {{ cardData.name }}</h2>
            <h3 class="card-username">Ник пользователя: {{ cardData.username }}</h3>
            <p class="card-email">Email: {{ cardData.email }}</p>
            <p class="card-phone">Телефон: {{ cardData.phone }}</p>
            <p class="card-website">Вебсайт: <a :href="'http://' + cardData.website" target="_blank">{{ cardData.website }}</a></p>
            <h4>Компания:</h4>
            <p class="card-company">Название: {{ cardData.company.name }}</p>
            <p class="card-slogan">Слоган: {{ cardData.company.catchPhrase }}</p>
            <p class="card-bs">Бизнес: {{ cardData.company.bs }}</p>
            <h4>Адрес:</h4>
            <p class="card-address">{{ cardData.address.street }}, {{ cardData.address.suite }}, {{ cardData.address.city }}, {{ cardData.address.zipcode }}</p>
            <h4>Геолокация:</h4>
            <p>Широта: {{ cardData.address.geo.lat }}, Долгота: {{ cardData.address.geo.lng }}</p>
            <div class="img-container">
                <img :src="imgSrcData?.[$route.params.id-1].urls.regular" alt="Picture-of-card">
            </div>
            
        </div>
        <div v-else>
            <p>Загрузка данных...</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardData: null, // Переменная для хранения данных карточки
            imgSrcData: null // Переменная для хранения данных API с картинками
        };
    },
    mounted() {
        this.fetchCardData();
    },
    methods: {
        async fetchCardData() {
            const cardId = this.$route.params.id;
            try {
                const cardResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${cardId}`);
                this.cardData = await cardResponse.json(); // Сохраняем данные карточки

                const imgResponse = await fetch('https://api.unsplash.com/photos/?client_id=F3Lq5bwhNJdj_SbtRdcoMWaU2uW0Qd3iqeTrp9kXQOI');
                this.imgSrcData = await imgResponse.json(); // Сохраняем данные картинки
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
    }
}
</script>

<style>
.card-page {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-details {
    background-color: #efefef;
    border-radius: 5px;
    padding: 15px;
    margin-top: 20px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
}

.card-title {
    font-size: 1.8em;
    color: #333;
    margin-bottom: 10px;
}

.card-email,
.card-phone,
.card-website,
.card-address,
.card-company,
.card-slogan,
.card-bs {
    color: #666;
    line-height: 1.5;
    margin: 5px 0;
}

.card-website a {
    color: #007bff;
    text-decoration: none;
}

.card-website a:hover {
    text-decoration: underline;
}

.img-container{
    margin-top: 25px;
    width: 100%;
}

@media (max-width: 900px) {
    .card-title {
        font-size: 1.5em; /* Уменьшаем размер заголовка */
    }

    .card-details {
        padding: 10px; /* Уменьшаем отступы */
    }

    .card-username,
    .card-email,
    .card-phone,
    .card-website,
    .card-address,
    .card-company,
    .card-slogan,
    .card-bs {
        font-size: 0.9em; 
    }

    img {
        max-width: 100%; 
        height: auto;
    }


}
</style>