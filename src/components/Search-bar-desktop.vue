<template>
  <nav
    class="sticky bg-white p-2 shadow-lg z-10 top-0 left-0 right-0 items-center mb-4 justify-between hidden md:flex"
  >
    <ul class="flex items-center gap-x-4 text-slate-800 text-lg">
      <li>
        <a class="p-4 block" href="#">
          <img src="../assets/images/logo.png" class="w-8 h-8" />
        </a>
      </li>
      <li>
        <a
          class="p-4 block hover:text-orange-400 transition-all duration-150"
          href="#"
          >خانه</a
        >
      </li>
      <li>
        <a
          class="p-4 block hover:text-orange-400 transition-all duration-150"
          href="#"
          >موبایل</a
        >
      </li>
      <li>
        <a
          class="p-4 block hover:text-orange-400 transition-all duration-150"
          href="#"
        >
          لپتاپ</a
        >
      </li>
      <li>
        <a
          class="p-4 block hover:text-orange-400 transition-all duration-150"
          href="#"
          >ساعت هوشمند</a
        >
      </li>
    </ul>
    <div class="flex-1 max-w-2xl ml-4">
      <div class="bg-gray-100 p-2 rounded-lg flex items-center">
        <span>
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
        </span>
        <input
          class="bg-gray-100 focus:outline-none bg-transparent w-full px-2"
          type="text"
          placeholder="نام محصول ، برند یا رنگ ..."
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
