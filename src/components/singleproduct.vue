<template>
  <!-- Header -->
  <div class="p-1">
    <div class="flex items-center justify-between mb-4 mt-11 px-4 md:hidden">
      <div
        class="w-7 h-7 bg-white shadow-md flex justify-center items-center rounded-md text-slate-800"
      >
        <router-link to="/">
          <i-back-chevron />
        </router-link>
      </div>
      <div class="text-lg text-slate-800 font-bold">
        {{ singleProductInfo.name }}
      </div>
      <div
        class="w-7 h-7 bg-white shadow-md flex justify-center items-center rounded-md text-slate-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>

    <div>
      <search-bar-desktop />
    </div>

    <!-- Mobile Bread Crumbs -->
    <div class="flex items-center text-xs mt-8 md:hidden">
      <span class="text-orange-500 mx-1">{{ singleProductInfo.section }}</span>
      <span>
        <i-forward />
      </span>
      <span class="text-orange-500 mx-1">{{ singleProductInfo.brand }}</span>
      <span> <i-forward /></span>
      <span class="text-gray-500">{{ singleProductInfo.name }}</span>
    </div>

    <div
      class="grid mb-16 grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8"
    >
      <!-- Desktop Side Bar ! -->
      <div class="col-span-3 row-span-2 hidden md:block">
        <side-bar />
      </div>
      <!-- BreadCrumbs Desktop -->
      <div class="col-span-9 row-span-1 hidden md:block">
        <div class="flex items-center mt-8 bg-white rounded-lg p-4 text-md">
          <span class="text-orange-500 mx-1">{{
            singleProductInfo.section
          }}</span>
          <span>
            <i-forward />
          </span>
          <span class="text-orange-500 mx-1">{{
            singleProductInfo.brand
          }}</span>
          <span> <i-forward /></span>
          <span class="text-gray-500">{{ singleProductInfo.name }}</span>
        </div>
      </div>
      <!-- Single Product information -->
      <div
        class="col-span-12 md:col-span-9 md:flex flex-row justify-between mt-4"
      >
        <div class="md:bg-white rounded-lg flex-auto">
          <div
            class="mt-10 flex flex-col items-center mx-4 p-2 md:flex-row md:justify-start md:items-start"
          >
            <img
              class="w-64 h-64"
              :src="require(`@/assets/images/${singleProductInfo.image}.png`)"
              alt="Product Image"
            />
            <div class="flex flex-col md:mb-2">
              <div class="mt-1 text-center md:text-start">
                <h2 class="text-slate-800 md:text-xl">
                  {{ singleProductInfo.name }}
                </h2>
                <h4 class="text-gray-400 mt-2 md:text-lg">Samsung A50 256gb</h4>
              </div>
              <!-- Color Palette Section -->
              <div
                class="mt-4 mb-4 flex justify-center items-center md:mt-8 md:text-base md:justify-start"
              >
                <h4 class="text-slate-800 md:text-lg">انتخاب رنگ :</h4>
                <div class="flex items-center justify-center mr-5">
                  <div
                    v-for="(color, index) in singleProductInfo.colors"
                    :key="index"
                    class="w-5 h-5 rounded-full -mr-1"
                    :class="color"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Seller Deatil Section -->
          <div class="flex flex-wrap gap-x-2 px-2 text-xs md:hidden">
            <div class="flex items-center justify-center flex-1">
              <span class="mx-2">
                <i-shop class="w-4 h-4" />
              </span>
              <span class="font-bold">فروشنده :</span>
              <span class="text-slate-800">دیجی زون</span>
            </div>
            <div class="flex items-center justify-center flex-1">
              <span class="mx-2">
                <i-grauntee class="w-4 h-5" />
              </span>
              <span class="font-bold"> گارانتی :</span>
              <span class="text-slate-800"> 18 ماه زرین خدمت</span>
            </div>
            <div class="flex items-center w-full justify-center">
              <span class="mx-2">
                <i-forward class="w-4 h-5" />
              </span>
              <span class="font-bold"> ارسال توسط :</span>
              <span class="text-slate-800">انبار تهران</span>
            </div>
          </div>
        </div>
        <div class="hidden md:block bg-red-100 p-8">Hello World</div>
      </div>
    </div>
  </div>
</template>

<script>
import { iForward, iBackChevron, iGrauntee, iShop } from "./icons/index";
import searchBarDesktop from "./Search-bar-desktop.vue";
import sideBar from "./side-bar.vue";
export default {
  name: "singleProduct",
  props: ["data"],
  components: {
    iForward,
    iBackChevron,
    iGrauntee,
    iShop,
    searchBarDesktop,
    sideBar,
  },
  data() {
    return {
      singleProductInfo: "",
    };
  },
  created() {
    this.singleProductInfo = JSON.parse(this.data);
    console.log(this.singleProductInfo);
    document.title = this.singleProductInfo.name;
  },
};
</script>

<style></style>
