<template>
  <!-- Language button -->
  <button
    type="button"
    @click="emit('toggleDropdown')"
    class="inline-flex mt-0 items-center gap-2 font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
  >
    <img
      v-if="flag === LanguageFlag.English"
      src="/src/assets/icons/usa-flag.svg"
      class="h-4 rounded-full w-4"
    />
    <img
      v-if="flag === LanguageFlag.Italian"
      src="/src/assets/icons/italy-flag.svg"
      class="h-4 rounded-full w-4"
    />
    <img
      v-if="flag === LanguageFlag.German"
      src="/src/assets/icons/germany-flag.svg"
      class="h-4 rounded-full w-4"
    />
    <img
      v-if="flag === LanguageFlag.Spanish"
      src="/src/assets/icons/spain-flag.svg"
      class="h-4 rounded-full w-4"
    />
    {{ countryName }}
  </button>

  <!-- Language options -->
  <div v-if="isDropdownVisible" class="relative">
    <div
      class="absolute shadow-slate-400 shadow-lg w-32 md:56 z-50 right-1 top-8 text-base list-none bg-white divide-y divide-gray-100 rounded-lg dark:bg-gray-700"
    >
      <ul class="py-2 font-medium" role="none">
        <li v-for="{ code, name, icon } in LANGUAGES_SUPPORTED" :key="name">
          <a
            @click="onLanguageSelection(code)"
            class="flex items-center justify-start cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div class="flex justify-center gap-2 m-0 p-0 items-center">
              <img :src="`/icons/${icon}.svg`" class="h-4 rounded-full w-4" />
              <span class="dark:text-white text-stone-700"> {{ name }} </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { setI18nLanguage } from '@/locale/i18n'
import { LANGUAGES_SUPPORTED } from '@/constants/main'
import { LanguageFlag } from '@/types'

const { isDropdownVisible, countryName, flag } = defineProps({
  isDropdownVisible: Boolean,
  countryName: String,
  flag: String
})

const onLanguageSelection = (code: string) => {
  emit('onLanguageSelect', code)
  setI18nLanguage(code)
}

const emit = defineEmits(['onLanguageSelect', 'toggleDropdown'])
</script>
