<template>
    <div class="post">
        <div>
            <div><strong>ID: </strong>{{ post.id }}</div>
            <div><strong>Название: </strong>{{ post.title }}</div>
            <div><strong>Описание: </strong>{{ post.body }}</div>
            <!-- вывод данных из получаемых пропсов через цикл -->
        </div>
       <div class="post__btns">
            <MyButton
            @click="$router.push(`/posts/${post.id}`)">
            
            Открыть</MyButton>
            <MyButton
            @click="$emit('remove', post)">
            
            Удалить</MyButton> <!-- использование UI компонента -->
           
       </div>
    </div>
</template>


<script>

export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>


<style >
    .post{
    min-width: 90%;
    margin-top: 15px;
    border: 3px solid var(--border-color-green);
    padding: 10px 15px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.post__btns{
    display: flex;
    min-width: 200px;
    justify-content: space-between;
}

</style>