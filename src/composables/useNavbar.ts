import { reactive, ref } from 'vue'
import { onClickOutside, useDark, useToggle } from '@vueuse/core'
import { LanguageOptions } from '@/types'

const useNavbar = () => {
  const isDark = useDark()
  const toggleDarkMode = useToggle(isDark)

  const languageDropdown = ref()
  const state = reactive({
    isDropdownVisible: false,
    isHambugerMenuVisible: false,
    countryName: 'English (US)',
    flag: 'UsaFlag'
  })

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

  // onClickOutside(languageDropdown, () => {
  //   console.log('clicked outside')
  //   state.isDropdownVisible = false
  //   state.isHambugerMenuVisible = false
  // })

  return {
    toggleDarkMode,
    onSelectLanguage,
    state,
    languageDropdown,
    isDark
  }
}

export default useNavbar
