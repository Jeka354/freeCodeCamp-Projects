<template >
    <select :value="modelValue" @change="changeOption" class="select">
        <option disabled checked value="">Выберите из списка</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value">
                {{ option.name }}
            </option>
    </select>
</template>

<script>
export default {
    name: 'MySelect',
    props:{
        modelValue:{
            type: String,
        },
        options:{
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style >
.select{
    font-size: 10px;
    background: linear-gradient(45deg, #42d392, #647eff) border-box;
    padding: 10px 15px;
    border-radius: 25px;
    border: 3px solid rgb(0, 255, 0);
    color: var(--main-text-white);
    font-weight: 700;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    cursor: pointer;
}

option{
    font-size: 10px;
    border-radius: 25px;
    color: black;
    font-weight: 700;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    cursor: pointer;
}
    
</style>