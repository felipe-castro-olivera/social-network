<template>
  <v-container class="grey lighten-3 pt-0">
    <v-row>
      <v-col cols="8">
        <v-sheet rounded="lg" class="pa-5">
          <!-- PUBLICAR -->
          <v-card>
            <v-card-title class="purple white--text">
              Comparte tu experiencia...
            </v-card-title>

            <v-card-text class="mt-4 pb-0">
              <v-textarea rows="3" outlined dense auto-grow></v-textarea>
            </v-card-text>

            <v-card-actions class="pt-0">
              <v-spacer></v-spacer>
              <v-btn color="purple" text @click="dialog = false">
                Publicar
              </v-btn>
            </v-card-actions>
          </v-card>
          <!-- FIN PUBLICAR -->

          <v-row class="d-flex align-center justify-center ma-1">
            <div>
              <v-icon>mdi-baby-face-outline</v-icon>
              <v-icon>mdi-baby-face-outline</v-icon>
              <v-icon>mdi-baby-face-outline</v-icon>
            </div>
          </v-row>

          <!-- FEED -->
          <v-row dense>
            <v-col
              v-for="post in posts"
              :key="post.data().fecha.seconds"
              cols="12"
            >
              <v-card>
                <v-card-title
                  class="d-flex align-center"
                  v-text="post.data().titulo"
                ></v-card-title>
                <v-card-subtitle
                  v-text="post.data().descripcion"
                  class="pt-4 contenido"
                ></v-card-subtitle>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn class="purple white--text">Comentar</v-btn>

                  <!-- <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn> -->
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      <!-- FIN FEED -->
      <v-col>
        <v-sheet min-height="70vh" rounded="lg" class="pa-5 menu">
          <Consejos />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Consejos from "./Consejos.vue";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../main";

export default {
  name: "Feed",
  components: {
    Consejos,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async obtenerPosts() {
      try {
        const querySnapshot = await getDocs(collection(db, "feed"));
        querySnapshot.forEach((doc) => {
          let post = doc;
          console.log(post);
          this.posts.push(post);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.obtenerPosts();
  },
};
</script>
<style scoped>
.contenido {
  background-color: #f7edf8;
}
</style>
