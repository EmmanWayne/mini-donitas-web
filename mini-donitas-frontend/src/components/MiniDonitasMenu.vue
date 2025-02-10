<template>

  <v-container class=" elevation-24 rounded-lg d-flex flex-column justify-center align-center text-center">


    <v-card width="95%" max-width="500" class="mx-auto pa-6 rounded-xl elevation-10" color="pink lighten-5">
      <!-- Título del menú centrado -->
      <v-card-title class="pink-text text-h5 font-weight-bold justify-center align-center text-center">
        ✨ Nuestro Menú ✨
      </v-card-title>

      <!-- Imagen del menú -->
      <v-img src="@/assets/menu_mini_donitas.jpg" class="elevation-12 rounded-lg mx-auto" max-height="500"
        contain></v-img>

      <!-- Botón de pedido con ancho más pequeño -->

      <v-card-title class="pink-text text-h5 font-weight-bold justify-center align-center text-center">
        ⬇ Pide aquí ⬇
      </v-card-title>
      <v-btn color="green darken-2" href="https://api.whatsapp.com/send?phone=50488839080&text=%F0%9F%8D%A9Hola%20Mini%20Donitas,%20!quiero%20hacer%20un%20pedido%20de%20donitas!%F0%9F%8D%A9" target="_blank" class="white--text whatsapp-btn">
        <v-icon left>mdi-whatsapp</v-icon> ¡Whatsapp!
      </v-btn>

    </v-card>



  </v-container>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.pink-text {
  font-family: 'Poppins', sans-serif;
  color: #D81B60;
  /* Color rosa más vibrante */
  text-align: center;
}

.v-card {
  background-color: #FFF3F8;
  /* Fondo rosado suave */
}


.whatsapp-btn:hover {
  transform: scale(1.05);
  background-color: #C2185B;
  /* Un rosa más oscuro al pasar el mouse */
}
</style>