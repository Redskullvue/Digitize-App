<template>
  <div class="container mx-auto">
    <div class>
      <search-bar-mobile />
      <desktop-search-bar />
    </div>
    <div
      class="grid mb-16 grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8"
    >
      <!-- Side Bar  -->
      <div class="col-span-3 row-span-2 hidden md:block">
        <side-bar :products="selectedProducts" @changeCategory="sort" />
      </div>
      <!-- Sort Section -->
      <div class="col-span-9 row-span-1 hidden md:block">
        <div
          class="bg-white px-4 flex items-center gap-x-4 text-gray-400 rounded-lg"
        >
          <div class="bg-orange-200 rounded-md p-2 text-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentcolor"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
          <button @click="sorting = 1" class="py-4 relative">
            <span ref="popular" class="active-bar">محبوب ترین</span>
            <span
              v-if="sorting == 1"
              class="w-2 h-2 rounded-lg absolute bg-orange-600 top-1 left-0"
            ></span>
          </button>

          <button @click="sorting = 2" class="py-4 relative">
            <span ref="mostView"> پر بازدید ترین</span>
            <span
              v-if="sorting == 2"
              class="w-2 h-2 rounded-lg absolute bg-orange-600 top-1 left-0"
            ></span>
          </button>

          <button @click="sorting = 3" class="py-4 relative">
            <span ref="mostExpensive">گران ترین </span>
            <span
              v-if="sorting == 3"
              class="w-2 h-2 rounded-lg absolute bg-orange-600 top-1 left-0"
            ></span>
          </button>

          <button @click="sorting = 4" class="py-4 relative">
            <span ref="mostSales"> پر فروش ترین </span>
            <span
              v-if="sorting == 4"
              class="w-2 h-2 rounded-lg absolute bg-orange-600 top-1 left-0"
            ></span>
          </button>
        </div>
      </div>
      <!-- Product Section -->
      <div class="col-span-12 md:col-span-9">
        <div
          class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-4 mx-4 md:m-0"
        >
          <div v-for="product in productsInfo" :key="product.id">
            <product-card
              :name="product.name"
              :price="product.price"
              :colors="product.colors"
              :image="product.image"
              :brand="product.brand"
              :section="product.section"
            />
          </div>
        </div>
      </div>
    </div>
    <bottom-nav />
  </div>
</template>

<script>
import SearchBarMobile from "./Search-bar-mobile.vue";
import desktopSearchBar from "./Search-bar-desktop.vue";
import ProductCard from "./product-card.vue";
import sideBar from "./side-bar.vue";
import bottomNav from "./mobile-nav.vue";

