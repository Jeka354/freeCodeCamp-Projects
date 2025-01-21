<template>
    <div class="cards">
        <div class="card-item" @click="openCard(card.id)">
            <div class="card-container">
                <h4 class="card-title">{{ card.username }}</h4>
                <h5 class="card-content">Имя игрока: {{ card.name }}</h5>
                <h5 class="card-content">Город: {{ card.address.city }}</h5>
                <div class="image-container" style="height: 100%;">
                    <img v-if="imgSrc" :src="imgSrc.urls.regular" alt="pictures" style="width: 100%; height: 100%; object-fit: cover">
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    props:{
        card: { 
            type: Array,
            required: true
        },
        imgSrc: {
            type: Array,
            required: true
        }
        
    },
    methods: {
        openCard(cardId) {
            this.$router.push(`/cards/${cardId}`);
        }
    }
}
</script>

<style >
*{
    box-sizing: border-box;
}

.cards{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}

.card-container{
    height: 100%; 
    overflow: hidden;
}

.card-item {
    width: 250px; 
    height: 350px; 
    margin: 20px;
    padding: 10px;
    background-color: #efefef; 
    border-radius: 5px;
    border: 3px solid transparent;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
    transition: background-color 0.7s ease, border 0.7s ease;
}

.card-item:hover {
    background-color: #e8e8e8; 
    background: linear-gradient(45deg, #42d392, #647eff); 
    box-shadow: 4px 4px 3px rgba(0, 106, 12, 0.5);
    border: 3px solid rgb(0, 255, 0);
    cursor: pointer;
}

.card-item:hover .card-title,
.card-item:hover .card-content {
    color: #fff;
}

.card-title {
    font-size: 1.5em; 
    color: #333; 
    margin-bottom: 10px; 
}


.card-content {
    color: #666;
    line-height: 1.5; 
}

.image-container{
    margin-top: 10px;
}


.img{
    max-width: 200px;
    max-height: 100px;
}
</style>