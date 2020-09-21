<template>
  <div>
    <app-header></app-header>
    <app-featured></app-featured>
    <app-shop-list></app-shop-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import ShopList from "./components/ShopList.vue";
import FeaturedProducts from "./components/FeaturedProducts.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-shop-list": ShopList,
    "app-featured": FeaturedProducts,
  },
};
</script>

<style scoped>
div {
  background-color: floralwhite;
}
</style>
