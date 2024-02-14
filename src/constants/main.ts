import { LanguageFlag, LanguageCode, LanguageName } from '@/types'

const LANGUAGES_SUPPORTED = [
  { name: LanguageName.English, code: LanguageCode.English, icon: LanguageFlag.English },
  { name: LanguageName.German, code: LanguageCode.German, icon: LanguageFlag.German },
  { name: LanguageName.Italian, code: LanguageCode.Italian, icon: LanguageFlag.Italian },
  { name: LanguageName.Spanish, code: LanguageCode.Spanish, icon: LanguageFlag.Spanish }
]

export { LANGUAGES_SUPPORTED }
