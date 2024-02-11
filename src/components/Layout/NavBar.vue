<template>
  <nav
    class="shadow-slate-200 dark:shadow-gray-700 z-50 shadow-lg inset-x-0 top-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink to="/notes" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/src/assets/icons/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span
          class="self-center cursor-pointer text-2xl font-semibold whitespace-nowrap dark:text-white text-stone-700"
          >Notes</span
        >
      </RouterLink>
      <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
        <div class="flex items-center justify-center gap-2">
          <button
            @click="state.isDropdownVisible = !state.isDropdownVisible"
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            class="inline-flex items-center gap-2 font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <SvgIcon v-if="state.flag === 'UsaFlag'" name="UsaFlag" width="15px" height="15px" />
            <SvgIcon
              v-if="state.flag === 'GermanyFlag'"
              name="GermanyFlag"
              width="15px"
              height="15px"
              class="mr-1"
            />
            <SvgIcon
              v-if="state.flag === 'ItalyFlag'"
              name="ItalyFlag"
              width="15px"
              height="15px"
            />
            <SvgIcon
              v-if="state.flag === 'ChinaFlag'"
              name="ChinaFlag"
              width="15px"
              height="15px"
            />
            {{ state.countryName }}
          </button>
          <button
            id="theme-toggle"
            @click.prevent="toggleDark"
            type="button"
            :class="{ 'bg-blue-700': isDark }"
            class="text-gray-500 dark:text-gray-400 focus:outline-none rounded-lg text-sm p-2.5 hover:ring-4 hover:ring-gray-200 dark:hover:ring-gray-700"
          >
            <svg
              width="25px"
              height="25px"
              viewBox="-7.35 -7.35 49.70 49.70"
              :stroke="isDark ? '#fff' : '#000'"
              :fill="isDark ? '#fff' : '#000'"
              data-name="Layer 2"
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"
                ></path>
              </g>
            </svg>
          </button>
        </div>

        <!-- Dropdown -->
        <div class="relative">
          <div
            ref="dropdownMenu"
            v-if="state.isDropdownVisible"
            class="absolute shadow-slate-400 shadow-lg w-32 md:56 z-50 right-14 top-5 text-base list-none bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700"
          >
            <ul class="py-2 font-medium" role="none">
              <li>
                <a
                  @click="onSelectLanguage(LanguageOptions.English)"
                  href="#"
                  class="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="flex justify-center gap-1 m-0 p-0 items-center">
                    <SvgIcon name="UsaFlag" width="15px" height="15px" />
                    <span class="dark:text-white text-stone-700"> English (US) </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  @click="onSelectLanguage(LanguageOptions.Deutch)"
                  href="#"
                  class="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="flex gap-1 mx-1.5 p-0 items-center">
                    <SvgIcon name="GermanyFlag" width="15px" height="15px" />
                    <span class="dark:text-white text-stone-700"> Deutsch</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  @click="onSelectLanguage(LanguageOptions.Italian)"
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg
                      class="h-3.5 w-3.5 rounded-full me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-it"
                      viewBox="0 0 512 512"
                    >
                      <g fill-rule="evenodd" stroke-width="1pt">
                        <path fill="#fff" d="M0 0h512v512H0z" />
                        <path fill="#009246" d="M0 0h170.7v512H0z" />
                        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                      </g>
                    </svg>
                    <span class="dark:text-white text-stone-700"> Italiano</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  @click="onSelectLanguage(LanguageOptions.Chinese)"
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div class="inline-flex items-center">
                    <svg
                      class="h-3.5 w-3.5 rounded-full me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      id="flag-icon-css-cn"
                      viewBox="0 0 512 512"
                    >
                      <defs><path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" /></defs>
                      <path fill="#de2910" d="M0 0h512v512H0z" />
                      <use
                        width="30"
                        height="20"
                        transform="matrix(76.8 0 0 76.8 128 128)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-121 142.6 -47) scale(25.5827)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-98.1 198 -82) scale(25.6)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="rotate(-74 272.4 -114) scale(25.6137)"
                        xlink:href="#a"
                      />
                      <use
                        width="30"
                        height="20"
                        transform="matrix(16 -19.968 19.968 16 256 230.4)"
                        xlink:href="#a"
                      />
                    </svg>
                    <span class="dark:text-white text-stone-700"> 中文 (繁體)</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Menu Hamburger -->
      <button
        @click="state.isHambugerMenuVisible = !state.isHambugerMenuVisible"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-user"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 14"
        >
          <path
            :stroke="isDark ? 'white' : '#000'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Menu horizontal -->
      <div
        class="hidden md:flex items-center justify-between w-full md:w-auto md:order-1"
        id="navbar-language"
      >
        <ul
          class="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <li class="hover:dark:bg-gray-700" @click="state.isHambugerMenuVisible = false">
            <RouterLink
              to="/notes"
              active-class="md:dark:bg-blue-700 md:dark:text-white md:bg-stone-200 md:text-stone-700"
              class="block py-2 px-3 text-stone-700 dark:text-white rounded"
              aria-current="page"
              >Home
            </RouterLink>
          </li>
          <li class="hover:dark:bg-gray-700" @click="state.isHambugerMenuVisible = false">
            <RouterLink
              to="/login"
              active-class="md:dark:bg-blue-700 md:dark:text-white md:bg-stone-200 md:text-stone-700"
              class="block py-2 px-3 text-stone-700 dark:text-white rounded"
              >Login</RouterLink
            >
          </li>
          <li class="hover:dark:bg-gray-700" @click="state.isHambugerMenuVisible = false">
            <RouterLink
              to="/register"
              active-class="md:dark:bg-blue-700 md:dark:text-white md:bg-stone-200 md:text-stone-700"
              class="block py-2 px-3 text-stone-700 dark:text-white rounded"
              >Register</RouterLink
            >
          </li>
          <li @click="state.isHambugerMenuVisible = false">
            <RouterLink
              to="/admin"
              active-class="dark:bg-gray-700 bg-stone-200"
              class="block py-2 px-3 text-stone-700 hover:bg-stone-200 dark:text-white rounded hover:dark:bg-gray-700"
              >Admin</RouterLink
            >
          </li>
        </ul>
      </div>

      <!-- Hamburger menu options -->
      <div
        id="navbar-language"
        ref="dropdownMenu"
        v-if="state.isHambugerMenuVisible"
        class="justify-between w-full md:hidden md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col items-center font-medium gap-2 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <li @click="state.isHambugerMenuVisible = false">
            <RouterLink
              to="/notes"
              active-class="dark:bg-gray-700 bg-stone-200"
              class="block py-2 px-3 text-stone-700 hover:bg-stone-200 dark:text-white rounded hover:dark:bg-gray-700"
              aria-current="page"
              >Home
            </RouterLink>
          </li>
          <li @click="state.isHambugerMenuVisible = false">
            <RouterLink
              to="/login"
              active-class="dark:bg-gray-700 bg-stone-200"
              class="block py-2 px-3 text-stone-700 hover:bg-stone-200 dark:text-white rounded hover:dark:bg-gray-700"
              >Login</RouterLink
            >
          </li>
          <li @click="state.isHambugerMenuVisible = false">
            <RouterLink
              to="/register"
              active-class="dark:bg-gray-700 bg-stone-200"
              class="block py-2 px-3 text-stone-700 hover:bg-stone-200 dark:text-white rounded hover:dark:bg-gray-700"
              >Register</RouterLink
            >
          </li>
          <li @click="state.isHambugerMenuVisible = false">
            <RouterLink
              to="/admin"
              active-class="dark:bg-gray-700 bg-stone-200"
              class="block py-2 px-3 text-stone-700 hover:bg-stone-200 dark:text-white rounded hover:dark:bg-gray-700"
              >Admin</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { onClickOutside, useDark, useToggle } from '@vueuse/core'

