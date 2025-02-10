<template>

    <v-container class="mb-4 elevation-24 rounded-lg d-flex flex-column justify-center align-center text-center">


        <v-carousel height="auto" hide-delimiters>


            <v-carousel-item v-for="(product, index) in products" :key="index">

                <v-card width="95%" max-width="500" class="mx-auto rounded-xl elevation-24" color="pink lighten-5">
                    <v-card-title class=" my-5 pink-text text-h5 font-weight-bold justify-center align-center text-center">
                        ✨ Nuestro Catálago ✨
                    </v-card-title>
                    <!-- Imagen del Producto -->

                    <v-img :src="product.image" height="300" cover class="rounded-lg"></v-img>

                    <!-- Nombre del Producto -->
                    <v-card-title class="pink-text text-h7 font-weight-bold justify-center align-center text-center">
                        {{ product.name }}
                    </v-card-title>

                    <!-- Descripción del Producto -->
                    <v-card-text class="pink-text text-h7 font-weight-bold justify-center align-center text-center">
                        {{ product.description }}
                    </v-card-text>

                    <!-- Precio del Producto -->
                    <v-card-text color="green darken-2" class="pink-text text-h7 font-weight-bold justify-center align-center text-center">
                        ${{ product.price }}
                    </v-card-text>

                    <v-card-title class="pink-text text-h7 font-weight-bold justify-center align-center text-center">
                        ¡Quiero estas!
                    </v-card-title>
                    <v-btn color="green darken-2" href="https://api.whatsapp.com/send?phone=50488839080&text=%F0%9F%8D%A9Hola%20Mini%20Donitas,%20!quiero%20hacer%20un%20pedido%20de%20donitas!%F0%9F%8D%A9" target="_blank"
                        class="white--text mb-3">
                        <v-icon left>mdi-whatsapp</v-icon> ¡Ordenar!
                    </v-btn>
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