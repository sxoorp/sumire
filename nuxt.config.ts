// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/fonts", "@nuxt/image", "@storyblok/nuxt"],
  devtools: { enabled: false },
  storyblok: { accessToken: process.env.STORYBLOK_TOKEN },
  runtimeConfig: { storyblok: process.env.STORYBLOK_TOKEN }
});