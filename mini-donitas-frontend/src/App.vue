<template>
  <v-app>
    <MiniDonitasAppBar />
    <v-main>
      <router-view>
        <MiniDonitasMessage />
        <MiniDonitasMenu ref="menuSection" />
        <MiniDonitasCatalog ref="catalogSection" />
      </router-view>
    </v-main>

    <MiniDonitasFooter />
  </v-app>
</template>

<script>
import MiniDonitasAppBar from './components/MiniDonitasAppBar.vue';
import MiniDonitasMessage from './components/MiniDonitasMessage.vue';
import MiniDonitasMenu from './components/MiniDonitasMenu.vue';
import MiniDonitasCatalog from './components/MiniDonitasCatalog.vue';
import MiniDonitasFooter from './components/MiniDonitasFooter.vue';

export default {
  name: 'App',
  components: {
    MiniDonitasAppBar,
    MiniDonitasMessage,
    MiniDonitasMenu,
    MiniDonitasFooter,
    MiniDonitasCatalog
  },
  methods: {
    scrollToMenu() {
      this.$nextTick(() => {
        const menu = this.$refs.menuSection;
        if (menu && menu.$el) {
          menu.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    },
    scrollToCatalogo() {
      this.$nextTick(() => {
        const catalogo = this.$refs.catalogoSection;
        if (catalogo && catalogo.$el) {
          catalogo.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }
};
</script>

<style scoped>
.pink--text {
  font-family: 'Roboto Slab', serif;
}
</style>
