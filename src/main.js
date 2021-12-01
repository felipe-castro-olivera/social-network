import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// import vueTextAreaAutosize from 'vue-textarea-autosize'


// CONFIGURACIONES DE FIREBASE/FIRESTORE
const configuracionFirebase = {
  apiKey: "AIzaSyCVLGGhDm8R3fE8ycE_slvedt4FXSU95f0",
  authDomain: "mamitas-732b2.firebaseapp.com",
  projectId: "mamitas-732b2",
  storageBucket: "mamitas-732b2.appspot.com",
  messagingSenderId: "214865855219",
  appId: "1:214865855219:web:777d8b226c80b2ce386d86",
};

const app = initializeApp(configuracionFirebase);
export const db = getFirestore(app);
// FIN CONFIGURACIONES DE FIREBASE/FIRESTORE

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
