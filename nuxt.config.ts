// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: [100, 300, 400, 700, 900],
          Roboto: true,
          "Cormorant Garamond": [300, 400, 500, 700],
        },
      },
    ],
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
