// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';
import ViteComponents from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

export default defineNuxtConfig({
    devtools: {
        enabled: false,
    },

    modules: [
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'floating-vue/nuxt',
    ],

    build: {
        transpile: [
            'vue-toastification',
        ],
    },

    css: [
        '@/assets/styles/main.scss',
    ],

    plugins: ['@/plugins/emitter.ts'],

    test: {
        globals: true,
        environment: 'jsdom',
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    i18n: {
        defaultLocale: process.env.DEFAULT_LOCALE,
        strategy: 'no_prefix',
        vueI18n: './i18n/i18n.config',
        langDir: 'i18n/locales',
        locales: [
            { code: 'en', file: 'en.json' },
            { code: 'ru', file: 'ru.json' },
        ],
        lazy: true,
    },

    vite: {
        plugins: [
            svgLoader({
                svgoConfig: {
                    multipass: true,
                },
            }),
            ViteComponents({
                resolvers: [
                    IconsResolver({
                        componentPrefix: '',
                    }),
                ],
                dts: true,
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "sass:math";
                        @import "@/assets/styles/variables-color-scss";
                        @import "@/assets/styles/variables-size-scss";
                        @import "@/assets/styles/functions";
                        @import "@/assets/styles/mixins";
                        `,
                },
            },
        },
    },

    app: {
        // layoutTransition: { name: 'fade', mode: 'out-in' },
        pageTransition: { name: 'fade', mode: 'out-in' },

        head: {
            viewport: 'width=device-width,initial-scale=1',
            link: [{ rel: 'icon', type: 'image/*', href: 'favicon.ico' }],
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Project Nuxt 3' },
                { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
            ],
        },
    },

    // alias: {
    //     '@interfaces': '/path/to/interfaces',
    //     '@store': '/path/to/store',
    //     '@constants': '/path/to/constants',
    //     '@composables': '/path/to/composables',
    //     '@components': '/path/to/components',
    // },
});
