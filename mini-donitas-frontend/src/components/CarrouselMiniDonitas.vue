<template>
    <v-container>
      <v-carousel :cycle="true" :height="'400px'" v-if="products.length > 0">
        <!-- Recorremos los productos con v-for -->
        <v-carousel-item v-for="product in products" :key="product.id">
          <v-img :src="product.image" :alt="product.name" height="400px">
            <v-container fill-height class="d-flex flex-column align-center justify-center">
              <v-row>
                <v-col>
                  <v-card class="white--text" tile>
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle v-if="product.description">{{ product.description }}</v-card-subtitle>
                    <v-card-text>
                      <v-btn color="primary" @click="verProducto(product)">Ver Producto</v-btn>
                    </v-card-text>
                    <v-card-footer class="justify-end">
                      <v-chip color="green" label>$ {{ product.price }}</v-chip>
                    </v-card-footer>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
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
      verProducto(product) {
        // Aquí puedes redirigir o abrir un modal con más detalles del producto
        console.log('Ver producto: ', product);
      }
    }
  };
  </script>
  
  <style scoped>
  .v-carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  