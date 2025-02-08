<template>
    <v-app-bar app color="pink lighten-3" dark height="140px">
      <v-container class="d-flex flex-column justify-center align-center text-center">
        <h2 style="font-size: 2rem; font-family: 'Pacifico', cursive;" class="white--text">Mini Donitas</h2>
        <v-container class="d-flex flex-row justify-center align-center text-center">
          <v-btn  class="mx-1 white" color="pink darken-1"
            width="10rem">Menú</v-btn>
            <v-img src="@/assets/logo_mini_donitas.png" max-height="60" max-width="60"></v-img>
          <v-btn  class="mx-1 white" color="pink darken-1"
            width="10rem">Catálogo</v-btn>
      </v-container>
      </v-container>
    </v-app-bar>
</template>

<style scoped>
.pink--text {
    font-family: 'Pacifico', cursive;
}
</style>
