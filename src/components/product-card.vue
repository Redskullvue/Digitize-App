<template>
  <div class="bg-white rounded-lg overflow-hidden px-2 py-4 shadow-md">
    <div class="flex justify-center items-center bg-auto">
      <img
        class="mb-2 rounded-lg object-cover"
        :src="require(`@/assets/images/${image}.jpeg`)"
        alt="Image"
      />
    </div>
    <div>
      <div
        class="font-light text-gray-200 mt-4 text-xs mb-4 flex items-center justify-between md:text-base"
      >
        {{ brand }}
        <div class="display flex items-center justify-center">
          <div
            v-for="(color, index) in colors"
            :key="index"
            class="w-4 h-4 -mr-1 rounded-full"
            :class="color"
          ></div>
        </div>
      </div>
      <p class="font-bold text-xs md:text-base">{{ name }}</p>
      <p class="font-bold text-sm text-orange-600 text-left mt-3 md:text-base">
        {{ price }} تومان
      </p>
    </div>
    <div
      class="text-orange-400 px-2 py-1 mt-4 text-center border-t-2 border-gray-100"
    >
      <button class="text-sm font-bold md:text-lg" @click="test">
        مشاهده و سفارش
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "YProductCard",
  props: {
    name: { type: String, required: true },
    id: { type: String, required: false },
    price: { type: String, required: true },
    brand: { type: String, required: true },
    image: { type: String, required: true },
    colors: { type: Array, required: true },
  },
};
</script>

<style></style>
