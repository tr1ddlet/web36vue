import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '#root/pages/HomePage.vue';
import MemoryGamePage from '#root/pages/MemoryGamePage.vue';
import AboutTurtles from '#root/pages/AboutTurtles.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/memory-game', component: MemoryGamePage },
  { path: '/turtles', component: AboutTurtles },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };