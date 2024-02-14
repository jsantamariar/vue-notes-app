<template>
  <!-- Language button -->
  <button
    type="button"
    @click="emit('toggleDropdown')"
    class="inline-flex items-center gap-2 font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
  >
    <SvgIcon v-if="flag === 'UsaFlag'" name="UsaFlag" width="15px" height="15px" />
    <SvgIcon
      v-if="flag === 'GermanyFlag'"
      name="GermanyFlag"
      width="15px"
      height="15px"
      class="mr-1"
    />
    <SvgIcon v-if="flag === 'ItalyFlag'" name="ItalyFlag" width="15px" height="15px" />
    <SvgIcon v-if="flag === 'ChinaFlag'" name="ChinaFlag" width="15px" height="15px" />
    {{ countryName }}
  </button>

  <!-- Language options -->
  <div v-if="isDropdownVisible" class="relative">
    <div
      class="absolute shadow-slate-400 shadow-lg w-32 md:56 z-50 right-2 top-8 text-base list-none bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700"
    >
      <ul class="py-2 font-medium" role="none">
        <li>
          <a
            @click="emit('onLanguageSelect', LanguageOptions.English)"
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
            @click="emit('onLanguageSelect', LanguageOptions.Deutch)"
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
            @click="emit('onLanguageSelect', LanguageOptions.Italian)"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div class="inline-flex items-center">
              <SvgIcon name="ItalyFlag" width="15px" height="15px" />
              <span class="dark:text-white text-stone-700"> Italiano</span>
            </div>
          </a>
        </li>
        <li>
          <a
            @click="emit('onLanguageSelect', LanguageOptions.Chinese)"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div class="inline-flex items-center">
              <SvgIcon name="ChinaFlag" width="15px" height="15px" />
              <span class="dark:text-white text-stone-700"> 中文 (繁體)</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LanguageOptions } from '@/types'
import SvgIcon from '@/components/Layout/SvgIcon.vue'

const { isDropdownVisible, countryName, flag } = defineProps({
  isDropdownVisible: Boolean,
  countryName: String,
  flag: String
})

const emit = defineEmits(['onLanguageSelect', 'toggleDropdown'])
</script>
