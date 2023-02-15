<template>
  <div
    class="bg-white py-4 px-4 fixed bottom-0 left-0 right-0 w-full rounded-tr-lg rounded-tl-lg md:hidden"
  >
    <nav>
      <ul class="flex items-center justify-between px-2 gap-x-2 w-full">
        <li @click="selectedNav = 'home'" class="flex-auto p-2">
          <a class="flex items-center" href="#">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
            <span
              v-if="selectedNav == 'home'"
              class="text-sm mr-2 text-orange-500"
              >خانه</span
            >
          </a>
        </li>
        <li @click="selectedNav = 'store'" class="flex-auto p-2">
          <a class="flex items-center" href="#">
            <span>
              <i-squares />
            </span>
            <span
              v-if="selectedNav == 'store'"
              class="text-sm mr-2 text-orange-500"
              >محصولات</span
            >
          </a>
        </li>
        <li @click="selectedNav = 'shoppingCart'" class="flex-auto p-2">
          <a class="flex items-center" href="#">
            <span>
              <i-shopping-bag />
            </span>
            <span
              v-if="selectedNav == 'shoppingCart'"
              class="text-sm mr-2 text-orange-500"
              >سبد خرید</span
            >
          </a>
        </li>
        <li @click="selectedNav = 'faves'" class="flex-auto p-2">
          <a class="flex items-center" href="#">
            <span>
              <i-heart />
            </span>
            <span
              v-if="selectedNav == 'faves'"
              class="text-sm mr-2 text-orange-500"
              >علاقه</span
            >
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import iSquares from "./icons/iSquares.vue";
import iShoppingBag from "./icons/iShoppingBag.vue";
import iHeart from "./icons/iHeart.vue";
export default {
  name: "bottomNav",
  components: {
    iSquares,
    iShoppingBag,
    iHeart,
  },
  data() {
    return {
      selectedNav: "home",
    };
  },
};
</script>

<style></style>
