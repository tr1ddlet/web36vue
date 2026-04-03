<template>
  <p>X: {{ x }}   Y: {{ y }}</p>

  <HeaderComponent>
    <p>𓆝</p>
    <p>тэг</p>
  </HeaderComponent>

  <div id="conditionalRendering">
    <div v-if="random > 0.5">Сейчас меня видно</div>
    <div v-else>А уже нет</div>
  </div>

  <div class="gallery flex aic jcc">
    <button @click="clickLeft">👈</button>

    <template v-for="image in images" :key="image.id">
      <img :src="image.src" :alt="image.alt" :style="'display:' + image.isVisible" />
    </template>

    <button @click="clickRight">👉</button>
  </div>

  <CalendarTable></CalendarTable>
  <FontManager></FontManager>

  <h1 @click="counterStore.increment">{{ counterStore.count }}</h1>

  <div class="nav-buttons">
  <button @click="goMemoryGame">Memory Game</button>
  <button @click="goTurtles">Turtles</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import CalendarTable from "../components/CalendarTable.vue";
import FontManager from "../components/FontManager.vue";
import { useCounterStore } from '../source/counterCompos.ts';
import { useMouse } from '../composables/mouse.ts';
import { useRouter } from 'vue-router';

const { x, y } = useMouse();
const counterStore = useCounterStore();
const random = ref(Math.random());

const router = useRouter();

// Slider
let images = ref([
  { id: 0, src: "/web36vue/durov.webp", alt: "durov", isVisible: "block" },
  { id: 1, src: "/web36vue/lomonosov.webp", alt: "lomonosov", isVisible: "none" },
  { id: 2, src: "/web36vue/pushkin.webp", alt: "pushkin", isVisible: "none" },
]);

let currentSlide = 0;
const imagesSize = images.value.length;

const clickLeft = () => {
  currentSlide = (currentSlide - 1 + imagesSize) % imagesSize;
  updateSlider();
};

const clickRight = () => {
  currentSlide = (currentSlide + 1) % imagesSize;
  updateSlider();
};

const updateSlider = () => {
  images.value.forEach(el => el.isVisible = el.id === currentSlide ? "block" : "none");
};

const goMemoryGame = () => router.push('/memory-game');   // Memory Game
const goTurtles = () => router.push('/turtles');    // Turtles

const todos = ref([
  { text: "анжуманя делат" },
  { text: "прес качат" },
  { text: "бегит" },
]);
</script>

<style scoped>
.flex { display: flex; gap: 20px; }
.fdc { flex-direction: column; }
.jcc { justify-content: center; }
.aic { align-items: center; }
.gallery { display: flex; justify-content: center; }
.gallery img { height: 350px; width: 350px; }
h1 { user-select: none; }
.nav-buttons { margin-top: 20px; gap: 10px; display: flex; }
</style>