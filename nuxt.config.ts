// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/styles/_variables.scss";`
        }
      }
    }
  },
  modules: [
    '@element-plus/nuxt'
  ],
  // css:[
  //   // 'element-plus/dist/index.css',
  // ],
  elementPlus: {
    icon: 'ElIcon',
    // importStyle: 'scss',
    themes: ['dark'],
  },
})
