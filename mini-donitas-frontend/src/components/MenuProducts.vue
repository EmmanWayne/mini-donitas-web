<template>
    <v-container class="text-center">
        <v-row justify="center">
            <v-col cols="12" md="8" lg="6" class="d-flex justify-center">
                <v-card class="elevation-10 rounded-lg">
                    <h2 class="text-h8 font-weight-bold pink--text my-2" style="font-size: 1.2rem;">Nuestro Menú</h2>
                    <v-img src="@/assets/menu_mini_donitas.jpg" height="700px" class="elevation-24 rounded-lg"
                        contain></v-img>
                    <h2 class="text-h8 font-weight-bold pink--text my-2" style="font-size: 1.2rem;">Pide aquí:</h2>
                    <v-btn class="my-1 mb-3" icon href="https://wa.me/50488839080" target="_blank">
                        <v-img src="@/assets/logo_whatsapp.png" max-height="50" max-width="50" class="mb-2"></v-img>
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.pink--text {
    font-family: 'Pacifico', cursive;
}
</style>

