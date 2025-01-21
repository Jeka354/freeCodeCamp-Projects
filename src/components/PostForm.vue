<template>
<form @submit.prevent>
            <h2 style="text-align: center;">Создание поста</h2>
            <MyInput 
                v-focus
                v-model="post.title"
                type="text" 
                placeholder="введите название поста"

                />
                <!-- v-model создаёт двухстороннее связывание на введённые данные в инпут и отображение их в объекте post -->
            <MyInput 
                v-model="post.body"
                type="text" 
                placeholder="введите описание поста"

                />
            <MyButton 
                @click="createPost" 
                    style="align-self: flex-end; 
                    margin-top: 15px; 
                    font-size: 15px;">
                    создать пост
            </MyButton>
        </form>
</template>

<script>


export default {
    data(){
        return {
            post: { // объект для передачи родителю, получаем данные из инпутов
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost(){
            this.post.id = new Date();
            this.$emit('create', this.post); // название события для родительского коспонента
            this.post = { // обнуление инпутов
                title: '',
                body: ''
            }
            }

        },
    }

</script>


<style scoped>


form{
    display: flex;
    flex-direction: column;
    
}


</style>