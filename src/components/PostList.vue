<template>
    <div class="lists" v-if="posts.length > 0">
        <h3 style="text-align: center;">Список постов</h3>
        <TransitionGroup name="post-list">
            <PostItem 
            v-for="post in posts"
            :post="post" 
            :key="post.id"
            @remove="$emit('remove', post)"
            style="width: 100%;"
        />
        </TransitionGroup>
        
    </div>
    <h3 v-else style="color: red; text-align: center; margin-bottom: 15px;">Список постов пуст</h3>

    <!-- вывод данных из получаемых пропсов через цикл -->
</template>


<script>
import PostItem from './PostItem.vue';

export default {
    components:{
        PostItem
    },
    props:{
        posts: { // описание ожидаемых входных данных (пропсов) от родителя и дальнейшее использование. принимаем массив объектов
            type: Array,
            required: true
        }
        
    }
}
</script>

<style>
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