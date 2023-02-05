import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

import PostcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 对css的行为进行配置
  css: {
    // 是对css模块化的默认行为进行覆盖
    modules: {},
    // 预处理器配置项
    preprocessorOptions: {
      scss: {
        // 一些配置项
      },
      less: {
        // 一些配置项
      }
    },
    // 后处理器配置项
    postcss: {
      plugins: [PostcssPresetEnv()]
    }
  }
})
