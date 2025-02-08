import Vue from "vue";
import VueRouter from "vue-router";
import Products from "@/views/Products.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Products },
];

export default new VueRouter({ mode: "history", routes });
