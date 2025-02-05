<template>
    <div class="post-page">
      <h1 class="post-page__title">Это страница поста с ID = {{ postId }}</h1>
    </div>
  </template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router'; // Добавляем импорт useRoute
import axios from 'axios';

export default {
    setup() {
    const route = useRoute();
    const postId = computed(() => route.params.id);
    const post = ref(null);

    onMounted(async () => {
        try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId.value}`);
        post.value = response.data;
        } catch (error) {
        console.error('Ошибка при загрузке поста:', error);
        }
    });

    return {
        postId,
        post,
    };
}
}
  </script>
  
  <style scoped>
    .post-page {
    padding: 20px;
    text-align: center;
    }

    .post-page__title {
    font-size: 24px;
    color: var(--main-text-green);
    }
  </style>