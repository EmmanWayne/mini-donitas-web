<template>
    <v-container class="text-center">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6" class="d-flex justify-center">
          <v-card class="elevation-24 rounded-lg pa-4 pink-lighten-5">
            <!-- Título del menú centrado -->
            <v-card-title class="pink-text text-h5 font-weight-bold justify-center align-center text-center">
              ✨ Nuestro Menú ✨
            </v-card-title>
  
            <!-- Imagen del menú -->
            <v-img 
              src="@/assets/menu_mini_donitas.jpg" 
              class="elevation-12 rounded-lg mx-auto"
              max-height="500"
              contain
            ></v-img>
  
            <!-- Botón de pedido con ancho más pequeño -->
            <v-card-actions class="d-flex flex-column align-center mt-4">
              <v-card-title class="pink-text text-h5 font-weight-bold justify-center align-center text-center">
              ⬇ Pide aquí ⬇
            </v-card-title>
            <v-btn 
                color="pink darken-2" 
                href="https://wa.me/50488839080" 
                target="_blank" 
                class="white--text whatsapp-btn"
              >
                <v-icon left>mdi-whatsapp</v-icon> ¡Ordena en Whatsapp!
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  
  .pink-text {
    font-family: 'Poppins', sans-serif;
    color: #D81B60; /* Color rosa más vibrante */
    text-align: center;
  }
  
  .v-card {
    background-color: #FFF3F8; /* Fondo rosado suave */
  }
  
  .whatsapp-btn {
    max-width: 250px; /* Botón más angosto */
    width: 100%;
    transition: transform 0.2s ease-in-out;
  }
  
  .whatsapp-btn:hover {
    transform: scale(1.05);
    background-color: #C2185B; /* Un rosa más oscuro al pasar el mouse */
  }
  </style>
  