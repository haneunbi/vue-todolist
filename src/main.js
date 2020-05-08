import Vue from 'vue';
import App from './App.vue';
//import router from './router'

Vue.config.productionTip = false;

//전역 컴포넌트 선언(파스칼 표기법)
//Vue.component('todo-input', TodoInput)

new Vue({
    render: (h) => h(App),
}).$mount('#app');
