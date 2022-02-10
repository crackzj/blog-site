import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), VueSetupExtend(),AutoImport({
      imports:['vue','vue-router']
    })
  ],
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'src')
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        
      }
    }
  }
})
