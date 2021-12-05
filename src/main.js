import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVLGGhDm8R3fE8ycE_slvedt4FXSU95f0",
  authDomain: "mamitas-732b2.firebaseapp.com",
  projectId: "mamitas-732b2",
  storageBucket: "mamitas-732b2.appspot.com",
  messagingSenderId: "214865855219",
  appId: "1:214865855219:web:777d8b226c80b2ce386d86",
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth, storage };

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
