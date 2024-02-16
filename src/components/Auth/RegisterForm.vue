<template>
  <section class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div
      class="w-full bg-white shadow-slate-400 shadow-lg rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Sign up
        </h1>
        <form class="space-y-4 md:space-y-6" action="#">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your email</label
            >
            <input
              type="email"
              name="email"
              autocomplete="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="user@address.com"
              v-model="credentials.email"
              @input="(e: Event) => (credentials.email = (e.target as HTMLInputElement).value)"
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              autocomplete="current-password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="credentials.password"
              @input="(e: Event) => (credentials.password = (e.target as HTMLInputElement).value)"
            />
          </div>

          <button
            @click.prevent="onSubmit"
            type="submit"
            class="w-full text-stone hover:ring-1 shadow-md shadow-stone-300 focus:ring-stone-300 bg-stone-200 hover:bg-stone-300 focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Sign up
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?
            <RouterLink
              to="/login"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >Sign in</RouterLink
            >
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth'
import { reactive } from 'vue'

const authStore = useAuthStore()

const credentials = reactive({
  email: '',
  password: ''
})

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert('Please add an email and password.')
    return
  }

  authStore.register(credentials.email, credentials.password)
}
</script>
