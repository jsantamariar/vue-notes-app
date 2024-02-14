import { createI18n } from 'vue-i18n'
import english from './translations/en.json'
import spanish from './translations/es.json'
import italian from './translations/it.json'
import german from './translations/de.json'
import { nextTick } from 'vue'

let i18n: any

export const SUPPORT_LOCALES = ['en', 'es', 'it', 'de']

export async function loadLocaleMessages(locale: string) {
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./translations/${locale}.json`
  )

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}

export function setI18nLanguage(locale: string) {
  loadLocaleMessages(locale)

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }

  document.querySelector('html')!.setAttribute('lang', locale)
  localStorage.setItem('lang', locale)
}

export default function setupI18n() {
  if (!i18n) {
    const locale = localStorage.getItem('lang') || 'en'

    i18n = createI18n({
      globalInjection: true,
      legacy: false,
      allowComposition: true,
      locale,
      fallbackLocale: 'en',
      messages: {
        en: english,
        es: spanish,
        it: italian,
        de: german
      }
    })

    setI18nLanguage(locale)
  }
  return i18n
}
