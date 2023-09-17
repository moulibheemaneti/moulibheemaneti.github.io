// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        "assets": "./assets",
        "public": "./public",
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Mouli Bheemaneti',
            htmlAttrs: { lang: 'en' },
            meta: [
                { name: 'description', content: "Mouli Bheemaneti's Universe." },
                { name: 'theme-color', content: "#000000" },
            ],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" },
            ]
        },
        pageTransition: {
            name: 'fade',
            type: 'transition',
            mode: 'in-out',
        }
    },

    css: ['~/assets/scss/main.scss'],

    ssr: false,
})
