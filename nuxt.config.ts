// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/_variables.scss";',
        },
      },
    },
  },
  modules: [
    '@element-plus/nuxt',
  ],
  // css:[
  //   // 'element-plus/dist/index.css',
  // ],
  elementPlus: {
    icon: 'ElIcon',
    // importStyle: 'scss',
    themes: ['dark'],
  },
  nitro: {
    devProxy: {
      '/gateway': {
        target: 'http://192.168.0.19:8887',
        changeOrigin: true,
        prependPath: true,
      },
    },
    // 该配置用于服务端请求转发
    routeRules: {
      '/gateway/**': {
        proxy: 'http://192.168.0.19:8887/**',
      },
    },
  },
})
