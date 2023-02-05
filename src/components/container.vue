<template>
  <div class="container">
    <div>
      <search-bar />
    </div>
    <div class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4">
      <div v-for="n in 10" :key="n">
        <product-card />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./Search-bar.vue";
import ProductCard from "./product-card.vue";

export default {
  name: "YContainer",
  components: {
    SearchBar,
    ProductCard,
  },
};
</script>

<style></style>
