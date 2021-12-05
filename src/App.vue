<template>
  <v-app class="">
    <v-app-bar app color="#D0BEE8" flat>
      <v-container class="py-0 fill-height">
        <router-link class="decoracion black--text" :to="links[0].link">
          <v-avatar class="mr-5" size="40">
            <img
              src="https://pipe28.github.io/aniversary/images/felipeykaty.jpg"
              alt="Katy"
            />
          </v-avatar>
        </router-link>

        <v-spacer></v-spacer>
        <v-toolbar-title class="titulo">
          <router-link class="decoracion black--text" to="/">
            <h1>Mamitas</h1>
          </router-link>
        </v-toolbar-title>

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
                <v-list-item v-for="link in links" :key="link">
                  <v-list-item-content>
                    <router-link class="decoracion black--text" :to="link.link">
                      <v-list-item-title class="d-flex align-center">
                        <v-icon left>{{ link.icono }}</v-icon
                        >{{ link.nombre }}</v-list-item-title
                      ></router-link
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="black--text lighten-4">
                  <v-list-item-content>
                    <v-list-item-title
                      ><v-icon>mdi-logout</v-icon> Cerrar sesión
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col cols="10">
            <router-view></router-view>
          </v-col>
          <!-- FIN FEED -->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    colorPrincipal: "#E1BEE7",
    links: [
      { nombre: "Perfil", icono: "mdi-face-woman-outline", link: "perfil" },
      { nombre: "Mensajes", icono: "mdi-forum", link: "mensajes" },
      { nombre: "Feed", icono: "mdi-newspaper", link: "feed" },
    ],
  }),
  methods: {},
  mounted() {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap");

.menu {
  position: -webkit-sticky;
  position: sticky;
  top: 76px;
}
.decoracion {
  text-decoration: none;
}
.titulo {
  font-family: "Caveat Brush", cursive;
}
</style>
