<template>
    <v-app-bar app color="pink lighten-3" dark height="140px">
      <v-container class="d-flex flex-column justify-center align-center text-center">
        <v-toolbar-title class="text--white" style="font-family: 'Pacifico', cursive; font-size: 1.5 rem;">
          Mini Donitas
        </v-toolbar-title>
        <v-img src="@/assets/logo_mini_donitas.png" max-height="60" max-width="60"></v-img>
        <v-row no-gutters class="d-flex justify-center align-center text-center my-1">
          <v-btn text @click="scrollToSection('menu')" class="mx-1 white" color="pink darken-2"
            width="10rem">Menú</v-btn>
          <v-btn text @click="scrollToSection('catalogo')" class="mx-1 white" color="pink darken-2"
            width="10rem">Catálogo</v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
</template>

<style scoped>
.pink--text {
    font-family: 'Pacifico', cursive;
}
</style>
