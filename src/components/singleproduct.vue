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
    <!-- Bread Crumbs -->
    <div class="flex items-center text-xs mt-8">
      <span class="text-orange-500 mx-1">{{ singleProductInfo.section }}</span>
      <span>
        <i-forward />
      </span>
      <span class="text-orange-500 mx-1">{{ singleProductInfo.brand }}</span>
      <span> <i-forward /></span>
      <span class="text-gray-500">{{ singleProductInfo.name }}</span>
    </div>
    <!-- Single Product information -->
    <div class="mt-10 flex flex-col items-center mx-4 p-2">
      <img
        :src="require(`@/assets/images/${singleProductInfo.image}.png`)"
        alt="Product Image"
      />
      <div class="mt-4 text-center">
        <h2 class="text-slate-800">{{ singleProductInfo.name }}</h2>
        <h4 class="text-gray-400 mt-2">Samsung A50 256gb</h4>
      </div>
    </div>
    <div>
      <!-- Color Palette Section -->
      <div class="mt-4 mb-4 flex justify-center items-center md:text-base">
        <h4>انتخاب رنگ :</h4>
        <div class="flex items-center justify-center mr-5">
          <div
            v-for="(color, index) in singleProductInfo.colors"
            :key="index"
            class="w-6 h-6 rounded-full -mr-1"
            :class="color"
          ></div>
        </div>
      </div>
      <div class="flex items-center text-sm justify-around mx-2 p-1 mb-4 mt-3">
        <div class="flex items-center justify-center">
          <span class="mx-2">
            <i-mobile class="w-4 h-5" />
          </span>
          <span class="font-bold">فروشنده :</span>
          <span class="text-slate-800">دیجی زون</span>
        </div>
        <div class="flex items-center justify-center">
          <span class="mx-2">
            <i-mobile class="w-4 h-5" />
          </span>
          <span class="font-bold"> گارانتی :</span>
          <span class="text-slate-800"> 18 ماه زرین خدمت</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { iForward, iMobile, iBackChevron } from "./icons/index";
export default {
  name: "singleProduct",
  props: ["data"],
  components: {
    iForward,
    iMobile,
    iBackChevron,
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
