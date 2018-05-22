import Vue from 'vue';

import App from './src/App.vue';

import './src/style.css';

import ( /* webpackChunkName: "dyn" */ './src/Dy.vue');

new Vue({
    el: '#app',
    components: {
        App
    }
}).$mount('#app');
