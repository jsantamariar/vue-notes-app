import { LanguageCode, LanguageName, LanguageFlag } from '@/types'
import SvgIcon from '@/components/Layout/SvgIcon.vue'

const getLanguage = (locale: LanguageCode) => {
  switch (locale) {
    case LanguageCode.English:
      return {
        name: LanguageName.English,
        code: LanguageCode.English,
        icon: {
          component: SvgIcon,
          props: { name: LanguageFlag.English, width: '15px', height: '15px' }
        }
      }
    case LanguageCode.Spanish:
      return {
        name: LanguageName.Spanish,
        code: LanguageCode.Spanish,
        icon: {
          component: SvgIcon,
          props: { name: LanguageFlag.Spanish, width: '15px', height: '15px' }
        }
      }
    case LanguageCode.German:
      return {
        name: LanguageName.German,
        code: LanguageCode.German,
        icon: {
          component: SvgIcon,
          props: { name: LanguageFlag.German, width: '15px', height: '15px' }
        }
      }
    case LanguageCode.Italian:
      return {
        name: LanguageName.Italian,
        code: LanguageCode.Italian,
        icon: {
          component: SvgIcon,
          props: { name: LanguageFlag.Italian, width: '15px', height: '15px' }
        }
      }
    default:
      return {
        name: LanguageName.English,
        code: LanguageCode.English,
        icon: {
          component: SvgIcon,
          props: { name: LanguageFlag.English, width: '15px', height: '15px' }
        }
      }
  }
}

export { getLanguage }
