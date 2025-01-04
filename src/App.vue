<!-- // Онднофайловый компонент -->

<template>
    <div class="app">
        <form @submit.prevent>
            <h4>Создание поста</h4>
            <input 
                v-bind:value="title" 
                class="input" 
                type="text" 
                placeholder="введите название поста"
                @input="title = $event.target.value"
                >
            <input 
                v-bind:value="body" 
                class="input" 
                type="text" 
                placeholder="введите описание поста"
                @input="body = $event.target.value"
                >
            <button class="btn" @click="createPost">создать пост</button>
        </form>
        <div class="post" v-for="post in posts">
            <div><strong>Название: </strong>{{ post.title }}</div>
            <div><strong>Описание: </strong>{{ post.body }}</div>
        </div>
    </div>

</template>



<script>
export default {
    data() {
        return {
           posts: [
            {id: 1, title: 'JavaScript 1', body: 'Описание поста 1'},
            {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
            {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
           ],
           title:'',
           body: '',
        }
    },

    methods: {
        createPost(){
            const newPost = {
                id: new Date(),
                title: this.title,
                body: this.body
            };
            this.posts.push(newPost);
            this.title = '';
            this.body = '';
        },
        
}
}



</script>



<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --main-green: #00371e;
    --main-text-green: #213547;
    --border-color-green: #42b883;
}

.app{
    padding: 20px;
}

.post{
    margin-top: 15px;
    border: 3px solid var(--border-color-green);
    padding: 10px 15px;
    border-radius: 25px;
}

.input{
    margin-top: 15px;
    padding: 10px 15px;
    width: 100%;
    border: 2px solid var(--border-color-green);
    border-radius: 25px;
}

form{
    display: flex;
    flex-direction: column;
    
}

.btn{
    align-self: flex-end;
    margin-top: 15px;
    background: linear-gradient(45deg, #42d392, #647eff) border-box;
    padding: 10px 15px;
    border-radius: 25px;
    border: 3px solid rgb(0, 255, 0);
    color: var(--main-text-green);
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
}

</style>

