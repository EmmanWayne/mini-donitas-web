<template>
  <v-app>
    <AppBarMiniDonitas />
  
    <v-main>
      <MessageMiniDonitas/>
      <MenuProducts />
    </v-main>

    <FooterMiniDonitas />
  </v-app>
</template>

<script>
import AppBarMiniDonitas from './components/AppBarMiniDonitas';
import MessageMiniDonitas from './components/MessageMiniDonitas';
import MenuProducts from './components/MenuProducts';
import FooterMiniDonitas from './components/FooterMiniDonitas';

export default {
  name: 'App',

  components: {
    AppBarMiniDonitas, MessageMiniDonitas, MenuProducts, FooterMiniDonitas
  },

  data: () => ({
    //
  }),
};
</script>

