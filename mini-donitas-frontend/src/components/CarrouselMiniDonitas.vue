<template>
  <v-container class="elevation-24 rounded-lg d-flex flex-column justify-center align-center text-center">
    <v-carousel :cycle="true" :height="1200" v-if="products.length > 0">
      <!-- Recorremos los productos con v-for -->
      <h2 class="text-h8 font-weight-bold pink--text my-1" style="font-size: 1.2rem;">Nuestro Catálogo</h2>
      <v-carousel-item v-for="product in products" :key="product.id" class="elevation-10 rounded-lg">
        <v-container class=" elevation-24 rounded-lg d-flex flex-column justify-center align-center text-center">
          <v-row no-gutters class="d-flex justify-center align-center text-center">
            <v-img src="@/assets/icono_dona.png" max-height="30" max-width="30" class="mb-2"></v-img>
            <v-card-title color="red" class="pink--text justify-center align-center text-center"
              style="font-size: 1.2rem;">{{ product.name }}</v-card-title>
            <v-img src="@/assets/icono_dona.png" max-height="30" max-width="30" class="mb-2"></v-img>
          </v-row>
        </v-container>

        <v-img class="elevation-24 rounded-lg" :src="product.image" :alt="product.name" height="400px"></v-img>
        <v-card class="pink--text" title>
          <v-card-title class=" elevation-24 rounded-lg d-flex flex-column justify-center align-center text-center" style="font-size: 1.2rem;"
            v-if="product.description">{{
              product.description }}</v-card-title>
          <v-container class="elevation-24 rounded-lg d-flex flex-column justify-center align-center text-center">
            <v-chip class="justify-center align-center text-center white--text"
              style="height: 2.5rem; width: 100%; font-size: 1.2rem;" color="pink darken-1" label>Precio: {{ product.price
              }}</v-chip>
            <h3 class="text-h8 font-weight-bold pink--text">¡Quiero estas!</h3>
            <v-btn class="my-4 mb-1" icon href="https://wa.me/50488839080" target="_blank">
              <v-img src="@/assets/logo_whatsapp.png" max-height="50" max-width="50" class="mb-2"></v-img>
            </v-btn>
          </v-container>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      products: [] // Lista de productos a cargar
    };
  },
  mounted() {
    this.obtenerProductos(); // Cargar productos al montar el componente
  },
  methods: {
    obtenerProductos() {
      // Aquí hacemos la solicitud a la API de Laravel para obtener los productos
      this.$axios
        .get('http://localhost:8000/api/products') // Asegúrate de que esta URL sea la correcta
        .then((response) => {
          this.products = response.data; // Asignar los productos al array
        })
        .catch((error) => {
          console.error('Hubo un error al obtener los productos: ', error);
        });
    },
  }
};
</script>

<style scoped>
.v-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pink--text {
  font-family: 'Pacifico', cursive;
}
</style>