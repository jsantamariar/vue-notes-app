<template>
  <div
    class="hidden md:flex items-center justify-between w-full md:w-auto md:order-1"
    id="navbar-language"
  >
    <ul
      class="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <li class="hover:dark:bg-gray-700" @click="emit('onCloseHamburger')">
        <RouterLink
          to="/notes"
          active-class="md:dark:bg-blue-700 md:dark:text-white md:bg-stone-200 md:text-stone-700"
          class="block py-2 px-3 text-stone-700 dark:text-white rounded"
          aria-current="page"
          >Home
        </RouterLink>
      </li>
      <li
        v-if="!authStore.isLogged"
        class="hover:dark:bg-gray-700"
        @click="emit('onCloseHamburger')"
      >
        <RouterLink
          to="/login"
          active-class="md:dark:bg-blue-700 md:dark:text-white md:bg-stone-200 md:text-stone-700"
          class="block py-2 px-3 text-stone-700 dark:text-white rounded"
          >Login</RouterLink
        >
      </li>
      <li
        v-if="!authStore.isLogged"
        class="hover:dark:bg-gray-700"
        @click="emit('onCloseHamburger')"
      >
        <RouterLink
          to="/register"
          active-class="md:dark:bg-blue-700 md:dark:text-white md:bg-stone-200 md:text-stone-700"
          class="block py-2 px-3 text-stone-700 dark:text-white rounded"
          >Register</RouterLink
        >
      </li>
      <li v-if="authStore.isLogged" @click="emit('onCloseHamburger')">
        <RouterLink
          to="/admin"
          active-class="dark:bg-gray-700 bg-stone-200"
          class="block py-2 px-3 text-stone-700 hover:bg-stone-200 dark:text-white rounded hover:dark:bg-gray-700"
          >Admin</RouterLink
        >
      </li>
      <li v-if="authStore.isLogged" @click="onLogout">
        <a
          active-class="dark:bg-gray-700 bg-stone-200"
          class="block cursor-pointer py-2 px-3 text-stone-700 hover:bg-stone-200 dark:text-white rounded hover:dark:bg-gray-700"
          >Logout</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()

const onLogout = () => {
  emit('onCloseHamburger')
  authStore.logout()
}
const emit = defineEmits(['onCloseHamburger'])
</script>
