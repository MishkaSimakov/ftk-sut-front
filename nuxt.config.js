export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'ftk-sut-front',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '@yaireo/tagify/dist/tagify.css',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/http',
        '@nuxtjs/moment',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/fontawesome',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    moment: {
        defaultLocale: 'ru',
        timezone: true,
        defaultTimezone: 'Europe/Moscow'
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/login',
                        method: 'post'
                    },
                    logout: {
                        url: '/logout',
                        method: 'post'
                    },
                    user: {
                        url: '/api/user',
                        method: 'get',
                        propertyName: false
                    }
                },
                token: {
                    required: false,
                    type: false,
                },
                url: 'http://localhost:8000',
                provider: 'laravel/sanctum',
            }
        }
    },
    fontawesome: {
        icons: {
            solid: ['faPlus'],
        },
    },
}
