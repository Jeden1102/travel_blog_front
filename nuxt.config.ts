// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      googleApiKey: "",
      apiUrl: "",
    },
  },
  image: {
    dir: "assets/images",
  },
  strapi: {
    url: process.env.NUXT_PUBLIC_API_URL || "http://localhost:1337",
  },
  modules: [
    [
      "@nuxtjs/google-fonts",

      {
        families: {
          Lato: [100, 300, 400, 700, 900],
          Roboto: true,
          Anta: true,
          "Cormorant Garamond": [300, 400, 500, 700],
        },
      },
    ],
    "nuxt-icon",
    "@nuxt/image",
    "nuxt-aos",
    "@nuxtjs/strapi",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
