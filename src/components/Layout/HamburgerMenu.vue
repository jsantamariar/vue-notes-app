<template>
  <!-- Hamburger Menu -->
  <button
    @click="emit('onCloseMenu')"
    class="inline-flex mt-0 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="navbar-user"
    aria-expanded="false"
  >
    <span class="sr-only">Open main menu</span>
    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
      <path
        :stroke="isDark ? '#fff' : '#000'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </button>
  <!-- Hamburger Options -->
  <div
    v-if="isHambugerMenuVisible"
    id="navbar-language"
    ref="dropdownMenu"
    class="justify-between w-full md:hidden md:w-auto md:order-1"
  >
    <ul
      class="flex flex-col items-center font-medium gap-2 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <li @click="emit('onCloseMenu')">
        <RouterLink
          to="/notes"
          active-class="dark:bg-gray-700 bg-stone-200"
          class="block py-2 px-3 text-stone-700 hover:bg-stone-200 dark:text-white rounded hover:dark:bg-gray-700"
          aria-current="page"
          >Home
        </RouterLink>
      </li>
      <li @click="emit('onCloseMenu')">
        <RouterLink
          to="/login"
          active-class="dark:bg-gray-700 bg-stone-200"
          class="block py-2 px-3 text-stone-700 hover:bg-stone-200 dark:text-white rounded hover:dark:bg-gray-700"
          >Login</RouterLink
        >
      </li>
      <li @click="emit('onCloseMenu')">
        <RouterLink
          to="/register"
          active-class="dark:bg-gray-700 bg-stone-200"
          class="block py-2 px-3 text-stone-700 hover:bg-stone-200 dark:text-white rounded hover:dark:bg-gray-700"
          >Register</RouterLink
        >
      </li>
      <li @click="emit('onCloseMenu')">
        <RouterLink
          to="/admin"
          active-class="dark:bg-gray-700 bg-stone-200"
          class="block py-2 px-3 text-stone-700 hover:bg-stone-200 dark:text-white rounded hover:dark:bg-gray-700"
          >Admin</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()

const { isHambugerMenuVisible } = defineProps({
  isHambugerMenuVisible: Boolean
})

const emit = defineEmits(['onCloseMenu'])
</script>
