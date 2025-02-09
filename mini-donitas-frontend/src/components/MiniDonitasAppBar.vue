<template>
  <!-- Barra de navegación -->
  <v-app-bar app color="pink lighten-3" dark height="120px"
    class="d-flex flex-row justify-center align-center text-center">
    <v-container class="d-flex flex-column justify-center align-center text-center">
    <v-card-title class="white--text text-h4 font-weight-bold justify-center align-center text-center">
      🍩 Mini Donitas 🍩
    </v-card-title>

    
    
  </v-container>
  </v-app-bar>
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
