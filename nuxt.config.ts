import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        "assets": fileURLToPath(new URL('./assets', import.meta.url)),
        "public": fileURLToPath(new URL('./public', import.meta.url)),
        "images": fileURLToPath(new URL('./assets/images', import.meta.url)),
        "scss": fileURLToPath(new URL('./assets/scss', import.meta.url)),
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
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" },
                { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }
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
