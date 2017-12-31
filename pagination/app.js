
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('pagination-component', require('./components/pagination.vue'));

Vue.component('users-table', require('./components/Users/UsersTable.vue'));

Vue.component('cats-table', require('./components/Cats/CatsTable.vue'));

const app = new Vue({
    el: '#app'
    // data: {
    //     users: {
    //         total: 0,
    //         per_page: 2,
    //         from: 1,
    //         to: 0,
    //         current_page: 1
    //     },
    //     offset: 4,
    // },
    // mounted() {
    //     this.getUsers();
    // },
    // methods: {
    //     getUsers() {
    //         axios.get(`/users-json?page=${this.users.current_page}`)
    //             .then((response) => {
    //                 this.users = response.data;
    //             })
    //             .catch(() => {
    //                 console.log('handle server error from here');
    //             });
    //     }
    // }
});
