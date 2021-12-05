<template>
  <v-container class="grey lighten-3 pt-0">
    <v-row>
      <v-col cols="11">
        <v-sheet rounded="lg" class="pa-5">
          <v-row class="mb-5 pt-5">
            <v-col class="d-flex align-center justify-center">
              <v-avatar color="primary" size="200"
                ><v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="350"
                  max-width="450"
                  src="https://pipe28.github.io/aniversary/images/felipeykaty.jpg"
                ></v-img
              ></v-avatar>
              <v-list v-for="perfil in perfil" :key="perfil.nombre" dense>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title><h2>Mamita {{ perfil.nombre }}</h2> </v-list-item-title>
                    <h5>Hijos:</h5>
                    <v-list-item-subtitle v-for="hijo in perfil.hijos" :key="hijo.edad">
                      {{ hijo.nombre }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                        <v-icon>mdi-google-maps</v-icon>
                      {{perfil.ciudad}}, {{perfil.pais}}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="pt-5">
            <v-col cols="3"
              ><strong>Galería</strong>
              <v-row>
                <v-col
                  v-for="n in 9"
                  :key="n"
                  class="d-flex child-flex"
                  cols="10"
                >
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="9">
              <!-- <h1>COLUMNA FEED MAMITA</h1> -->
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
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      <!-- FIN FEED -->
    </v-row>
  </v-container>
</template>
<script>
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../main";

export default {
  name: "Perfil",
  data() {
    return {
        perfil: []
    };
  },
  methods: {
    async obtenerPerfil() {
      try {
        const querySnapshot = await getDocs(collection(db, "mamitas"));
        querySnapshot.forEach((doc) => {
          let perfil = doc.data();
          console.log(perfil);
          this.perfil.push(perfil);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.obtenerPerfil();
  },
};
</script>
