// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/styles/_variables.scss";
            @import "~/assets/styles/global.scss";
          `,
        },
      },
    },
  },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    '@/assets/styles/variables.css',
  ],
  elementPlus: {
    icon: 'ElIcon',
    // importStyle: 'scss',
    themes: ['dark'],
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://192.168.10.5:8887',
        changeOrigin: true,
        prependPath: true,
      },
    },
    // 该配置用于服务端请求转发
    routeRules: {
      '/api/**': {
        proxy: 'http://192.168.10.5:8887/**',
      },
      '/nossr/**': {
        ssr: false,
      },
      // '/': {
      //   redirect: '/nossr',
      // },
    },
  },
})
