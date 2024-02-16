import { reactive, ref } from 'vue'
import { onClickOutside, useDark, useToggle } from '@vueuse/core'
import { LanguageCode, LanguageFlag, LanguageName } from '@/types'

const useNavbar = () => {
  const isDark = useDark()
  const toggleDarkMode = useToggle(isDark)

  const languageDropdownRef = ref()
  const state = reactive({
    isDropdownVisible: false,
    isHambugerMenuVisible: false,
    countryName: 'English (US)',
    flag: 'usa-flag',
    code: 'en'
  })

  const onSelectLanguage = (option: string) => {
    state.isDropdownVisible = false

    switch (option) {
      case LanguageCode.English:
        state.countryName = LanguageName.English
        state.flag = LanguageFlag.English
        state.code = LanguageCode.English
        break
      case LanguageCode.Spanish:
        state.countryName = LanguageName.Spanish
        state.flag = LanguageFlag.Spanish
        state.code = LanguageCode.English
        break
      case LanguageCode.Italian:
        state.countryName = LanguageName.Italian
        state.flag = LanguageFlag.Italian
        state.code = LanguageCode.Italian
        break
      case LanguageCode.German:
        state.countryName = LanguageName.German
        state.flag = LanguageFlag.German
        state.code = LanguageCode.German
        break
      default:
        state.countryName = LanguageName.English
        state.flag = LanguageFlag.English
        state.code = LanguageCode.English
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
    languageDropdownRef,
    isDark
  }
}

export default useNavbar
