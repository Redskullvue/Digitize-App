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
            <div class="flex flex-col justify-center items-center">
              <img
                class="w-64 h-64"
                :src="require(`@/assets/images/${singleProductInfo.image}.png`)"
                alt="Product Image"
              />
              <div class="flex flex-row w-32 h-32 mt-5 justify-center gap-x-2">
                <img
                  class="w-14 h-14 ring-1 ring-orange-500 rounded-lg"
                  :src="
                    require(`@/assets/images/${singleProductInfo.image}.png`)
                  "
                  alt=""
                />
                <img
                  class="w-14 h-14 ring-1 ring-orange-500 rounded-lg"
                  :src="
                    require(`@/assets/images/${singleProductInfo.image}.png`)
                  "
                  alt=""
                />
                <img
                  class="w-14 h-14 ring-1 ring-orange-500 rounded-lg"
                  :src="
                    require(`@/assets/images/${singleProductInfo.image}.png`)
                  "
                  alt=""
                />
              </div>
            </div>

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
              <!-- Seller Deatil Section -->
              <div class="flex flex-wrap gap-x-2 px-2 text-xs md:hidden">
                <div class="flex items-center justify-center flex-1">
                  <span class="mx-2">
                    <i-shop class="w-4 h-4" />
                  </span>
                  <span class="font-bold">فروشنده :</span>
                  <span class="text-slate-800">دیجی زون</span>
                </div>
                <div class="flex items-center flex-1">
                  <span class="mx-2">
                    <i-grauntee class="w-4 h-5" />
                  </span>
                  <span class="font-bold"> گارانتی :</span>
                  <span class="text-slate-800"> 18 ماه زرین </span>
                </div>
                <div class="flex items-center w-full justify-center">
                  <span class="mx-2">
                    <i-forward class="w-4 h-5" />
                  </span>
                  <span class="font-bold"> ارسال توسط :</span>
                  <span class="text-slate-800">انبار تهران</span>
                </div>
              </div>
              <!-- Product Deatil -->
              <div
                class="md:flex flex-col text-slate-800 bg-white p-4 mt-4 rounded-lg md:p-0 text-sm md:text-lg"
              >
                <h2 class="font-bold mb-4">ویژگی های کالا</h2>
                <ul class="md:list-disc list-inside marker:text-orange-500">
                  <li class="flex flex-col gap-y-1 md:flex-row">
                    <span class="text-gray-500">حافظه داخلی : </span>
                    <span>256 گیگابایت</span>
                  </li>
                  <li class="flex flex-col gap-y-1 md:flex-row">
                    <span class="text-gray-500"> اندازه صفحه نمایش: </span>
                    <span>6.0 اینچ و بزرگتر</span>
                  </li>
                  <li class="flex flex-col gap-y-1 md:flex-row">
                    <span class="text-gray-500"> شبکه های ارتباطی : </span>
                    <span>2G , 3G , 4G , 5G</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden text-sm md:block bg-white text-slate-800 w-64">
          <div class="bg-gray-200 p-4 rounded-lg mt-4 ml-2">
            <ul class="flex flex-col gap-y-4">
              <li class="flex items-center">
                <span class="mx-2">
                  <i-shop class="w-4 h-4" />
                </span>
                <span class="font-bold">فروشنده :</span>
                <span class="text-slate-600">دیجی زون</span>
              </li>
              <li class="flex items-center">
                <span class="mx-2">
                  <i-grauntee class="w-4 h-5" />
                </span>
                <span class="font-bold"> گارانتی :</span>
                <span class="text-slate-600"> 18 ماه زرین </span>
              </li>
              <li class="flex items-center">
                <span class="mx-2">
                  <i-forward class="w-4 h-5" />
                </span>
                <span class="font-bold"> ارسال :</span>
                <span class="text-slate-600">انبار تهران</span>
              </li>
              <li class="text-center font-bold w-full mt-8">
                <span class="text-orange-600 text-lg"
                  >{{ singleProductInfo.price }} تومان</span
                >
                <button
                  class="bg-orange-500 text-white mt-4 p-3 rounded-lg w-full hover:bg-orange-600"
                >
                  افزودن به سبد خرید
                </button>
              </li>
            </ul>
          </div>
        </div>
        <!-- Mobile Fix Add To Cart Button -->
        <div class="bg-white fixed bottom-0 w-full p-2 md:hidden">
          <div class="flex items-center gap-x-4">
            <button
              class="bg-orange-500 text-white p-3 rounded-lg w-56 hover:bg-orange-600"
            >
              افزودن به سبد خرید
            </button>
            <div class="text-gray-800 text-lg text-center">
              {{ singleProductInfo.price }}
              <p class="text-gray-500">تومان</p>
            </div>
          </div>
        </div>
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
    document.title = this.singleProductInfo.name;
  },
};
</script>

<style></style>
