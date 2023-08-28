export default defineI18nConfig(() => ({
    locale: process.env.DEFAULT_LOCALE,
    fallbackLocale: process.env.FALLBACK_LOCALE,
    globalInjection: true,
    legacy: false,
}));
