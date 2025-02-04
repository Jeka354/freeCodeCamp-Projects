<template>
  <div class="post-page">
    <h1 class="post-page__title">Страница с постами</h1>
    <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск...."
      v-focus
      class="post-page__search"
    />
    <div class="post-page__controls">
      <my-button @click="showDialog" class="post-page__create-btn">
        Создать пост
      </my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
        class="post-page__sort"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
      class="post-page__list"
    />
    <div v-else class="post-page__loading">Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="post-page__observer"></div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import MyButton from '@/components/UI/MyButton';
import MySelect from '@/components/UI/MySelect';
import MyInput from '@/components/UI/MyInput';

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    PostList,
    PostForm,
  },
  setup() {
    const store = useStore();
    const dialogVisible = ref(false);

    // Состояние и геттеры из Vuex
    const posts = computed(() => store.state.post.posts);
    const isPostsLoading = computed(() => store.state.post.isPostsLoading);
    const selectedSort = computed(() => store.state.post.selectedSort);
    const searchQuery = computed(() => store.state.post.searchQuery);
    const sortOptions = computed(() => store.state.post.sortOptions);
    const sortedPosts = computed(() => store.getters['post/sortedPosts']);
    const sortedAndSearchedPosts = computed(() => store.getters['post/sortedAndSearchedPosts']);

    // Мутации и действия из Vuex
    const setSearchQuery = (query) => store.commit('post/setSearchQuery', query);
    const setSelectedSort = (sort) => store.commit('post/setSelectedSort', sort);
    const fetchPosts = () => store.dispatch('post/fetchPosts');
    const loadMorePosts = () => store.dispatch('post/loadMorePosts');
    const removePost = (post) => store.dispatch('post/removePost', post);

    // Локальные методы
    const showDialog = () => {
      dialogVisible.value = true;
    };

    const createPost = (post) => {
      posts.value.push(post);
      dialogVisible.value = false;
    };

    // Загрузка постов при монтировании компонента
    onMounted(() => {
      fetchPosts();
    });

    return {
      dialogVisible,
      posts,
      isPostsLoading,
      selectedSort,
      searchQuery,
      sortOptions,
      sortedPosts,
      sortedAndSearchedPosts,
      setSearchQuery,
      setSelectedSort,
      fetchPosts,
      loadMorePosts,
      removePost,
      showDialog,
      createPost,
    };
  },
};
</script>

<style scoped>
.post-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.post-page__title {
  margin-bottom: 20px;
  font-size: 24px;
  color: var(--main-text-green);
}

.post-page__search {
  margin-bottom: 30px;
  width: 100%;
  max-width: 600px;
}

.post-page__controls {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
}

.post-page__create-btn {
  background-color: var(--main-green);
  color: var(--main-text-white);
}

.post-page__sort {
  width: 200px;
}

.post-page__list {
  width: 100%;
  max-width: 800px;
}

.post-page__loading {
  font-size: 18px;
  color: var(--main-text-green);
}

.post-page__observer {
  width: 100%;
  height: 30px;
}
</style>