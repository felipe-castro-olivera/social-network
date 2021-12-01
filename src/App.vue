<template>
  <v-app class="">
    <v-app-bar app color="#D0BEE8" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-5" size="40">
          <img
            src="https://randomuser.me/api/portraits/women/85.jpg"
            alt="John"
          />
        </v-avatar>
        <v-spacer></v-spacer>
        <v-toolbar-title>Mamitas</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            label="Busca otras mamitas"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2" fixed>
            <v-sheet rounded="lg" class="menu">
              <v-list color="transparent">
                <v-list-item v-for="link in links" :key="link" link>
                  <v-list-item-content>
                    <v-list-item-title class="d-flex align-center">
                      <v-icon left>{{ link.icono }}</v-icon
                      >{{ link.nombre }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title><v-icon>mdi-logout</v-icon> Cerrar sesión </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col cols="6">
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
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <v-card>
                    <!-- <v-img
                      :src="card.src"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                      
                    </v-img> -->

                    <v-card-title class="d-flex align-center" v-text="card.title"></v-card-title>
                    <v-card-subtitle
                      v-text="card.subtitle"
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

          <v-col cols="4">
            <v-sheet min-height="70vh" rounded="lg" class="pa-5 menu">
              <Consejos />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <Perfil />
    </v-main>
  </v-app>
</template>

<script>
import Perfil from "./components/Perfil";
import Consejos from "./components/Consejos";

export default {
  name: "App",
  components: {
    Perfil,
    Consejos,
  },

  data: () => ({
    colorPrincipal: "#E1BEE7",
    links: [
      { nombre: "Perfil", icono: "mdi-face-woman-outline" },
      { nombre: "Mensajes", icono: "mdi-forum" },
      { nombre: "Feed", icono: "mdi-newspaper" },
    ],
    cards: [
      {
        title: "La adolescencia",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
      {
        title: "¿Eres mamá a temprana edad?",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
      {
        title: "Lo que no te dicen a los 10 años",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
      {
        title: "La adolescencia",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
      {
        title: "¿Eres mamá a temprana edad?",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
      {
        title: "La adolescencia",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
      {
        title: "¿Eres mamá a temprana edad?",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
      {
        title: "La adolescencia",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
      {
        title: "¿Eres mamá a temprana edad?",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 12,
        subtitle:
          "Anim cupidatat commodo id laboris ea. Enim aliqua veniam do ad adipisicing ex eu pariatur aute ad. Ad cillum incididunt excepteur enim esse eu quis. Velit excepteur non mollit sint tempor voluptate.",
      },
    ],
  }),
};
</script>
<style scoped>
.menu {
  position: -webkit-sticky;
  position: sticky;
  top: 76px;
}
.contenido {
  background-color: #F7EDF8;
}
</style>
