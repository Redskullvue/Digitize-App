<template>
  <div class="bg-white p-5 rounded-xl sticky top-20">
    <!-- Catergories -Desktop Mode -->
    <div>
      <div class="text-orange-500 text-lg font-bold mb-5">دسته بندی</div>
      <ul class="mb-7 px-2">
        <li
          @click="resetSort"
          class="mb-1 hover:bg-gray-100 cursor-pointer rounded-md"
        >
          <a href="#" class="flex items-center py-2">
            <span class="relative h-6 w-6 rounded-full bg-gray-100">
              <i-shop class="absolute -bottom-1 -left-1" />
            </span>
            <span class="mr-2 text-slate-800"> همه محصولات</span></a
          >
        </li>

        <li
          @click="smartPhone"
          class="mb-1 hover:bg-gray-100 cursor-pointer rounded-md"
        >
          <a href="#" class="flex items-center py-2">
            <span class="relative h-6 w-6 rounded-full bg-gray-100">
              <i-mobile class="absolute -bottom-1 -left-1" />
            </span>
            <span class="mr-2 text-slate-800">گوشی موبایل</span></a
          >
        </li>

        <li class="mb-1 hover:bg-gray-100 cursor-pointer rounded-md">
          <a href="#" class="flex items-center py-2">
            <span class="relative h-6 w-6 rounded-full bg-gray-100">
              <i-lap-top class="absolute -bottom-1 -left-1" />
            </span>
            <span class="mr-2 text-slate-800">لپ تاپ</span>
          </a>
        </li>

        <li
          @click="smartWatch"
          class="hover:bg-gray-100 cursor-pointer rounded-md"
        >
          <a href="#" class="flex items-center py-2">
            <span class="relative h-6 w-6 rounded-full bg-gray-100">
              <i-watch class="absolute -bottom-1 -left-1" />
            </span>
            <span class="mr-2 text-slate-800">ساعت هوشمند</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- Filters -Desktop Filter -->
    <div class="">
      <div class="text-orange-500 text-lg font-bold mb-5">فیلتر ها</div>
      <!-- Accordion number 1  -->
      <div class="px-2 mt-4 mb-3">
        <!-- Accordion Header -->
        <div
          class="flex items-center justify-between hover:bg-gray-100 rounded-xl cursor-pointer"
          @click="isBrandsAcc = !isBrandsAcc"
        >
          <div class="flex items-center p-2">
            <span class="relative h-6 w-6 rounded-full bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 absolute -bottom-1 -left-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
            </span>
            <span class="text-slate-800 mr-2">برند محصول </span>
          </div>
          <!-- These 2 SVGS are Chevron ICons -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
            v-if="isBrandsAcc == false"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
            v-if="isBrandsAcc == true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
        <!-- Accordion Content -->
        <div v-if="isBrandsAcc" class="px-2">
          <div class="px-2 flex justify-center flex-col gap-y-2">
            <label for="apple" class="py-1 cursor pointer">
              <input
                type="checkbox"
                named="brand"
                id="apple"
                class="form-checkbox rounded text-orange-500 focus:ring-orange-500"
              />
              <span class="mr-2 text-slate-500">اپل</span>
            </label>
            <label for="Xiaomi" class="py-1 cursor pointer">
              <input
                type="checkbox"
                named="brand"
                id="Xiaomi"
                class="form-checkbox rounded text-orange-500 focus:ring-orange-500"
              />
              <span class="mr-2 text-slate-500">شیاومی</span>
            </label>
            <label for="Samsung" class="py-1 cursor pointer">
              <input
                type="checkbox"
                named="brand"
                id="Samsung"
                class="form-checkbox rounded text-orange-500 focus:ring-orange-500"
              />
              <span class="mr-2 text-slate-500">سامسونگ</span>
            </label>
          </div>
        </div>
        <div>
          <div
            class="flex items-center justify-between hover:bg-gray-100 rounded-xl cursor-pointer"
            @click="isColorAcc = !isColorAcc"
          >
            <div class="flex items-center p-2 mt-2">
              <span class="relative h-6 w-6 rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 absolute -bottom-1 -left-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                  />
                </svg>
              </span>
              <span class="text-slate-800 mr-2">رنگ محصول </span>
            </div>
            <!-- These 2 SVGS are Chevron ICons -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
              v-if="isColorAcc == false"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
              v-if="isColorAcc == true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          <!-- Accordion Content -->
          <div v-if="isColorAcc" class="px-2">
            <div class="px-2 flex justify-center flex-col gap-y-2">
              <label for="Black" class="py-1 cursor pointer">
                <input
                  type="checkbox"
                  named="Color"
                  id="Black"
                  class="form-checkbox rounded text-orange-500 focus:ring-orange-500"
                />
                <span class="mr-2 text-slate-500">مشکی</span>
              </label>
              <label for="Yellow" class="py-1 cursor pointer">
                <input
                  type="checkbox"
                  named="Color"
                  id="Yellow"
                  class="form-checkbox rounded text-orange-500 focus:ring-orange-500"
                />
                <span class="mr-2 text-slate-500">زرد</span>
              </label>
              <label for="White" class="py-1 cursor pointer">
                <input
                  type="checkbox"
                  named="Color"
                  id="White"
                  class="form-checkbox rounded text-orange-500 focus:ring-orange-500"
                />
                <span class="mr-2 text-slate-500">سفید</span>
              </label>
              <label for="Purple" class="py-1 cursor pointer">
                <input
                  type="checkbox"
                  named="color"
                  id="purple"
                  class="form-checkbox rounded text-orange-500 focus:ring-orange-500"
                />
                <span class="mr-2 text-slate-500">بنفش</span>
              </label>
            </div>
          </div>
        </div>
        <!-- The End Of ACccordions  -->
      </div>
    </div>
  </div>
</template>

<script>
import { iShop, iMobile, iWatch, iLapTop } from "./icons/index";
export default {
  components: {
    iMobile,
    iLapTop,
    iWatch,
    iShop,
  },
  props: {
    products: { type: Array, required: true },
  },
  data() {
    return {
      // This data is For Accordion Number 1 to Toggle
      isBrandsAcc: false,
      isColorAcc: false,
      //This is for sort and filtering
      selectedCategory: [],
    };
  },
  methods: {
    //These 3 functions below indicate how to sort our product and show it to the user
    smartWatch() {
      this.selectedCategory = [];
      this.products.filter((item) => {
        if (item.section == "Watch") {
          this.selectedCategory.push(item);
        }
      });
      this.$emit("changeCategory", this.selectedCategory);
    },
    smartPhone() {
      this.selectedCategory = [];
      this.products.filter((item) => {
        if (item.section == "Mobile") {
          this.selectedCategory.push(item);
        }
      });
      this.$emit("changeCategory", this.selectedCategory);
    },
    resetSort() {
      this.selectedCategory = [];
      this.products.forEach((item) => {
        this.selectedCategory.push(item);
      });
      this.$emit("changeCategory", this.selectedCategory);
    },
  },
};
</script>

<style></style>
