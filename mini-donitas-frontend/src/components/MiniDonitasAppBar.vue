<template>
  <!-- Barra de navegación -->
  <v-container class=" elevation-24 rounded-lg d-flex flex-column justify-center align-center text-center">
    <v-row no-gutters class="d-flex justify-center align-center text-center">
      <v-app-bar app color="pink lighten-3" dark height="150px"
        class="d-flex flex-row justify-center align-center text-center">

        <v-img
          :src="'https://github.com/EmmanWayne/mini-donitas-web/blob/main/mini-donitas-products/mini_donitas_logo.png?raw=true'"
          height="140" width="140" cover></v-img>

      </v-app-bar>
    </v-row>
  </v-container>

</template>

<script>
export default {
  methods: {
    scrollToMenu() {
      this.$nextTick(() => {
        const menu = this.$refs.scrollToMenu;
        if (menu && menu.$el) {
          menu.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    },
    scrollToCatalogo() {
      this.$nextTick(() => {
        const catalogo = this.$refs.scrollToCatalogo;
        if (catalogo && catalogo.$el) {
          catalogo.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }
};

</script>

<style scoped>
.pink-text {
  font-family: 'Poppins', sans-serif;
  color: #D81B60;
  /* Color rosa más vibrante */
  text-align: center;
}
</style>