export default {
  name: "YContainer",
  components: {
    SearchBarMobile,
    ProductCard,
    sideBar,
    desktopSearchBar,
    bottomNav,
  },
  data() {
    return {
      productsInfo: [
        {
          id: "0",
          name: "ساعت هوشمند اپل سری 8 ",
          section: "ساعت",
          price: "5,250,000",
          image: "watch",
          brand: "اپل",
          colors: ["bg-black", "bg-blue-500", "bg-red-500"],
        },
        {
          id: "1",
          name: "ساعت هوشمند اپل سری 3 ",
          section: "ساعت",
          image: "watch",
          brand: "اپل",
          price: "3,250,000",
          colors: ["bg-stone-800", "bg-blue-900", "bg-red-500"],
        },
        {
          id: "2",
          name: "ساعت هوشمند اپل سری 6 ",
          section: "ساعت",
          image: "watch",
          brand: "اپل",
          price: "7,250,000",
          colors: ["bg-gray-100", "bg-blue-200", "bg-green-500"],
        },
        {
          id: "3",
          name: "ساعت هوشمند اپل سری 6 ",
          section: "ساعت",
          image: "watch",
          brand: "اپل",
          price: "7,250,000",
          colors: ["bg-black", "bg-blue-100", "bg-red-500"],
        },
        {
          id: "4",
          name: "ساعت هوشمند اپل سری 3 ",
          section: "ساعت",
          image: "watch",
          brand: "اپل",
          price: "3,250,000",
          colors: ["bg-red-500", "bg-blue-900", "bg-pink-500"],
        },
        {
          id: "5",
          name: "ساعت هوشمند اپل سری6 ",
          section: "ساعت",
          image: "watch",
          brand: "اپل",
          price: "10,250,000",
          colors: ["bg-red-500", "bg-blue-900", "bg-pink-500"],
        },
        {
          id: "6",
          name: "موبایل سامسونگ مدل A50",
          section: "تلفن همراه",
          image: "A50",
          brand: "سامسونگ",
          price: "8,400,000",
          colors: ["bg-gray-100", "bg-blue-800", "bg-red-400"],
        },
        {
          id: "7",
          name: "موبایل سامسونگ مدل S21",
          section: "تلفن همراه",
          image: "S21",
          brand: "سامسونگ",
          price: "20,400,000",
          colors: ["bg-blue-400", "bg-slate-800", "bg-green-400"],
        },
      ],
      selectedProducts: [
        {
          id: "0",
          name: "ساعت هوشمند اپل سری 8 ",
          section: "ساعت",
          price: "5,250,000",
          image: "watch",
          brand: "اپل",
          colors: ["bg-black", "bg-blue-500", "bg-red-500"],
        },
        {
          id: "1",
          name: "ساعت هوشمند اپل سری 3 ",
          section: "ساعت",
          image: "watch",
          brand: "اپل",
          price: "3,250,000",
          colors: ["bg-stone-800", "bg-blue-900", "bg-red-500"],
        },
        {
          id: "2",
          name: "ساعت هوشمند اپل سری 6 ",
          section: "ساعت",
          image: "watch",
          brand: "اپل",
          price: "7,250,000",
          colors: ["bg-gray-100", "bg-blue-200", "bg-green-500"],
        },
        {
          id: "3",
          name: "ساعت هوشمند اپل سری 6 ",
          section: "ساعت",
          image: "watch",
          brand: "اپل",
          price: "7,250,000",
          colors: ["bg-black", "bg-blue-100", "bg-red-500"],
        },
        {
          id: "4",
          name: "ساعت هوشمند اپل سری 3 ",
          section: "ساعت",
          image: "watch",
          brand: "اپل",
          price: "3,250,000",
          colors: ["bg-red-500", "bg-blue-900", "bg-pink-500"],
        },
        {
          id: "5",
          name: "ساعت هوشمند اپل سری6 ",
          section: "ساعت",
          image: "watch",
          brand: "اپل",
          price: "10,250,000",
          colors: ["bg-red-500", "bg-blue-900", "bg-pink-500"],
        },
        {
          id: "6",
          name: "موبایل سامسونگ مدل A50",
          section: "تلفن همراه",
          image: "A50",
          brand: "سامسونگ",
          price: "8,400,000",
          colors: ["bg-gray-100", "bg-blue-800", "bg-red-400"],
        },
        {
          id: "7",
          name: "موبایل سامسونگ مدل S21",
          section: "تلفن همراه",
          image: "S21",
          brand: "سامسونگ",
          price: "20,400,000",
          colors: ["bg-blue-400", "bg-slate-800", "bg-green-400"],
        },
      ],
      sorting: 1,
    };
  },
  methods: {
    sort(e) {
      this.productsInfo = e;
    },
  },
  watch: {
    sorting() {
      if (this.sorting == 1) {
        for (let ref in this.$refs) {
          this.$refs[ref].classList.remove("active-bar");
        }
        this.$refs.popular.classList.add("active-bar");
      } else if (this.sorting == 2) {
        for (let ref in this.$refs) {
          this.$refs[ref].classList.remove("active-bar");
        }
        this.$refs.mostView.classList.add("active-bar");
      } else if (this.sorting == 3) {
        for (let ref in this.$refs) {
          this.$refs[ref].classList.remove("active-bar");
        }
        this.$refs.mostExpensive.classList.add("active-bar");
      } else if (this.sorting == 4) {
        for (let ref in this.$refs) {
          this.$refs[ref].classList.remove("active-bar");
        }
        this.$refs.mostSales.classList.add("active-bar");
      }
    },
  },
};
</script>

<style></style>
