<template>
  <nav
    class="shadow-slate-200 dark:shadow-gray-700 z-50 shadow-lg inset-x-0 top-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <!-- Navbar Brand -->
      <NavbarBrand />
      <!-- Menu horizontal -->
      <MenuHorizontal />
      <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
        <!-- Dark/Light toggler -->
        <DarkLightToggler
          :isDark="isDark"
          :countryName="state.countryName"
          :flag="state.flag"
          @onThemeToggle="toggleDarkMode"
        />
        <!-- Language Dropdown -->
        <LanguageDropdown
          :isDropdownVisible="state.isDropdownVisible"
          :countryName="state.countryName"
          :flag="state.flag"
          @onLanguageSelect="onSelectLanguage"
          @toggleDropdown="state.isDropdownVisible = !state.isDropdownVisible"
        />
      </div>
      <!-- Hamburger menu options -->
      <HamburgerMenu
        :isHambugerMenuVisible="state.isHambugerMenuVisible"
        @onCloseMenu="state.isHambugerMenuVisible = !state.isHambugerMenuVisible"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import LanguageDropdown from './LanguageDropdown.vue'
import HamburgerMenu from './HamburgerMenu.vue'
import DarkLightToggler from './DarkLightToggler.vue'
import MenuHorizontal from './MenuHorizontal.vue'
import NavbarBrand from './NavbarBrand.vue'

import useNavbar from '@/composables/useNavbar'

const { state, languageDropdownRef, isDark, toggleDarkMode, onSelectLanguage } = useNavbar()
</script>
