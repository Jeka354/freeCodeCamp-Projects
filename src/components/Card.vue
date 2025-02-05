<template>
    <div class="cards">
        <div class="card" @click="openCard(card.id)">
            <div class="card__container">
                <h4 class="card__title">{{ card.username }}</h4>
                <h5 class="card__content">Имя игрока: {{ card.name }}</h5>
                <h5 class="card__content">Город: {{ card.address.city }}</h5>
                <div class="card__image-container">
                    <img class="card__image" v-if="imgSrc" :src="imgSrc.urls.raw" alt="pictures">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    props: {
        card: { 
            type: Object,
            required: true
        },
        imgSrc: {
            type: Object,
        }
    },
    setup(props) {
        const router = useRouter();
        const { card, imgSrc } = toRefs(props);

        const openCard = (cardId) => {
            router.push(`/cards/${cardId}`);
        };

        return {
            card,
            imgSrc,
            openCard
        };
    }
});
</script>

<style>

.card {
    width: 250px; 
    height: 350px; 
    margin: 20px;
    padding: 10px;
    cursor: pointer;
    background-color: #efefef; 
    border-radius: 5px;
    border: 3px solid transparent;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
    transition: background-color 0.7s ease, border 0.7s ease;
}

.card__container{
    height: 100%; 
    overflow: hidden;
}

.card:hover {
    background-color: #e8e8e8; 
    background: linear-gradient(45deg, #42d392, #647eff); 
    box-shadow: 4px 4px 3px rgba(0, 106, 12, 0.5);
    border: 3px solid rgb(0, 255, 0);
    
}

.card__item:hover .card__title,
.card__item:hover .card__content {
    color: #fff;
}

.card__title {
    font-size: 1.5em; 
    color: #333; 
    margin-bottom: 10px; 
}


.card__content {
    color: #666;
    line-height: 1.5; 
}

.card__image-container{
    height: 100%;
    margin-top: 10px;
}

.card__image{
    height: 100%; 
    object-fit: cover;
}


</style>