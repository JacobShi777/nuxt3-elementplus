import { loadEnv } from 'vite'

interface VITE_ENV_CONFIG {
  VITE_BASE_API: string
  VITE_CESIUM_BASE_URL: string
}

const envScript = (process.env as any).npm_lifecycle_script.split(' ')
const envName = envScript[envScript.length - 1] // 通过启动命令区分环境
const envData = loadEnv(envName, 'env') as unknown as VITE_ENV_CONFIG

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: envData, // 把env放入这个里面，通过useRuntimeConfig获取
  },
  vite: {
    envDir: '~/env', // 指定env文件夹
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