import { LanguageOptions } from '@/types'
import SvgIcon from './SvgIcon.vue'

const dropdownMenu = ref()
const state = reactive({
  isDropdownVisible: false,
  isHambugerMenuVisible: false,
  countryName: 'English (US)',
  flag: 'UsaFlag'
})

const isDark = useDark()
const toggleDarkMode = useToggle(isDark)

const toggleDark = () => {
  toggleDarkMode()
}

const onSelectLanguage = (languageOption: string) => {
  state.isDropdownVisible = false

  switch (languageOption) {
    case LanguageOptions.English:
      state.countryName = 'English (US)'
      state.flag = 'UsaFlag'
      break
    case LanguageOptions.Deutch:
      state.countryName = 'Deutsch'
      state.flag = 'GermanyFlag'
      break
    case LanguageOptions.Italian:
      state.countryName = 'Italiano'
      state.flag = 'ItalyFlag'
      break
    case LanguageOptions.Chinese:
      state.countryName = '中文 (繁體)'
      state.flag = 'ChinaFlag'
      break
    default:
      state.countryName = 'English (US)'
      state.flag = 'UsaFlag'
  }
}

onClickOutside(dropdownMenu, () => {
  state.isDropdownVisible = false
  state.isHambugerMenuVisible = false
})
</script>
