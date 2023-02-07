<template>
  <div class="container mx-auto">
    <div>
      <search-bar />
    </div>
    <div class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-4">
      <div v-for="product in productsInfo" :key="product.id">
        <product-card
          :name="product.name"
          :price="product.price"
          :colors="product.colors"
          :image="product.image"
          :brand="product.brand"
        />
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
  data() {
    return {
      productsInfo: [
        {
          id: "0",
          name: "ساعت هوشمند اپل سری 8 ",
          price: "5,250,000",
          image: "../assets/images/watch.jpeg",
          brand: "اپل",
          colors: ["bg-black", "bg-blue-500", "bg-red-500"],
        },
        {
          id: "1",
          name: "ساعت هوشمند اپل سری 3 ",
          image: "../assets/images/watch.jpeg",
          brand: "اپل",
          price: "3,250,000",
          colors: ["bg-stone-800", "bg-blue-900", "bg-red-500"],
        },
        {
          id: "2",
          name: "ساعت هوشمند اپل سری 6 ",
          image: "watch.jpeg",
          brand: "اپل",
          price: "7,250,000",
          colors: ["bg-gray-100", "bg-blue-200", "bg-green-500"],
        },
        {
          id: "3",
          name: "ساعت هوشمند اپل سری 6 ",
          image: "watch.jpeg",
          brand: "اپل",
          price: "7,250,000",
          colors: ["bg-black", "bg-blue-100", "bg-red-500"],
        },
        {
          id: "4",
          name: "ساعت هوشمند اپل سری 3 ",
          image: "../assets/images/watch.jpeg",
          brand: "اپل",
          price: "3,250,000",
          colors: ["bg-red-500", "bg-blue-900", "bg-pink-500"],
        },
      ],
    };
  },
};
</script>

<style></style>
