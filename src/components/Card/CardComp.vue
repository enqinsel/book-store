<script setup>
import ButtonComp from "../Button/ButtonComp.vue";

const props = defineProps(["data"])
const emits = defineEmits(["delClick"])

const butonHandler = (id) =>{
    emits("delClick", id)
}

const delay = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

await delay(3000);

</script>

<template>
    <div class="card" v-for="book in props.data">
        <div class="card__header">
            <img :src="book.formats.image" class="img-fluid">
        </div>
        <div class="card__body">
            <p><b>Book Name:</b> {{book.title}}</p>
            <p v-for="author in book.authors">
                <b>Author: </b> {{author.name}} <br>
            </p>
            <b>Subjects:</b>
            <ul>
                <li v-for="subject in book.subjects">
                    {{subject}}</li>
            </ul>
        </div>
        <ButtonComp @click="butonHandler(book.id)"></ButtonComp>
    </div>
</template>

<style scoped>
.card {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid royalblue;
    transition: all 0.3s ease-in-out;
}

.card:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.card__header {
    width: 100%;
}

.card__header img {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.card__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.card__body h3 {
    text-align: center;
}

.img-fluid {
    width: 100%;
    height: auto;
}
</style>