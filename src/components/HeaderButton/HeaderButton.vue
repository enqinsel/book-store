<script setup>
const emits = defineEmits(["click"])

const addHandler = () => {
    emits("click")
}

const delay = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

await delay(3000);
</script>

<template>
    <button class="btn" @click="addHandler">Add</button>
</template>

<style scoped>
.btn {
    background-color: #e10b0b;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    margin-left: 50%;
    margin-bottom: 15px;
}

.btn:hover {
    background-color: rgb(208, 0, 0);
}
</style>