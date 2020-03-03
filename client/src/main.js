import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

firebase.initializeApp({
  // apiKey: "AIzaSyBqLUXaDvnDR2CoBvY94anzYi1P1o19DKs",
  // authDomain: "fbauthdemo-2a451.firebaseapp.com",
  // databaseURL: "https://fbauthdemo-2a451.firebaseio.com",
  // projectId: "fbauthdemo-2a451",
  // storageBucket: "",
  // messagingSenderId: "839675573680",
	// appId: "1:839675573680:web:b7e921f299469934659275"
	
	apiKey: "AIzaSyC9_xsoYu6VDm7m6ocOEHwSv9Krgu70fQg",
    authDomain: "fir-example-db85c.firebaseapp.com",
    databaseURL: "https://fir-example-db85c.firebaseio.com",
    projectId: "fir-example-db85c",
    storageBucket: "fir-example-db85c.appspot.com",
    messagingSenderId: "532299412888",
    appId: "1:532299412888:web:4bd9678d592f028d71e7ed",
    measurementId: "G-0S5WFMY6YS"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
