import './assets/main.css'

import { createApp } from 'vue'
import { RouterLink } from 'vue-router';
import PrimeVue from 'primevue/config';
import App from './App.vue'

import "primevue/resources/themes/lara-light-indigo/theme.css";
import '/node_modules/primeflex/primeflex.css'   

const app = createApp(App);

app.use(PrimeVue);
app.component('router-link', RouterLink);
app.mount('#app')
