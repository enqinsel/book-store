<script setup>
import { ref, onMounted } from 'vue';
import CardComp from "./components/Card/CardComp.vue"
import { getBooks, delBooks, addBooks } from "./service/editBooks"
import HeaderButton from './components/HeaderButton/HeaderButton.vue';

const books = ref([])

const newBook = {
  title: "Tutunamayanlar",
  authors: [
    {
      name: "Oğuz Atay"
    }
  ],
  subjects: [
    "Olric -- Fiction",
    "d women -- Fiction",
    "Pastoral fiction",
    "Sistasdages -- Fiction"
  ],
  formats: {
    image: "https://www.gutenberg.org/cache/epub/25344/pg25344.cover.medium.jpg"
  },
}

const addedBook = async () => {
  await addBooks(newBook)
  books.value.unshift(newBook)
}


const deleteHandler = async (id) => {
  await delBooks(id);
  const response = await getBooks()
  books.value = response
}

onMounted(async () => {
  const response = await getBooks();
  books.value = response
  return books.value
})

</script>

<template>
  <Suspense>
    <HeaderButton class="" @click="addedBook"></HeaderButton>
    <template #fallback>
      <div class="load">Loading...</div>
    </template>
  </Suspense>
  <div class="container">
    <Suspense>
      <CardComp :data="books" @delClick="deleteHandler"></CardComp>
      <template #fallback>
        <div class="lds-hourglass"></div>
      </template>
    </Suspense>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.lds-hourglass {
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid rgb(255, 255, 255);
  border-color: rgb(248, 0, 0) transparent rgb(255, 247, 0) transparent;
  animation: lds-hourglass 1.2s infinite;
}

@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    transform: rotate(1800deg);
  }
}

.load {
  position: absolute;
  left: 50%;
  top: 58%;
  transform: translate(-50%, -50%);
}
</style>
