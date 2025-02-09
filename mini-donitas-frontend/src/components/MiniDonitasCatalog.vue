<template>
    <v-container>
        <v-carousel cycle height="auto" hide-delimiters show-arrows-on-hover>
            <v-card-title class="pink-text text-h5 font-weight-bold justify-center align-center text-center">
                ✨ Nuestro Catálago ✨
            </v-card-title>

            <v-carousel-item v-for="(product, index) in products" :key="index">
                <v-card width="95%" max-width="500" class="mx-auto pa-6 rounded-xl elevation-10" color="pink lighten-5">
                    <!-- Imagen del Producto -->

                    <v-img :src="product.image" height="300" cover class="rounded-lg mb-4"></v-img>

                    <!-- Nombre del Producto -->
                    <v-card-title class="pink-text text-h6 font-weight-bold justify-center align-center text-center">
                        {{ product.name }}
                    </v-card-title>

                    <!-- Descripción del Producto -->
                    <v-card-text class="pink-text text-h7 font-weight-bold justify-center align-center text-center">
                        {{ product.description }}
                    </v-card-text>

                    <!-- Precio del Producto -->
                    <v-card-text class="pink-text text-h7 font-weight-bold justify-center align-center text-center">
                        ${{ product.price }}
                    </v-card-text>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
import api from "@/services/api";

export default {
    data() {
        return {
            products: [],
        };
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await api.get("/products");
                this.products = response.data;
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            }
        },
    },
};
</script>

<style scoped>
.v-carousel {
    
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.v-card {
    transition: transform 0.3s ease-in-out;
}

.v-card:hover {
    transform: scale(1.05);
}

.pink-text {
    font-family: 'Poppins', sans-serif;
    color: #D81B60;
    /* Color rosa más vibrante */
    text-align: center;
}
</style>