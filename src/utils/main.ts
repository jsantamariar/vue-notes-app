import { LanguageCode, LanguageName, LanguageFlag } from '@/types'

const getLanguage = (locale: LanguageCode) => {
  switch (locale) {
    case LanguageCode.English:
      return {
        name: LanguageName.English,
        code: LanguageCode.English,
        icon: {
          props: { name: LanguageFlag.English, width: '15px', height: '15px' }
        }
      }
    case LanguageCode.Spanish:
      return {
        name: LanguageName.Spanish,
        code: LanguageCode.Spanish,
        icon: {
          props: { name: LanguageFlag.Spanish, width: '15px', height: '15px' }
        }
      }
    case LanguageCode.German:
      return {
        name: LanguageName.German,
        code: LanguageCode.German,
        icon: {
          props: { name: LanguageFlag.German, width: '15px', height: '15px' }
        }
      }
    case LanguageCode.Italian:
      return {
        name: LanguageName.Italian,
        code: LanguageCode.Italian,
        icon: {
          props: { name: LanguageFlag.Italian, width: '15px', height: '15px' }
        }
      }
    default:
      return {
        name: LanguageName.English,
        code: LanguageCode.English,
        icon: {
          props: { name: LanguageFlag.English, width: '15px', height: '15px' }
        }
      }
  }
}

const getShortText = (text: string, maxLength?: number) => {
  if (text.length > (maxLength || 100)) {
    return text.slice(0, maxLength || 100) + '...'
  }
  return text
}

export { getLanguage, getShortText }
