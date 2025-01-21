<template>
    <!-- Корневой компонент -->
    <div>
        <h1 style="margin-bottom: 15px; text-align: center;">Страница с карточками</h1>
        <!-- Реализация поиска -->
        <div class="srch-inputs">
            <!-- Компонент UI кнопка -->
            <my-input
                v-model="searchQuery"
                @input="filterCards"
                @keydown.enter="navigateToUser"
                @keydown.up.prevent="moveHighlight(-1)"
                @keydown.down.prevent="moveHighlight(1)"
                placeholder="Поиск с подсказкой для выбора"
                style="width: 40%; margin-bottom: 15px;"
            />
            <!-- Выплывающие подсказки, если отфильтрованный массим больше ноля -->
            <div v-if="filteredCards.length > 0" class="suggestions">
                <ul>
                    <li 
                        v-for="(card, index) in filteredCards" 
                        :key="card.id" 
                        @click="openCard(card.id)"
                        @mouseover="highlightIndex = index"
                        :class="{ highlighted: highlightIndex === index }"
                    >
                        {{ card.name }}
                    </li>
                </ul>
            </div>
        </div>
        <!-- Компонент вывода карточек с передачей пропсов в качестве принимаемых компонентом параметров с условным рендерингом -->
        <Cards 
            :cards="cards" 
            :imgSrc="imgSrc"
        />
    </div>
</template>



<script>
import Cards from '@/components/Cards.vue';
import Card from '@/components/Card.vue';

export default {
    // регистрация компонентов из импорта
    components: {
        Cards, Card
    },
    // Модели для использования в пропсах и отслеживании компонентами 
    data(){
        return {
            searchQuery: '',
            cards: [], // Для сохранения данных карточек пользователей
            filteredCards: [], // Массив для результатов фильтра
            highlightIndex: -1, // Индекс выделенного элемента
            imgSrc: [], // для сохранения данных фото, сторонее API
        }
    },

    methods:{
        // Получение данных из API
        async fetchData() {
            try {
                const cardsResponse = await fetch('https://jsonplaceholder.typicode.com/users');
                this.cards = await cardsResponse.json();

                const imgResponse = await fetch('https://api.unsplash.com/photos/?client_id=F3Lq5bwhNJdj_SbtRdcoMWaU2uW0Qd3iqeTrp9kXQOI');
                this.imgSrc = await imgResponse.json();
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        },


        filterCards() {
            if (this.searchQuery.length > 2) {
                this.filteredCards = this.cards.filter(card => 
                    card.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
                this.highlightIndex = -1; // Сброс выделения при новом вводе
            } else {
                this.filteredCards = []; // Возврат к исходному массиву, при удалении запроса из строки
            }
        },
        // Выделение перемещения между всплывающими эллементами
        moveHighlight(direction) {
            if (this.filteredCards.length > 0) {
                this.highlightIndex += direction;
                // Ограничиваем индекс выделения
                if (this.highlightIndex < 0) {
                    this.highlightIndex = 0;
                } else if (this.highlightIndex >= this.filteredCards.length) {
                    this.highlightIndex = this.filteredCards.length - 1;
                }
            }
        },
        openCard(cardId) {
            this.$router.push(`/cards/${cardId}`); // Переход на страницу карточки
        },
        // Выделяем выбранный элемент
        navigateToUser() {
            if (this.highlightIndex >= 0) {
                const selectedCard = this.filteredCards[this.highlightIndex];
                this.openCard(selectedCard.id); // Открываем карточку по ID
            } else if (this.searchQuery) {
                const selectedCard = this.cards.find(c => c.name.toLowerCase() === this.searchQuery.toLowerCase());
                if (selectedCard) {
                    this.openCard(selectedCard.id); // Открываем карточку по ID
                }
            }
        }

       
    },

    // Хук выполняемый после монтирования компонента
    mounted(){
        this.fetchData();  
    },

    // вычисляемое свойство computed. отрисовывает элемент только при изменении модели
    computed:{

        // сортировка массива по выбраному селекту
        sortedPosts(){
            // сортировка без мутации исходного массива, с помощью сравнения строк
           return [...this.posts].sort((post1, post2) =>  post1[this.selsectSort]?.localeCompare(post2[this.selsectSort]))
        },

        // поиск по названию в отсортированном массиве 
        sortedAndSearch(){
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },  

    // наблюдаемое свойство
    watch:{
        // page(){
        //     this.fetchPosts()
        // }
    }   
}

</script>



<style>
.srch-inputs{
    display: flex;
    flex-direction: column;
}

/* TODO дополнить номера страниц, или включить пагинацию  */
.pages-count{
    display: flex;
    min-width: 60%;
    justify-content: space-between;
    flex-direction: row;
    margin: 25px 10px;
}

.pages-item{
    text-align: center;
    min-height: 40px;
    min-width: 40px;
    font-size: 15px;
    padding: 10px;
    border-radius: 50%;
    border: 3px solid rgb(0, 255, 0);
    color: black;
    font-weight: 700;
    cursor: pointer;
}

.pages-item-active{
    background: linear-gradient(45deg, #42d392, #647eff) border-box;
    color: var(--main-text-white);
}
.suggestions {
    position: absolute;
    background-color: white;
    /* border: 1px solid #ccc; */
    width: 40%;
    z-index: 1000;
}

.suggestions ul {
    position: relative;
    top: 40px;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.suggestions li {
    padding: 10px;
    cursor: pointer;
}

.suggestions li.highlighted {
    background-color: #42d392;
    color: white;
}

.observer{
    width: 100%;
    height: 30px;
}
</style>

