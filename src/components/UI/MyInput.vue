<template>
   <input 
        class="input" 
        type="text"
        :value="modelValue"
        @input="updateInput"
        >
        <!-- Создаём двусторонее связывание с помощью :value и поулчаем PROPS modelValue а также прослушиваем событие через @input на событие updateInput прописанный в методах компонента -->
</template>


<script>

export default {
    name: 'MyInput',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event){
            this.$emit('update:modelValue', event.target.value) // для обработки ввода в инпут
        }
    }
}
</script>


<style scoped>
.input{
    margin-top: 15px;
    padding: 10px 15px;
    width: 100%;
    border: 2px solid var(--border-color-green);
    border-radius: 25px;
}
    
</style>