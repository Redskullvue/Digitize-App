<template>
  <div class="flex items-center justify-between mb-4 mt-11 px-4 md:hidden">
    <div>
      <img class="w-8 h-8" src="../assets/images/logo.png" alt="logo" />
    </div>
    <div class="text-lg text-slate-800 font-bold">ساعت هوشمند</div>
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
    <filter-sort />
  </div>
</template>

<script>
import filterSort from "./filter.vue";
export default {
  name: "SearchBar",
  components: {
    filterSort,
  },
};
</script>

<style></style>
